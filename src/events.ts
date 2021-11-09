export enum UIEvents {
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
  INJECT_EDITOR_AREA = "InjectEditorArea",
}


export enum FileSystemEvents {
  MKDIR = "mkdir",
  LISTDIR = "listdir",
  REMOVEDIR = "removedir",
  READFILE = "readfile",
  WRITEFILE = "writefile",
  REMOVEFILE = "removefile",
  READJSON = "readjson",
  WRITEJSON = "writejson",
  DOWNLOADFILE = "downloadfile",
  UPLOADFILE = "uploadfile",
  COPYFILES = "copyfiles",
  ZIPFILES = "zipfiles",
  UNZIP = "unzip",
  GETSETTINGS = "getsettings",

  UPLOADFILE_REPLY = "upload-file_reply",
  DOWNLOADFILE_REPLY = "download-file_reply",

  INSTALL_I18N = "install-i18n",

  SET_DEFAULT_LANG = "set-default-lang",
  GET_DEFAULT_LANG = "get-default-lang",
}

// export enum RendererFunctions {
//   REGIST_COMPONENT = "registComponent",
//   GET_COMPONENT = "getComponent",
//   REGIST_PLACEMENT_COMPONENTS = "registPlacementComponents",
//   GET_PLACEMENT_COMPONENTS = "getComponentsInPlacement",
// }

type BindData = { [k: string]: any };
export class QEvent {
  name: string;
  data: BindData;

  constructor(name: string, data: BindData = {}) {
    this.name = name;
    this.data = data;
  }
}
