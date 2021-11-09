export interface FileStat {
    type: string;
    path: string;
    file: string;
    files?: FileStat[];
}
export declare type MsgcResponse = {
    error: Error | null;
    data: any;
};
export declare const IO_SERVICE = "io-service";
export declare class FileSystemManager {
    installI18n(translateObjs: {
        [k: string]: object;
    }): Promise<unknown>;
    mkdir(dir: string): Promise<any>;
    listDir(dir: string): Promise<FileStat[]>;
    removeDir(dir: string): Promise<unknown>;
    readFile(file: string): Promise<unknown>;
    writeFile(file: string, data: any): Promise<unknown>;
    removeFile(file: string, data: any): Promise<unknown>;
    readJson(path: string): Promise<unknown>;
    writeJson(path: string, data: any): Promise<unknown>;
    downloadFile(url: string, output: string): Promise<unknown>;
    uploadFiles(files: string[]): Promise<unknown>;
    copyFiles(source: string, dest: string): Promise<unknown>;
    zipFiles(files: FileStat[], folderName: string): Promise<unknown>;
    unzip(file: string): Promise<unknown>;
}
