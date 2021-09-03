export declare enum UIEvents {
    TOAST = "Toast",
    ALERT = "Alert",
    OPEN_DIALOG = "OpenDialog",
    CLOSE_DIALOG = "CloseDialog",
    INSERT_MENU = "InsertMenu",
    ADD_STATUS = "AddStatus",
    ACTIVATE_IN_MENU = "ActivateInMenu",
    DEACTIVATE_IN_MENU = "DeactivateInMenu",
    LOAD_IN_SIDEBAR = "LoadInSidebar",
    LOAD_IN_EDITORAREA = "LoadInEditorarea",
    LOAD_IN_PANEL = "LoadInPanel",
    LOAD_IN_WIDGETBAR = "LoadInWidgetbar"
}
export declare enum IOEvents {
    LISTDIR = "list-dir",
    REMOVEDIR = "remove-dir",
    READFILE = "read-file",
    WRITEFILE = "write-file",
    REMOVEFILE = "remove-file",
    READJSON = "read-json",
    WRITEJSON = "write-json",
    DOWNLOADFILE = "download-file",
    UPLOADFILE = "upload-file",
    COPYFILES = "copy-files",
    ZIPFILES = "zip-files",
    UNZIP = "unzip",
    GETSETTINGS = "get-settings",
    UPLOADFILE_REPLY = "upload-file_reply",
    DOWNLOADFILE_REPLY = "download-file_reply",
    INSTALLI18N = "install-i18n",
    SET_DEFAULT_LANG = "set-default-lang",
    GET_DEFAULT_LANG = "get-default-lang"
}
export declare enum RendererFunctions {
    REGIST_COMPONENT = "registComponent",
    GET_COMPONENT = "getComponent",
    REGIST_PLACEMENT_COMPONENTS = "registPlacementComponents",
    GET_PLACEMENT_COMPONENTS = "getComponentsInPlacement"
}
export declare enum RendererEvents {
    UPDATE_SLOT_VIEW = "updateSlotView"
}
