import Modal, { IInternalModalAttrs } from 'flarum/common/components/Modal';
import app from 'flarum/admin/app';
import Button from 'flarum/common/components/Button';
import Select from 'flarum/common/components/Select';
import Switch from "flarum/common/components/Switch"
import TrustLevel from '../../common/models/TrustLevel';
import { showIf } from '../../common/utils/NodeUtil';
import Stream from 'flarum/common/utils/Stream';

import type { ConditionData, RewardData } from '@xypp-collector/common/types/data';
import { HumanizeUtils, ConditionConfigure, RewardConfigure, OPERATOR } from '@xypp-collector/admin';
import Group from 'flarum/common/models/Group';

export default class editModal extends Modal<{
    item?: TrustLevel,
    update: (item: TrustLevel) => void,
} & IInternalModalAttrs> {
    conditions?: Stream<ConditionData[]>;
    name: string = "";
    icon: string = "";
    level: number = 0;
    group_id: number = 0;

    groups: Record<string, string> = {
        "-1": app.translator.trans('xypp-trust-levels.admin.create-modal.null_group') + ""
    };

    loadedLevels: Record<number, string> = {};
    referenceLevelId: number = 0;

    oninit(vnode: any): void {
        super.oninit(vnode);
        if (this.attrs.item) {
            this.conditions = new Stream(this.attrs.item.condition());
            this.name = this.attrs.item.name();
            this.level = this.attrs.item.level();
            this.icon = this.attrs.item.icon();
            this.group_id = this.attrs.item.group_id();
        } else {
            this.conditions = new Stream([]);
        }

        app.store.all<Group>("groups").forEach(group => {
            this.groups[group.id() + ""] = group.nameSingular();
        });

        app.store.all<TrustLevel>("trustLevels").forEach(level => {
            if (level.level() > this.referenceLevelId) {
                if (!this.attrs.item || this.level > level.level()) {
                    this.referenceLevelId = level.level();
                }
            }
            this.loadedLevels[parseInt(level.id() + "")] = `#${level.level()}:${level.name()}`;
        });
    }
    className() {
        return 'Modal Modal--large';
    }
    title() {
        if (this.attrs.item) {
            return app.translator.trans("xypp-trust-levels.admin.create-modal.edit", [this.attrs.item] as any)
        }
        return app.translator.trans('xypp-trust-levels.admin.create-modal.title');
    }
    oncreate(vnode: any): void {
        super.oncreate(vnode);
    }
    content() {
        const that = this;
        return (
            <div className="Modal-body">
                <div className="Form">
                    <div className="Form-group">
                        <label for="xypp-trust-levels-create-ipt-name">{app.translator.trans('xypp-trust-levels.admin.create-modal.name')}</label>
                        <input id="xypp-trust-levels-create-ipt-name" required className="FormControl" type="text" step="any" value={this.name} onchange={((e: InputEvent) => {
                            this.name = (e.target as HTMLInputElement).value;
                        }).bind(this)} />
                    </div>
                    <div className="Form-group">
                        <label for="xypp-trust-levels-create-ipt-icon">{app.translator.trans('xypp-trust-levels.admin.create-modal.icon')}</label>
                        <div class="xypp-trust-levels-create-icon-preview">
                            <input id="xypp-trust-levels-create-ipt-icon" className="FormControl" type="text" step="any" value={this.icon} onchange={((e: InputEvent) => {
                                this.icon = (e.target as HTMLInputElement).value;
                            }).bind(this)} />
                            {showIf(!!this.icon, <i className={this.icon}></i>)}
                        </div>
                    </div>
                    <div className="Form-group">
                        <label>{app.translator.trans('xypp-trust-levels.admin.create-modal.condition')}</label>
                        <div>
                            <Select options={this.loadedLevels} onchange={((r: number) => {
                                this.referenceLevelId = r;
                            }).bind(this)}></Select>
                            <Button className="Button Button--primary" onclick={this.copyData.bind(this)}>
                                {app.translator.trans('xypp-trust-levels.admin.create-modal.copy-data')}
                            </Button>
                            <Button className="Button Button--primary" onclick={this.copyName.bind(this)}>
                                {app.translator.trans('xypp-trust-levels.admin.create-modal.copy-name')}
                            </Button>
                        </div>
                        <ConditionConfigure conditions={this.conditions}></ConditionConfigure>
                    </div>

                    <div className='Form-group'>
                        <label for="xypp-trust-levels-create-ipt-re_available">
                            {app.translator.trans('xypp-trust-levels.admin.create-modal.group')}
                        </label>
                        <Select className="FormControl" value={this.group_id} options={this.groups} onchange={((name: string) => {
                            this.group_id = parseInt(name);
                        }).bind(this)} />
                    </div>
                </div>
                <div className="Form-group">
                    <Button class="Button Button--primary" type="submit" loading={this.loading}>
                        {showIf(!!this.attrs.item, app.translator.trans('xypp-trust-levels.admin.create-modal.button-edit'),
                            app.translator.trans('xypp-trust-levels.admin.create-modal.button'))}
                    </Button>
                </div>
            </div>
        );
    }
    async onsubmit(e: any) {
        e.preventDefault();
        this.loading = true;
        m.redraw();
        let item = this.attrs.item || app.store.createRecord<TrustLevel>('trust-levels');
        try {
            const conditions: ConditionData[] = this.conditions();
            const newItem = await item.save({
                conditions: conditions.filter(item => item.name != '*'),
                name: this.name,
                icon: this.icon,
                group_id: this.group_id
            });

            this.attrs.update && this.attrs.update(newItem);
            app.modal.close();
        } finally {
            this.loading = false;
            m.redraw();
        }
    }

    copyFrom(override: boolean = false) {
        const data: ConditionData[] = this.conditions();
        const targetModel = app.store.getById<TrustLevel>("trust-levels", this.referenceLevelId + "");

        if (!targetModel) return;

        targetModel.condition().forEach(item => {
            const l = data.find(i => i.name == item.name);
            if (l && override) {
                l.calculate = item.calculate;
                l.value = item.value;
                l.operator = item.operator;
                l.span = item.span;
                l.alter_name = item.alter_name;
            }
            else {
                data.push(item);
            }
        });
        this.conditions(data);
        m.redraw();
    }

    copyData() {
        this.copyFrom(true);
    }
    copyName() {
        this.copyFrom(false);
    }
}
