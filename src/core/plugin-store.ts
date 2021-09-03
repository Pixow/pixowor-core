import { EventEmitter } from "events";
import { BehaviorSubject } from "rxjs";
import { diff, gte } from "semver";
import { Plugin } from "./plugin";

type BindData = { [k: string]: any };

export class Event {
  name: string;
  data: BindData;

  constructor(name: string, data: BindData = {}) {
    this.name = name;
    this.data = data;
  }
}

export class PluginStore extends EventEmitter {
  private _functionArray: Map<string, any>;
  private _pluginMap: Map<string, Plugin>;
  private _observerMap = new Map<string, BehaviorSubject<any>>();

  constructor() {
    super();
    this._functionArray = new Map<string, any>();
    this._pluginMap = new Map<string, Plugin>();
  }

  public get observerMap(): Map<string, BehaviorSubject<any>> {
    return this._observerMap;
  }

  private dependencyValid(installedVersion: string, requiredVersion: string) {
    const versionDiff = diff(installedVersion, requiredVersion);
    return (
      (versionDiff === null ||
        versionDiff === "patch" ||
        versionDiff === "minor") &&
      gte(installedVersion, requiredVersion)
    );
  }

  getInstalledPlugins() {
    return Array.from(this._pluginMap.values());
  }

  async prepare(plugin: Plugin) {
    const pluginNameAndVer = plugin.getPluginIdentify();
    const [pluginName, _] = pluginNameAndVer.split("@");
    const pluginDependencies = plugin.getDependencies() || [];

    const installed = this._pluginMap.get(pluginName);

    if (installed) {
      return;
    }

    // check dependencies is installed
    let installErrors: string[] = [];
    pluginDependencies.forEach((dep: string) => {
      const [depName, depVersion] = dep.split("@");
      const plugin = this._pluginMap.get(depName);

      if (!plugin) {
        installErrors.push(
          `Plugin ${pluginName}: ${depName} has not installed!`
        );
      } else {
        const [, installedVersion] = plugin.getPluginIdentify().split("@");
        if (!this.dependencyValid(installedVersion, depVersion)) {
          installErrors.push(
            `Plugin ${pluginName} need ${depName}@${depVersion}, but ${installedVersion} installed!`
          );
        }
      }
    });

    if (installErrors.length === 0) {
      this._pluginMap.set(pluginName, plugin);
      await plugin.prepare();
    } else {
      installErrors.forEach((err) => console.error(err));
    }
  }

  activate(plugin: Plugin) {
    plugin.activate();
  }

  deactivate(pluginName: string) {
    let plugin = this._pluginMap.get(pluginName);

    if (plugin) {
      plugin.deactivate();
      this._pluginMap.delete(pluginName);
    }
  }

  addFunction(key: string, fn: any) {
    this._functionArray.set(key, fn);
  }

  execFunction(key: string, ...args: any) {
    let fn = this._functionArray.get(key);
    if (fn) {
      return fn(...args);
    }
  }

  removeFunction(key: string) {
    this._functionArray.delete(key);
  }

  addEventListener<EventType = Event>(
    name: string,
    listener: (event: EventType) => void
  ) {
    this.addListener(name, listener);
  }

  addOnceEventListener<EventType = Event>(
    name: string,
    listener: (event: EventType) => void
  ) {
    this.once(name, listener);
  }

  removeEventListener<EventType = Event>(
    name: string,
    listener: (event: EventType) => void
  ) {
    this.removeListener(name, listener);
  }

  dispatchEvent(event: Event) {
    this.emit(event.name, event);
  }

  removeAllEvents() {
    this.removeAllListeners();
  }

  registObserver(name: string, data?: any) {
    this._observerMap.set(name, new BehaviorSubject(data || null));
  }

  getObserver(name: string): BehaviorSubject<any> | undefined {
    return this._observerMap.get(name);
  }
}
