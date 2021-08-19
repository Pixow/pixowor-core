import { Event } from "angular-pluggable";
import { Severity } from "./qingcore";

export class ToastEvent extends Event {
  constructor(severity: Severity, message: string) {
    super("Toast", { severity, message });
  }
}

export class AlertEvent extends Event {
  constructor(message: string) {
    super("Alert", { message });
  }
}

export class LoadInDialogEvent extends Event {
  constructor(componentName: string) {
    super("LoadInDialog", { componentName });
  }
}

export class LoadInMenuEvent extends Event {
  constructor(componentName: string) {
    super("LoadInMenu", { componentName });
  }
}

export class LoadInSidebarEvent extends Event {
  constructor(componentName: string) {
    super("LoadInSidebar", { componentName });
  }
}

export class LoadInEditorAreaEvent extends Event {
  constructor(componentName: string) {
    super("LoadInEditorArea", { componentName });
  }
}

export class LoadInPanelEvent extends Event {
  constructor(componentName: string) {
    super("LoadInPanel", { componentName });
  }
}
export class LoadInWidgetBarEvent extends Event {
  constructor(componentName: string) {
    super("LoadInWidgetBar", { componentName });
  }
}

export enum IOOperates {
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
}
