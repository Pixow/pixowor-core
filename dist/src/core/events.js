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
import { Event } from "angular-pluggable";
var ToastEvent = /** @class */ (function (_super) {
    __extends(ToastEvent, _super);
    function ToastEvent(severity, message) {
        return _super.call(this, "Toast", { severity: severity, message: message }) || this;
    }
    return ToastEvent;
}(Event));
export { ToastEvent };
var AlertEvent = /** @class */ (function (_super) {
    __extends(AlertEvent, _super);
    function AlertEvent(message) {
        return _super.call(this, "Alert", { message: message }) || this;
    }
    return AlertEvent;
}(Event));
export { AlertEvent };
var LoadInDialogEvent = /** @class */ (function (_super) {
    __extends(LoadInDialogEvent, _super);
    function LoadInDialogEvent(componentName) {
        return _super.call(this, "LoadInDialog", { componentName: componentName }) || this;
    }
    return LoadInDialogEvent;
}(Event));
export { LoadInDialogEvent };
var LoadInMenuEvent = /** @class */ (function (_super) {
    __extends(LoadInMenuEvent, _super);
    function LoadInMenuEvent(componentName) {
        return _super.call(this, "LoadInMenu", { componentName: componentName }) || this;
    }
    return LoadInMenuEvent;
}(Event));
export { LoadInMenuEvent };
var LoadInSidebarEvent = /** @class */ (function (_super) {
    __extends(LoadInSidebarEvent, _super);
    function LoadInSidebarEvent(componentName) {
        return _super.call(this, "LoadInSidebar", { componentName: componentName }) || this;
    }
    return LoadInSidebarEvent;
}(Event));
export { LoadInSidebarEvent };
var LoadInEditorAreaEvent = /** @class */ (function (_super) {
    __extends(LoadInEditorAreaEvent, _super);
    function LoadInEditorAreaEvent(componentName) {
        return _super.call(this, "LoadInEditorArea", { componentName: componentName }) || this;
    }
    return LoadInEditorAreaEvent;
}(Event));
export { LoadInEditorAreaEvent };
var LoadInPanelEvent = /** @class */ (function (_super) {
    __extends(LoadInPanelEvent, _super);
    function LoadInPanelEvent(componentName) {
        return _super.call(this, "LoadInPanel", { componentName: componentName }) || this;
    }
    return LoadInPanelEvent;
}(Event));
export { LoadInPanelEvent };
var LoadInWidgetBarEvent = /** @class */ (function (_super) {
    __extends(LoadInWidgetBarEvent, _super);
    function LoadInWidgetBarEvent(componentName) {
        return _super.call(this, "LoadInWidgetBar", { componentName: componentName }) || this;
    }
    return LoadInWidgetBarEvent;
}(Event));
export { LoadInWidgetBarEvent };
export var IOOperates;
(function (IOOperates) {
    IOOperates["LISTDIR"] = "list-dir";
    IOOperates["REMOVEDIR"] = "remove-dir";
    IOOperates["READFILE"] = "read-file";
    IOOperates["WRITEFILE"] = "write-file";
    IOOperates["REMOVEFILE"] = "remove-file";
    IOOperates["READJSON"] = "read-json";
    IOOperates["WRITEJSON"] = "write-json";
    IOOperates["DOWNLOADFILE"] = "download-file";
    IOOperates["UPLOADFILE"] = "upload-file";
    IOOperates["COPYFILES"] = "copy-files";
    IOOperates["ZIPFILES"] = "zip-files";
    IOOperates["UNZIP"] = "unzip";
})(IOOperates || (IOOperates = {}));
//# sourceMappingURL=events.js.map