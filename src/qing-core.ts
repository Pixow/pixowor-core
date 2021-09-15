import { Plugin } from "src";
import { FileSystemManager } from "./file-system-manager";
import { ServiceManager } from "./service-manager";
import { StateManager } from "./state-manager";
import { WorkspaceManager } from "./workspace-manager";
import { diff, gte } from "semver";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class QingCore {
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

  constructor(version: string) {
    this.version = version;
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
    const { minAppVersion, dependencies } = plugin.manifest;

    let installErrors: string[] = [];
    if (!this.dependencyValid(this.version, minAppVersion)) {
      installErrors.push(
        `Plugin ${plugin.manifest.name} need minAppVersion ${minAppVersion}, but app version is ${this.version}!`
      );
    }

    if (dependencies) {
      for (const pluginName in dependencies) {
        const requiredPluginVersion = dependencies[pluginName];
        const installedPlugin = this.stateManager.getPlugin(pluginName);

        if (!installedPlugin) {
          installErrors.push(`Plugin ${pluginName} has not installed`);
        } else {
          const installedPluginVersion = installedPlugin.manifest.version;

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
   * @param {Plugin} plugin - The plugin need activate
   */
  public activatePlugin(plugin: Plugin) {
    plugin.activate();
  }

  /**
   * Deactivate plugin that has been installed.
   * @param {string} id - The plugin id need deactivate
   */
  public deactivatePlugin(id: string) {
    const plugin = this.stateManager.getPlugin(id);

    if (plugin) {
      plugin.deactivate();
    }
  }
}
