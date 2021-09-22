import { Component, Type } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Plugin } from "./plugin";

/**
 * State contain installed plugin, registed variables and registed angular components.
 */
export class StateManager {
  private _plugins: Map<string, Plugin> = new Map<string, Plugin>();
  private _variables: Map<string, BehaviorSubject<any>> = new Map<
    string,
    BehaviorSubject<any>
  >();
  private _components: Map<string, Component> = new Map<
    string,
    Component
  >();

  registerVariable(name: string, data?: any) {
    this._variables.set(name, new BehaviorSubject(data || null));
  }

  unRegisterVariable(name: string) {
    this._variables.delete(name);
  }

  getVariable(name: string) {
    return this._variables.get(name);
  }

  registerPlugin(plugin: Plugin) {
    this._plugins.set(plugin.pid, plugin);
  }

  getPlugin(id: string): Plugin {
    return this._plugins.get(id);
  }

  registerComponent(name: string, component: Component) {
    this._components.set(name, component);
  }

  unregisterComponent(name: string) {
    this._components.delete(name);
  }

  getComponent(name: string): Component {
    return this._components.get(name);
  }


}
