var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import EventEmitter from "events";
import { UIEvents } from "./events";
export var Severity;
(function (Severity) {
    Severity["SUCCESS"] = "success";
    Severity["ERROR"] = "error";
    Severity["INFO"] = "info";
})(Severity || (Severity = {}));
export var Placements;
(function (Placements) {
    Placements["MENUBAR"] = "menubar";
    Placements["SIDEBAR"] = "sidebar";
    Placements["EDITORAREA"] = "editor-area";
    Placements["WIDGETBAR"] = "widgetbar";
    Placements["STATUSBAR"] = "statusbar";
    Placements["TOAST"] = "toast";
})(Placements || (Placements = {}));
var WorkspaceManager = /** @class */ (function (_super) {
    __extends(WorkspaceManager, _super);
    function WorkspaceManager() {
        var _this = _super.call(this) || this;
        _this._slots = new Map();
        return _this;
    }
    /**
     * Regist component in a slot
     * @param placement - Placement name
     * @param component - Slot component
     */
    WorkspaceManager.prototype.registerSlotComponent = function (placement, component) {
        this._slots.set(placement, component);
    };
    /**
     * Get a slot component
     * @param placement - Placement name
     * @returns
     */
    WorkspaceManager.prototype.getSlotComponent = function (placement) {
        return this._slots.get(placement);
    };
    /**
     * Toast message
     * @param severity - Message severity.
     * @param message - Toast message.
     */
    WorkspaceManager.prototype.toast = function (severity, message) {
        this.emit(UIEvents.TOAST, { severity: severity, message: message });
    };
    /**
     * Alert message
     * @param severity - Message severity.
     * @param message - Toast message.
     */
    WorkspaceManager.prototype.alert = function (message) {
        this.emit(UIEvents.ALERT, { message: message });
    };
    /**
     * Open a registed component in a dialog.
     * @param componentName - Component name.
     * @param config - Config data.
     */
    WorkspaceManager.prototype.openDialog = function (componentName, config) {
        if (config === void 0) { config = {}; }
        this.emit(UIEvents.OPEN_DIALOG, { componentName: componentName, config: config });
    };
    return WorkspaceManager;
}(EventEmitter));
export { WorkspaceManager };
//# sourceMappingURL=workspace-manager.js.map