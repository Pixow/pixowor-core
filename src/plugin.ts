import { Component, Type } from "@angular/core";
import { Severity } from "./workspace-manager";
import { UIEvents } from "./events";
import { PixoworCore } from "./pixowor-core";

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

export interface PluginManifest {
  pid: string;
  name: string;
  author: string;
  version: string;
  description: string;
  minAppVersion: string;
  authorUrl?: string;
  dependencies?: { [k: string]: string };
}

export abstract class Plugin {
  private _pixoworCore: PixoworCore;

  public pid: string;
  public name: string;
  public author: string;
  public version: string;
  public description: string;
  public minAppVersion: string;
  public authorUrl?: string;
  public dependencies?: { [k: string]: string };

  constructor(pixoworCore: PixoworCore, manifest: PluginManifest) {
    this._pixoworCore = pixoworCore;

    this.pid = manifest.pid;
    this.name = manifest.name;
    this.author = manifest.author;
    this.version = manifest.version;
    this.description = manifest.description;
    this.minAppVersion = manifest.minAppVersion;
    this.authorUrl = manifest.authorUrl;
    this.dependencies = manifest.dependencies;
  }

  async install() {}
  abstract activate(): void;
  abstract deactivate(): void;

  /**
   * Get qing core
   */
  public get pixoworCore(): PixoworCore {
    return this._pixoworCore;
  }

  public colorLog(message: string) {
    console.log(
      `%c ${message}`,
      "background: #222; color: #bada55"
    );
  }

  /**
   * Register a command globally. The command id and name will be automatically prefixed with this plugin's id and name.
   * @param command Command
   */
  public addCommand(command: Command) {
    this.pixoworCore.serviceManager.registCommand(command);
  }

  /**
   *
   * @param {string} label - Menu label
   * @param {Function} callback - The callback to trigger
   */
  public addMenu(label: string, callback: Function) {
    this.pixoworCore.workspace.emit(UIEvents.ADD_MENU, { label, callback });
  }

  /**
   * Regist angular component for use.
   * @param  {string} name - Component
   * @param  {Component} component - Register a angular component. The function will use component classname as key to regist.
   */
  public registerComponent(name: string, component: Component) {
    this.pixoworCore.stateManager.registerComponent(name, component);
  }

  /**
   * UnRegister angular component that registed.
   * @param name - Component name
   */
  public unRrgisterComponent(name: string) {
    this.pixoworCore.stateManager.unregisterComponent(name);
  }

  /**
   * Regist variable
   * @param name - variable name
   * @param data - variable init data
   */
  public registerVariable(name: string, data: any = null) {
    this.pixoworCore.stateManager.registerVariable(name, data);
  }

  /**
   * UnRegister variable
   * @param name - variable name
   */
  public unRegisterVariable(name: string) {
    this.pixoworCore.stateManager.unRegisterVariable(name);
  }

  /**
   * Toast message
   * @param {Severity} severity - Message severity.
   * @param {string} message - Toast message.
   */
  public toast(severity: Severity, message: string) {
    this.pixoworCore.workspace.toast(severity, message);
  }

  public alert(message: string) {
    this.pixoworCore.workspace.emit(UIEvents.ALERT, { message });
  }

  /**
   * Open a component you registed in a dialog.
   * @param {string} componentName - Component name.
   */
  public openDialog(componentName: string) {
    this.pixoworCore.workspace.emit(UIEvents.OPEN_DIALOG, { componentName });
  }

  /**
   * Get value from localstorage
   * @param key localstorage key
   * @returns
   */
  public get(key: string) {
    return this.pixoworCore.storageManager.get(key);
  }
}
