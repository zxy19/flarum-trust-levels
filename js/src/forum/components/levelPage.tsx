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
    conditions: ConditionData[],
    level?: TrustLevel,
    user: (number | false)[],
    target: number[],
    achieved: boolean[]
}

export class levelPage extends UserPage {
    loading: boolean = false;
    valueUtils?: userValueUtil;
    current: levelTable = {
        key: 'current',
        title: '',
        names: [],
        conditions: [],
        user: [],
        target: [],
        achieved: []
    }
    next: levelTable = {
        key: 'next',
        title: '',
        names: [],
        conditions: [],
        user: [],
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

        [
            [currentLevel, this.current, app.translator.trans('xypp-trust-levels.forum.page.current-level')],
            [nextLevel, this.next, app.translator.trans('xypp-trust-levels.forum.page.next-level')]
        ].forEach((c: any) => {
            const level: TrustLevel | undefined = c[0];
            const data: levelTable = c[1];
            data.level = level;
            data.title = c[2];

            if (level) {
                level.condition().forEach(condition => {
                    data.conditions.push(condition);
                    const value = this.valueUtils.getValue(condition);
                    data.user.push(value);
                    data.target.push(condition.value);
                    data.achieved.push(value !== false && this.conditionOp(value, condition.operator, condition.value));
                    data.names.push(humanize.humanizeCondition(Object.assign(condition, { value: "" })));
                });
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
            {[this.current, this.next].map(this.makeTable)}
        </div>;
    }

    makeTable(table: levelTable) {
        if (!table.level) {
            return <div className="TrustLevelPage-table">
                <div className="TrustLevelPage-table-header">
                    <h3>{table.title}</h3>
                </div>
                <div className="TrustLevelPage-table-level">
                    <i class="fas fa-border-none"></i>&nbsp;
                    <span className={'level-name level-name-' + table.key}>{app.translator.trans('xypp-trust-levels.forum.page.no-info')}</span>
                </div>
            </div>
        }
        return <div className="TrustLevelPage-table">
            <div className="TrustLevelPage-table-header">
                <h3>{table.title}</h3>
            </div>
            <div className="TrustLevelPage-table-level">
                {showIf(!!table.level?.icon(), <i className={table.level?.icon()} ></i>)}
                <span className={'level-name level-name-' + table.key}>{table.level?.name()}</span>
            </div>
            {showIf(!!table.level.condition().length,
                <table className={'Table Level-table-' + table.key}>
                    <thead>
                        <tr>
                            <th>{app.translator.trans('xypp-trust-levels.forum.page.condition')}</th>
                            <th>{app.translator.trans('xypp-trust-levels.forum.page.required')}</th>
                            <th>{app.translator.trans('xypp-trust-levels.forum.page.your')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {table.names.map((name, idx) => <tr data-idx={idx} className={"condition-row " + showIf(table.achieved[idx], "achieved")}>
                            <td className="col-condition">{name}</td>
                            <td className="col-required">{table.target[idx]}</td>
                            <td className="col-your">{showIf(
                                table.user[idx] === false,
                                "-",
                                table.user[idx]
                            )}</td>
                        </tr>)}
                    </tbody>
                </table>,
                <Placeholder text={app.translator.trans('xypp-trust-levels.forum.page.no-condition')}></Placeholder>
            )}
        </div>;
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