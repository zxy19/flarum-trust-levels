import Mithril from 'mithril';
import UserPage from 'flarum/forum/components/UserPage';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import app from 'flarum/forum/app';
import Button from 'flarum/common/components/Button';
import User from 'flarum/common/models/User';
import avatar from 'flarum/common/helpers/avatar';
import username from 'flarum/common/helpers/username';
import Link from 'flarum/common/components/Link';
import Placeholder from 'flarum/common/components/Placeholder';
import humanTime from 'flarum/common/helpers/humanTime';
import Alert from 'flarum/common/components/Alert';
import Switch from 'flarum/common/components/Switch'
import { Condition, getConditionMap, getConditions, HumanizeUtils, OPERATOR, userValueUtil } from '@xypp-collector/forum';
import type { ConditionData } from '@xypp-collector/common/types/data';
import TrustLevel from '../../common/models/TrustLevel';
import { showIf } from '../../common/utils/NodeUtil';

type levelTable = {
    key: string,
    title: string,
    names: string[],
    level?: TrustLevel,
    target: number[],
    achieved: boolean[]
}

export class levelPage extends UserPage {
    loading: boolean = false;
    valueUtils?: userValueUtil;
    fields: ConditionData[] = [];
    fieldText: string[] = [];
    fieldValue: number[] = [];
    current: levelTable = {
        key: 'current',
        title: '',
        names: [],
        target: [],
        achieved: []
    }
    next: levelTable = {
        key: 'next',
        title: '',
        names: [],
        target: [],
        achieved: []
    }
    oninit(vnode: any) {
        super.oninit(vnode);
        this.user = null;
        this.loading = true;
        this.loadUser(m.route.param('username'));
    }

    show(user: User) {
        super.show(user);
        this.user = user;
        this.loadData();
    }
    async loadData() {
        const newUser = await app.store.find<User>('users', this.user!.id() + "", {
            include: 'trustLevel,trustLevel.next',
        });
        const humanize = HumanizeUtils.getInstance(app);
        await humanize.loadDefinition();

        let conditionMap: Record<string, Condition>;
        try {
            conditionMap = await getConditionMap(false, this.user);
        } catch (ignore) {
            conditionMap = {}
        }
        this.valueUtils = new userValueUtil(humanize, conditionMap);
        const currentLevel = newUser.trustLevel();
        const nextLevel = currentLevel && currentLevel?.next();

        [currentLevel, nextLevel].forEach(level => {
            if (level) {
                level.condition().forEach(condition => {
                    if (this.fields.findIndex(c =>
                        c.name === condition.name &&
                        c.alter_name === condition.alter_name &&
                        c.calculate === condition.calculate &&
                        c.span === condition.span) != -1) {
                        return;
                    }
                    const c = Object.assign({}, condition, { value: "" });
                    const value = this.valueUtils!.getValue(condition);

                    this.fields.push(c);
                    this.fieldText.push(humanize.humanizeCondition(c));
                    this.fieldValue.push(value);
                });
            }
        });

        [
            [currentLevel, this.current, 'xypp-trust-levels.forum.page.current-level'],
            [nextLevel, this.next, 'xypp-trust-levels.forum.page.next-level']
        ].forEach((c: any) => {
            const level: TrustLevel | undefined = c[0];
            const data: levelTable = c[1];
            data.level = level;

            if (level) {
                level.condition().forEach(condition => {
                    const id = this.fields.findIndex(c =>
                        c.name === condition.name &&
                        c.alter_name === condition.alter_name &&
                        c.calculate === condition.calculate &&
                        c.span === condition.span);
                    const value = this.fieldValue[id];
                    data.target[id] = condition.value;
                    data.achieved[id] = this.conditionOp(value, condition.operator, condition.value);
                });
                data.title = (app.translator.trans(c[2], {
                    name: level.name()
                }) as string[]).join("");
            } else {
                data.title = (app.translator.trans(c[2], {
                    name: app.translator.trans('xypp-trust-levels.forum.page.none')
                }) as string[]).join("");
            }
        });

        this.loading = false;
        m.redraw();
    }
    content() {
        if (!this.user || this.loading) {
            return <LoadingIndicator size={46} />;
        }
        return <div className="TrustLevelPage container">
            <h2>
                {app.translator.trans('xypp-trust-levels.forum.page.title')}
            </h2>
            {this.makeTable()}
        </div>;
    }
    makeTable() {
        return <div className="TrustLevelPage-table">
            <table className={'Table Level-table'}>
                <thead>
                    <tr>
                        <th>{app.translator.trans('xypp-trust-levels.forum.page.condition')}</th>
                        <th>{this.current.title}</th>
                        <th>{app.translator.trans('xypp-trust-levels.forum.page.your')}</th>
                        <th>{this.next.title}</th>
                    </tr>
                </thead>
                <tbody>
                    {showIf(this.fields.length == 0,
                        <tr>
                            <td colspan="4">
                                <Placeholder text={app.translator.trans('xypp-trust-levels.forum.page.no-condition')} />
                            </td>
                        </tr>
                        ,
                        this.fields.map((_, index) => this.makeRow(index))
                    )}
                </tbody>
            </table>
        </div>;
    }
    makeRow(index: number) {
        return <tr>
            <td>{this.fieldText[index]}</td>
            <td className={"level-condition level-condition-current " + (this.current.achieved[index] ? 'achieve' : '')}>
                {this.current.target[index]}
            </td>
            <td className='level-value'>{this.fieldValue[index]}</td>
            <td className={"level-condition level-condition-next " + (this.next.achieved[index] ? 'achieve' : '')}>
                {this.next.target[index]}
            </td>
        </tr>;
    }

    conditionOp(value1: number, op: OPERATOR, value2: number) {
        switch (op) {
            case OPERATOR.EQUAL:
                return value1 == value2;
            case OPERATOR.GREATER_THAN:
                return value1 > value2;
            case OPERATOR.GREATER_THAN_OR_EQUAL:
                return value1 >= value2;
            case OPERATOR.LESS_THAN:
                return value1 < value2;
            case OPERATOR.LESS_THAN_OR_EQUAL:
                return value1 <= value2;
            case OPERATOR.NOT_EQUAL:
                return value1 != value2;
        }
    }
}