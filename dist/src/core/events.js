(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IOEvents = exports.UIEvents = void 0;
    var UIEvents;
    (function (UIEvents) {
        UIEvents["TOAST"] = "Toast";
        UIEvents["ALERT"] = "Alert";
        UIEvents["OPEN_DIALOG"] = "OpenDialog";
        UIEvents["CLOSE_DIALOG"] = "CloseDialog";
        UIEvents["INSERT_MENU"] = "InsertMenu";
        UIEvents["ADD_STATUS"] = "AddStatus";
        UIEvents["LOAD_IN_MENU"] = "LoadInMenu";
        UIEvents["LOAD_IN_SIDEBAR"] = "LoadInSidebar";
        UIEvents["LOAD_IN_EDITORAREA"] = "LoadInEditorarea";
        UIEvents["LOAD_IN_PANEL"] = "LoadInPanel";
        UIEvents["LOAD_IN_WIDGETBAR"] = "LoadInWidgetbar";
    })(UIEvents = exports.UIEvents || (exports.UIEvents = {}));
    var IOEvents;
    (function (IOEvents) {
        IOEvents["LISTDIR"] = "list-dir";
        IOEvents["REMOVEDIR"] = "remove-dir";
        IOEvents["READFILE"] = "read-file";
        IOEvents["WRITEFILE"] = "write-file";
        IOEvents["REMOVEFILE"] = "remove-file";
        IOEvents["READJSON"] = "read-json";
        IOEvents["WRITEJSON"] = "write-json";
        IOEvents["DOWNLOADFILE"] = "download-file";
        IOEvents["UPLOADFILE"] = "upload-file";
        IOEvents["COPYFILES"] = "copy-files";
        IOEvents["ZIPFILES"] = "zip-files";
        IOEvents["UNZIP"] = "unzip";
    })(IOEvents = exports.IOEvents || (exports.IOEvents = {}));
});
//# sourceMappingURL=events.js.map