export declare enum UIEvents {
    TOAST = "Toast",
    ALERT = "Alert",
    OPEN_DIALOG = "OpenDialog",
    CLOSE_DIALOG = "CloseDialog",
    ADD_MENU = "AddMenu",
    ADD_STATUS = "AddStatus",
    LOAD_IN_SIDEBAR = "LoadInSidebar",
    LOAD_IN_EDITORAREA = "LoadInEditorarea",
    LOAD_IN_PANEL = "LoadInPanel",
    LOAD_IN_WIDGETBAR = "LoadInWidgetbar",
    INJECT_SLOT = "InjectSlot",
    INJECT_PLUGIN_MENU = "InjectPluginMenu",
    UNINJECT_PLUGIN_MENU = "UnInjectPluginMenu",
    INJECT_EDITOR_AREA = "InjectEditorArea"
}
export declare enum FileSystemEvents {
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
    INSTALL_I18N = "install-i18n",
    SET_DEFAULT_LANG = "set-default-lang",
    GET_DEFAULT_LANG = "get-default-lang"
}
declare type BindData = {
    [k: string]: any;
};
export declare class QEvent {
    name: string;
    data: BindData;
    constructor(name: string, data?: BindData);
}
export {};
