import { BehaviorSubject } from "rxjs";
/**
 * State contain installed plugin, registed variables and registed angular components.
 */
var State = /** @class */ (function () {
    function State() {
        this._plugins = new Map();
        this._variables = new Map();
        this._components = new Map();
    }
    State.prototype.registerVariable = function (name, data) {
        this._variables.set(name, new BehaviorSubject(data || null));
    };
    State.prototype.getVariable = function (name) {
        return this._variables.get(name);
    };
    State.prototype.registerPlugin = function (plugin) {
        this._plugins.set(plugin.manifest.id, plugin);
    };
    State.prototype.getPlugin = function (id) {
        return this._plugins.get(id);
    };
    State.prototype.registerComponent = function (component) {
        var name = component.constructor.name;
        this._components.set(name, component);
    };
    State.prototype.getComponent = function (name) {
        return this._components.get(name);
    };
    return State;
}());
export { State };
//# sourceMappingURL=state.js.map