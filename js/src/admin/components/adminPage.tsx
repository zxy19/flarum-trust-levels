import ExtensionPage from "flarum/admin/components/ExtensionPage";
import app from 'flarum/admin/app';
import TrustLevel from "../../common/models/TrustLevel";
import Button from "flarum/common/components/Button";
import LoadingIndicator from "flarum/common/components/LoadingIndicator";
import { HumanizeUtils } from "@xypp-collector/forum";
import Group from "flarum/common/models/Group";
import { showIf } from "../../common/utils/NodeUtil";
import editModal from "./editModal";

export default class adminPage extends ExtensionPage {
    items: TrustLevel[] = [];
    more: boolean = false;
    item_loading: boolean = false;
    offset: number = 0;
    currentFilter: string = "all";
    sortChanged: boolean = false;
    isRemoving: Record<string, boolean> = {};
    savingSorting: boolean = false;
    oncreate(vnode: any): void {
        super.oncreate(vnode);
        HumanizeUtils.getInstance(app);
        this.loadData();
    }
    content(vnode: any) {
        return <div className="container">
            <h2>{app.translator.trans('xypp-trust-levels.admin.data')}</h2>
            <table className="xypp-trust-levels-adminPage-table Table">
                <thead>
                    <tr>
                        <th>{app.translator.trans("xypp-trust-levels.admin.table.id")}</th>
                        <th><i class="fas fa-icons"></i></th>
                        <th>{app.translator.trans("xypp-trust-levels.admin.table.name")}</th>
                        <th>{app.translator.trans("xypp-trust-levels.admin.table.level")}</th>
                        <th>{app.translator.trans("xypp-trust-levels.admin.table.group")}</th>
                        <th>{app.translator.trans("xypp-trust-levels.admin.table.operation")}</th>
                    </tr>
                </thead>
                <tbody>
                    {this.items.map((item, index) => {
                        const removing = this.isRemoving[item.id()!] || false
                        return (
                            <tr>
                                <td>{item.id()}</td>
                                <td>{showIf(!!item.icon(), <i className={item.icon()}></i>)}</td>
                                <td>{item.name()}</td>
                                <td>
                                    {showIf(item.attribute<boolean>("levelChanged"), "*")}
                                    {item.level()}
                                </td>
                                <td>{app.store.getById<Group>("groups", item.group_id() + "")?.nameSingular()}</td>
                                <td>
                                    <Button className="Button Button--primary" onclick={this.click.bind(this)} data-id={item.id()}>
                                        <i class="fas fa-edit"></i>
                                    </Button>
                                    <Button className="Button Button--danger" onclick={this.remove.bind(this)} data-id={item.id()} disabled={removing} loading={removing}>
                                        <i class="fas fa-trash"></i>
                                    </Button>
                                    {showIf(!!this.items[index - 1],
                                        <Button className="Button Button--secondary" onclick={this.swap(index, -1)} data-id={item.id()}>
                                            <i class="fas fa-sort-up"></i>
                                        </Button>
                                    )}
                                    {showIf(!!this.items[index + 1],
                                        <Button className="Button Button--secondary" onclick={this.swap(index, 1)} data-id={item.id()}>
                                            <i class="fas fa-sort-down"></i>
                                        </Button>
                                    )}
                                </td>
                            </tr>
                        )
                    })}
                    <tr>
                        <td>
                            <Button className="Button Button--primary" onclick={this.create.bind(this)} >
                                {app.translator.trans("xypp-trust-levels.admin.table.create")}
                            </Button>
                        </td>
                        <td>
                            {showIf(this.sortChanged, <Button className="Button Button--primary" onclick={this.submitSort.bind(this)} loading={this.savingSorting} disabled={this.savingSorting}>
                                {app.translator.trans("xypp-trust-levels.admin.table.save-level")}
                            </Button>)}
                        </td>
                        <td>
                            {showIf(this.item_loading, <LoadingIndicator />)}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    }

    create() {
        app.modal.show(editModal, {
            item: null, update: (item: TrustLevel) => {
                this.items.push(item);
                this.items.sort((a, b) => a.level() - b.level());
                m.redraw();
            }
        });
    }
    async loadData() {
        this.item_loading = true;
        m.redraw();
        await HumanizeUtils.getInstance(app).loadDefinition();
        const newItems = await app.store.find<TrustLevel[]>('trust-levels');
        await app.store.find("groups");
        this.items.push(...newItems);
        this.items.sort((a, b) => a.level() - b.level());
        this.item_loading = false;
        m.redraw();
    }
    click(e: MouseEvent) {
        const id = (e.currentTarget as HTMLButtonElement).getAttribute("data-id");
        if (!id) return;
        app.modal.show(editModal, {
            item: app.store.getById<TrustLevel>("trust-levels", id), update: (item: TrustLevel) => {
                this.items = this.items.map((item) => {
                    if (item.id() == id) {
                        return item;
                    }
                    return item;
                });
                this.items.sort((a, b) => a.level() - b.level());
                m.redraw();
            }
        });
    }
    remove(e: MouseEvent) {
        const id = (e.currentTarget as HTMLButtonElement).getAttribute("data-id");
        if (!id) return;
        const model = app.store.getById<TrustLevel>("trust-levels", id);
        if (!model) return;
        if (confirm(app.translator.trans("xypp-trust-levels.admin.table.remove_confirm") + "")) {
            this.isRemoving[id] = true;
            m.redraw();
            model.delete().then(() => {
                this.items = this.items.filter((item) => item.id() != id);
                this.isRemoving[id] = false;
                m.redraw();
            });
        }
    }

    swap(id: number, dir: number) {
        return (() => {
            const swap1 = Math.max(id + dir, id);
            const swap2 = Math.min(id + dir, id);

            const tmp = this.items[swap1];
            const level1 = tmp.level();
            const level2 = this.items[swap2].level();

            this.items[swap1] = this.items[swap2];
            this.items[swap2] = tmp;

            this.items[swap1].pushAttributes({ level: level2, levelChanged: true });
            this.items[swap2].pushAttributes({ level: level1, levelChanged: true });
            this.sortChanged = true;

            this.items.sort((a, b) => a.level() - b.level());
            m.redraw();
        }).bind(this);
    }

    async submitSort() {
        this.savingSorting = true;
        m.redraw();
        const swapRecord: Record<number, number> = {};
        this.items.forEach(item => {
            if (item.attribute("levelChanged")) {
                swapRecord[parseInt(item.id() || "")] = item.level();
            }
        });
        try {
            await app.request({
                method: "POST",
                url: app.forum.attribute("apiUrl") + "/trust-levels/sort",
                body: { sorts: swapRecord }
            });
            this.sortChanged = false;
            this.items.forEach(item => {
                item.pushAttributes({ "levelChanged": false });
            });
        } finally {
            this.savingSorting = false;
            m.redraw();
        }
    }
}