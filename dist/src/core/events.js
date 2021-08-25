export var UIEvents;
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
})(UIEvents || (UIEvents = {}));
export var IOEvents;
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
})(IOEvents || (IOEvents = {}));
//# sourceMappingURL=events.js.map