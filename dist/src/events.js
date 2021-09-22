export var UIEvents;
(function (UIEvents) {
    UIEvents["TOAST"] = "Toast";
    UIEvents["ALERT"] = "Alert";
    UIEvents["OPEN_DIALOG"] = "OpenDialog";
    UIEvents["CLOSE_DIALOG"] = "CloseDialog";
    UIEvents["ADD_MENU"] = "AddMenu";
    UIEvents["ADD_STATUS"] = "AddStatus";
    UIEvents["LOAD_IN_SIDEBAR"] = "LoadInSidebar";
    UIEvents["LOAD_IN_EDITORAREA"] = "LoadInEditorarea";
    UIEvents["LOAD_IN_PANEL"] = "LoadInPanel";
    UIEvents["LOAD_IN_WIDGETBAR"] = "LoadInWidgetbar";
    UIEvents["INJECT_SLOT"] = "InjectSlot";
    UIEvents["INJECT_PLUGIN_MENU"] = "InjectPluginMenu";
    UIEvents["UNINJECT_PLUGIN_MENU"] = "UnInjectPluginMenu";
    UIEvents["INJECT_EDITOR_AREA"] = "InjectEditorArea";
})(UIEvents || (UIEvents = {}));
export var FileSystemEvents;
(function (FileSystemEvents) {
    FileSystemEvents["LISTDIR"] = "list-dir";
    FileSystemEvents["REMOVEDIR"] = "remove-dir";
    FileSystemEvents["READFILE"] = "read-file";
    FileSystemEvents["WRITEFILE"] = "write-file";
    FileSystemEvents["REMOVEFILE"] = "remove-file";
    FileSystemEvents["READJSON"] = "read-json";
    FileSystemEvents["WRITEJSON"] = "write-json";
    FileSystemEvents["DOWNLOADFILE"] = "download-file";
    FileSystemEvents["UPLOADFILE"] = "upload-file";
    FileSystemEvents["COPYFILES"] = "copy-files";
    FileSystemEvents["ZIPFILES"] = "zip-files";
    FileSystemEvents["UNZIP"] = "unzip";
    FileSystemEvents["GETSETTINGS"] = "get-settings";
    FileSystemEvents["UPLOADFILE_REPLY"] = "upload-file_reply";
    FileSystemEvents["DOWNLOADFILE_REPLY"] = "download-file_reply";
    FileSystemEvents["INSTALL_I18N"] = "install-i18n";
    FileSystemEvents["SET_DEFAULT_LANG"] = "set-default-lang";
    FileSystemEvents["GET_DEFAULT_LANG"] = "get-default-lang";
})(FileSystemEvents || (FileSystemEvents = {}));
var QEvent = /** @class */ (function () {
    function QEvent(name, data) {
        if (data === void 0) { data = {}; }
        this.name = name;
        this.data = data;
    }
    return QEvent;
}());
export { QEvent };
//# sourceMappingURL=events.js.map