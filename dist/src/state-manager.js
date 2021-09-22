import { BehaviorSubject } from "rxjs";
/**
 * State contain installed plugin, registed variables and registed angular components.
 */
var StateManager = /** @class */ (function () {
    function StateManager() {
        this._plugins = new Map();
        this._variables = new Map();
        this._components = new Map();
    }
    StateManager.prototype.registerVariable = function (name, data) {
        this._variables.set(name, new BehaviorSubject(data || null));
    };
    StateManager.prototype.unRegisterVariable = function (name) {
        this._variables.delete(name);
    };
    StateManager.prototype.getVariable = function (name) {
        return this._variables.get(name);
    };
    StateManager.prototype.registerPlugin = function (plugin) {
        this._plugins.set(plugin.pid, plugin);
    };
    StateManager.prototype.getPlugin = function (id) {
        return this._plugins.get(id);
    };
    StateManager.prototype.registerComponent = function (name, component) {
        this._components.set(name, component);
    };
    StateManager.prototype.unregisterComponent = function (name) {
        this._components.delete(name);
    };
    StateManager.prototype.getComponent = function (name) {
        return this._components.get(name);
    };
    return StateManager;
}());
export { StateManager };
//# sourceMappingURL=state-manager.js.map