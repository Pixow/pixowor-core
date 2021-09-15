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
export declare const FILE_SERVICE = "file-service";
export declare class FileSystemManager {
    ListDir(dir: string): Promise<FileStat[]>;
    RemoveDir(dir: string): Promise<unknown>;
    ReadFile(file: string): Promise<unknown>;
    WriteFile(file: string, data: any): Promise<unknown>;
    RemoveFile(file: string, data: any): Promise<unknown>;
    ReadJson(path: string): Promise<unknown>;
    WriteJson(path: string, data: any): Promise<unknown>;
    DownloadFile(url: string, output: string): Promise<unknown>;
    UploadFiles(files: string[]): Promise<unknown>;
    CopyFiles(source: string, dest: string): Promise<unknown>;
    ZipFiles(files: FileStat[], folderName: string): Promise<unknown>;
    Unzip(file: string): Promise<unknown>;
}
