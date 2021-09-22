import { Plugin } from "./plugin";
import { FileSystemManager } from "./file-system-manager";
import { ServiceManager } from "./service-manager";
import { StateManager } from "./state-manager";
import { WorkspaceManager } from "./workspace-manager";
import { diff, gte } from "semver";
import { Injectable } from "@angular/core";
import { StorageManager } from "./storage-manager";
import QingApi, { Area } from "pixow-api";

export type Env = {
  area: Area;
  production: boolean;
  environment: string;
  bucket: string;
  API_URL: string;
  WEB_RESOURCE_URI: string;
  TEST_GAME_CONFIG_IP_MOBILE: string;
  TEST_GAME_CONFIG_PORT_MOBILE: number;
  APP_DATA_PATH: string;
  USER_DATA_PATH: string;
  TEMP_PATH: string;
  APP_PATH: string;
};
@Injectable({
  providedIn: "root",
})
export class PixoworCore {
  /**
   * App version, sync with package version
   */
  private version: string;

  /**
   * Record workspace data
   */
  public workspace: WorkspaceManager = new WorkspaceManager();

  /**
   * Filesystem
   */
  public fileSystemManager: FileSystemManager = new FileSystemManager();

  /**
   * State manage data
   */
  public stateManager: StateManager = new StateManager();

  /**
   * Service manager
   */
  public serviceManager: ServiceManager = new ServiceManager();

  /**
   * LocalStorage manager
   */
  public storageManager: StorageManager = new StorageManager();

  public qingApi: QingApi;

  private _environment: Env;

  constructor(version: string, env: Env) {
    this.version = version;

    this._environment = env;

    this.qingApi = new QingApi({ area: env.area });
  }

  /**
   * Set qing api token
   * @param token - Get token from signin api
   */
  public setQingApiToken(token: string) {
    this.qingApi.setToken(token);
  }

  public get environment() {
    return this._environment
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

  /**
   * Install plugin, and check plugin dependencies has bee installed.
   * @param plugin - The plugin need installed.
   */
  public async installPlugin(plugin: Plugin) {
    const { minAppVersion, dependencies } = plugin;

    let installErrors: string[] = [];
    if (!this.dependencyValid(this.version, minAppVersion)) {
      installErrors.push(
        `Plugin ${plugin.name} need minAppVersion ${minAppVersion}, but app version is ${this.version}!`
      );
    }

    if (dependencies) {
      for (const pluginName in dependencies) {
        const requiredPluginVersion = dependencies[pluginName];
        const installedPlugin = this.stateManager.getPlugin(pluginName);

        if (!installedPlugin) {
          installErrors.push(`Plugin ${pluginName} has not installed`);
        } else {
          const installedPluginVersion = installedPlugin.version;

          if (
            !this.dependencyValid(installedPluginVersion, requiredPluginVersion)
          ) {
            installErrors.push(
              `Plugin ${pluginName} need version ${requiredPluginVersion}, but ${installedPluginVersion} installed!`
            );
          }
        }
      }
    }

    if (installErrors.length === 0) {
      this.stateManager.registerPlugin(plugin);
      await plugin.install();
    } else {
      installErrors.forEach((err) => console.error(err));
    }
  }

  /**
   * Activate plugin that has been installed.
   * @param plugins - The plugin need activate
   */
  public activatePlugins(plugins: Plugin[]) {
    
    for (const plugin of plugins) {
      this.stateManager.registerPlugin(plugin)
      plugin.activate();
    }
  }

  /**
   * Deactivate plugin that has been installed.
   * @param {string} pid - The plugin id need deactivate
   */
  public deactivatePlugin(pid: string) {
    const plugin = this.stateManager.getPlugin(pid);

    if (plugin) {
      plugin.deactivate();
    }
  }
}
