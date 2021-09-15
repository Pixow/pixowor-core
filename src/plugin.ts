import { Component, Type } from "@angular/core";
import { UIEvents } from "./events";
import { QingCore } from "./qing-core";

export interface PluginManifest {
  id: string;
  name: string;
  author: string;
  version: string;
  description: string;
  minAppVersion: string;
  authorUrl?: string;
  dependencies?: { [k: string]: string };
}

export enum Severity {
  SUCCESS = "success",
  ERROR = "error",
  INFO = "info",
}

/**
 * Mod = Cmd on MacOS and Ctrl on other OS
 * Ctrl = Ctrl key for every OS
 * Meta = Cmd on MacOS and Win key on other OS
 * @public
 */
export type Modifier = "Mod" | "Ctrl" | "Meta" | "Shift" | "Alt";

export interface Hotkey {
  modifiers: Modifier[];
  key: string;
}

export interface Command {
  /**
   * Globally unique ID to identify this command
   */
  id: string;

  /**
   * Human friendly name for searching
   */
  name: string;

  /**
   * Simple callback, triggered globally
   */
  callback?: () => any;

  hotkeys?: Hotkey[];
}

export abstract class Plugin {
  qingCore: QingCore;
  manifest: PluginManifest;

  constructor(qingCore: QingCore, manifest: PluginManifest) {
    this.qingCore = qingCore;
    this.manifest = manifest;
  }

  abstract install(): Promise<any>;
  abstract activate(): void;
  abstract deactivate(): void;

  /**
   * Register a command globally. The command id and name will be automatically prefixed with this plugin's id and name.
   * @param command Command
   */
  addCommand(command: Command) {
    this.qingCore.serviceManager.registCommand(command);
  }

  /**
   *
   * @param {string} label - Menu label
   * @param {Function} callback - The callback to trigger
   */
  addMenu(label: string, callback: Function) {
    this.qingCore.workspace.emit(UIEvents.ADD_MENU, { label, callback });
  }

  /**
   *
   * @param  {string} name - Component
   * @param  {Component} component - Register a angular component. The function will use component classname as key to regist.
   */
  registerComponent(component: Component) {
    this.qingCore.stateManager.registerComponent(component);
  }

  /**
   *
   * @param {Severity} severity - Message severity.
   * @param {string} message - Toast message.
   */
  toast(severity: Severity, message: string) {
    this.qingCore.workspace.emit(UIEvents.TOAST, { severity, message });
  }

  alert(message: string) {
    this.qingCore.workspace.emit(UIEvents.ALERT, { message });
  }

  /**
   * Open a component you registed in a dialog.
   * @param {string} componentName - Component name.
   */
  openDialog(componentName: string) {
    this.qingCore.workspace.emit(UIEvents.OPEN_DIALOG, { componentName });
  }
}
