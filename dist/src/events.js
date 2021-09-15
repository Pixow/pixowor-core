export var UIEvents;
(function (UIEvents) {
    UIEvents["TOAST"] = "Toast";
    UIEvents["ALERT"] = "Alert";
    UIEvents["OPEN_DIALOG"] = "OpenDialog";
    UIEvents["CLOSE_DIALOG"] = "CloseDialog";
    UIEvents["ADD_MENU"] = "AddMenu";
    UIEvents["ADD_STATUS"] = "AddStatus";
    UIEvents["ACTIVATE_IN_MENU"] = "ActivateInMenu";
    UIEvents["DEACTIVATE_IN_MENU"] = "DeactivateInMenu";
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
    IOEvents["GETSETTINGS"] = "get-settings";
    IOEvents["UPLOADFILE_REPLY"] = "upload-file_reply";
    IOEvents["DOWNLOADFILE_REPLY"] = "download-file_reply";
    IOEvents["INSTALLI18N"] = "install-i18n";
    IOEvents["SET_DEFAULT_LANG"] = "set-default-lang";
    IOEvents["GET_DEFAULT_LANG"] = "get-default-lang";
})(IOEvents || (IOEvents = {}));
export var RendererFunctions;
(function (RendererFunctions) {
    RendererFunctions["REGIST_COMPONENT"] = "registComponent";
    RendererFunctions["GET_COMPONENT"] = "getComponent";
    RendererFunctions["REGIST_PLACEMENT_COMPONENTS"] = "registPlacementComponents";
    RendererFunctions["GET_PLACEMENT_COMPONENTS"] = "getComponentsInPlacement";
})(RendererFunctions || (RendererFunctions = {}));
export var RendererEvents;
(function (RendererEvents) {
    RendererEvents["UPDATE_SLOT_VIEW"] = "updateSlotView";
})(RendererEvents || (RendererEvents = {}));
//# sourceMappingURL=events.js.map