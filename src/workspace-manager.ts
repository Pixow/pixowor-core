import { Component, Type } from "@angular/core";
import EventEmitter from "events";
import { UIEvents } from "./events";

export enum Severity {
  SUCCESS = "success",
  ERROR = "error",
  INFO = "info",
}


export enum Placements {
  MENUBAR = "menubar",
  SIDEBAR = "sidebar",
  EDITORAREA = "editor-area",
  WIDGETBAR = "widgetbar",
  STATUSBAR = "statusbar",
  TOAST = "toast"
}


export class WorkspaceManager extends EventEmitter {
  private _slots: Map<string, Type<Component>> = new Map<
    string,
    Type<Component>
  >();

  constructor() {
    super();
  }

  /**
   * Regist component in a slot
   * @param placement - Placement name
   * @param component - Slot component
   */
  public registerSlotComponent(placement: string, component: Type<Component>) {
    this._slots.set(placement, component);
  }

  /**
   * Get a slot component
   * @param placement - Placement name
   * @returns
   */
  public getSlotComponent(placement: string) {
    return this._slots.get(placement);
  }

  /**
   * Toast message
   * @param severity - Message severity.
   * @param message - Toast message.
   */
  public toast(severity: Severity, message: string) {
    this.emit(UIEvents.TOAST, { severity, message });
  }

  /**
   * Alert message
   * @param severity - Message severity.
   * @param message - Toast message.
   */
  public alert(message: string) {
    this.emit(UIEvents.ALERT, { message });
  }

  /**
   * Open a registed component in a dialog.
   * @param componentName - Component name.
   * @param config - Config data.
   */
  public openDialog(componentName: string, config: { [k: string]: any } = {}) {
    this.emit(UIEvents.OPEN_DIALOG, { componentName, config });
  }
}

