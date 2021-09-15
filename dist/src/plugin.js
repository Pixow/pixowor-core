import { UIEvents } from "./events";
export var Severity;
(function (Severity) {
    Severity["SUCCESS"] = "success";
    Severity["ERROR"] = "error";
    Severity["INFO"] = "info";
})(Severity || (Severity = {}));
var Plugin = /** @class */ (function () {
    function Plugin(app, manifest) {
        this.app = app;
        this.manifest = manifest;
    }
    /**
     * Register a command globally. The command id and name will be automatically prefixed with this plugin's id and name.
     * @param command Command
     */
    Plugin.prototype.addCommand = function (command) {
        this.app.services.registCommand(command);
    };
    /**
     *
     * @param {string} label - Menu label
     * @param {Function} callback - The callback to trigger
     */
    Plugin.prototype.addMenu = function (label, callback) {
        this.app.workspace.emit(UIEvents.ADD_MENU, { label: label, callback: callback });
    };
    /**
     *
     * @param  {string} name - Component
     * @param  {Component} component - Register a angular component. The function will use component classname as key to regist.
     */
    Plugin.prototype.registerComponent = function (component) {
        this.app.state.registerComponent(component);
    };
    /**
     *
     * @param {Severity} severity - Message severity.
     * @param {string} message - Toast message.
     */
    Plugin.prototype.toast = function (severity, message) {
        this.app.workspace.emit(UIEvents.TOAST, { severity: severity, message: message });
    };
    Plugin.prototype.alert = function (message) {
        this.app.workspace.emit(UIEvents.ALERT, { message: message });
    };
    /**
     * Open a component you registed in a dialog.
     * @param {string} componentName - Component name.
     */
    Plugin.prototype.openDialog = function (componentName) {
        this.app.workspace.emit(UIEvents.OPEN_DIALOG, { componentName: componentName });
    };
    return Plugin;
}());
export { Plugin };
//# sourceMappingURL=plugin.js.map