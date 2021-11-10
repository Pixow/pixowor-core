import { Plugin } from "./plugin";
import { FileSystemManager } from "./file-system-manager";
import { ServiceManager } from "./service-manager";
import { StateManager } from "./state-manager";
import { WorkspaceManager } from "./workspace-manager";
import { diff, gte } from "semver";
import { Injectable } from "@angular/core";
import { StorageManager } from "./storage-manager";
import PixowApi, { Area, Game } from "pixow-api";
import * as qiniu from "qiniu-js";

export type Settings = {
  lang: string;
  version: string;
  area: Area;
  production: boolean;
  environment: string;
  bucket: string;
  token: string;
  API_URL: string;
  WEB_RESOURCE_URI: string;
  TEST_GAME_CONFIG_IP_MOBILE: string;
  TEST_GAME_CONFIG_PORT_MOBILE: number;
  APP_DATA_PATH: string;
  USER_DATA_PATH: string;
  GAME_PROJECTS_PATH: string;
  TEMP_PATH: string;
  APP_PATH: string;
};

export interface UploadFileConfig {
  file: File;
  key: string;
}

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

  public pixowApi: PixowApi;

  private _settings: Settings;

  private _ipcMain: any;
  private _ipcRenderer: any;

  constructor(settings: Settings) {
    this.version = settings.version;

    this._settings = settings;

    this.pixowApi = new PixowApi({ area: settings.area });

    if (settings.token) {
      this.setPixowApiToken(settings.token);
    }
  }

  /**
   * Set pixow api token
   * @param token - Get token from signin api
   */
  public setPixowApiToken(token: string) {
    this.pixowApi.setToken(token);
  }

  public get settings() {
    return this._settings;
  }

  public get ipcMain() {
    return this._ipcMain;
  }


  public set ipcMain(ipc) {
    this._ipcMain = ipc
  }

  public get ipcRenderer() {
    return this._ipcRenderer
  }
  
  public set ipcRenderer(ipc) {
    this._ipcRenderer = ipc;
  }

  public setEditingGameName(name: string) {
    this.storageManager.set("editing_game", name);
  }

  public getEditingGameName(): string {
    return this.storageManager.get("editing_game");
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
      this.stateManager.registerPlugin(plugin);
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

  /**
   * Upload file to qiniu bucket
   * @param fileConfig FileConfig 
   * @returns 
   */
  public uploadFile(fileConfig: UploadFileConfig) {
    const { file, key } = fileConfig;

    return new Promise((resolve, reject) => {
      this.pixowApi.util.getQiniuToken({ name: key }).then((res) => {
        const { token } = res.data;
        qiniu.upload(file, key, token).subscribe({
          next(res) {},
          error(err) {
            reject(err);
          },
          complete(res) {
            resolve(res);
          },
        });
      });
    });
  }
}
