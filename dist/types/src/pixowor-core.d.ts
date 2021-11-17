import { Plugin } from "./plugin";
import { FileSystemManager } from "./file-system-manager";
import { ServiceManager } from "./service-manager";
import { StateManager } from "./state-manager";
import { WorkspaceManager } from "./workspace-manager";
import { StorageManager } from "./storage-manager";
import PixowApi, { Area } from "pixow-api";
export declare type Settings = {
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
export interface FileConfig {
    file: string;
    filePath: string;
}
export declare class PixoworCore {
    /**
     * App version, sync with package version
     */
    private version;
    /**
     * Record workspace data
     */
    workspace: WorkspaceManager;
    /**
     * Filesystem
     */
    fileSystemManager: FileSystemManager;
    /**
     * State manage data
     */
    stateManager: StateManager;
    /**
     * Service manager
     */
    serviceManager: ServiceManager;
    /**
     * LocalStorage manager
     */
    storageManager: StorageManager;
    pixowApi: PixowApi;
    private _settings;
    private _ipcMain;
    private _ipcRenderer;
    private _storage;
    constructor(settings: Settings);
    /**
     * Set pixow api token
     * @param token - Get token from signin api
     */
    setPixowApiToken(token: string): void;
    get settings(): Settings;
    get ipcMain(): any;
    set ipcMain(ipc: any);
    get ipcRenderer(): any;
    set ipcRenderer(ipc: any);
    get storage(): any;
    set storage(v: any);
    setEditingGame(stat: FileConfig): void;
    getEditingGame(): FileConfig;
    setEditingElement(stat: FileConfig): void;
    getEditingElement(): FileConfig;
    setEditingScene(stat: FileConfig): void;
    getEditingScene(): FileConfig;
    private dependencyValid;
    /**
     * Install plugin, and check plugin dependencies has bee installed.
     * @param plugin - The plugin need installed.
     */
    installPlugin(plugin: Plugin): Promise<void>;
    /**
     * Activate plugin that has been installed.
     * @param plugins - The plugin need activate
     */
    activatePlugins(plugins: Plugin[]): void;
    /**
     * Deactivate plugin that has been installed.
     * @param {string} pid - The plugin id need deactivate
     */
    deactivatePlugin(pid: string): void;
    /**
     * Upload file to qiniu bucket
     * @param fileConfig FileConfig
     * @returns
     */
    uploadFile(fileConfig: UploadFileConfig): Promise<unknown>;
}
