import { MessageChannel as msgc } from "electron-re";
import PixowApi from "pixow-api";
import { FileSystemEvents } from "./events";
import * as qiniu from "qiniu-js";
export interface FileStat {
  type: string;
  path: string;
  file: string;
  files?: FileStat[];
}

export type MsgcResponse = {
  error: Error | null;
  data: any;
};

export const IO_SERVICE = "io-service";

export interface UploadFileConfig {
  file: File;
  key: string;
}


export class FileSystemManager {

  constructor(private pixowApi: PixowApi) {

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
          next(res) { },
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

  /**
   * Install I18n files
   * @param translateObjs i18n translate objects
   * @returns 
   */
  public installI18n(translateObjs: { [k: string]: object }) {
    return new Promise((resolve, reject) => {
      msgc
        .invoke(IO_SERVICE, FileSystemEvents.INSTALL_I18N, { translateObjs })
        .then((res: MsgcResponse) => {
          const { error, data } = res;
          if (error) {
            reject(error);
            return;
          }

          resolve(data);
        });
    });
  }

  public mkdir(dir: string): Promise<any> {
    return new Promise((resolve, reject) => {
      msgc
        .invoke(IO_SERVICE, FileSystemEvents.MKDIR, { dir })
        .then((res: MsgcResponse) => {
          const { error, data } = res;
          if (error) {
            reject(error);
            return;
          }

          resolve(data);
        });
    });
  }

  public listDir(dir: string): Promise<FileStat[]> {
    return new Promise((resolve, reject) => {
      msgc
        .invoke(IO_SERVICE, FileSystemEvents.LISTDIR, {
          dir,
        })
        .then((res: MsgcResponse) => {
          const { error, data } = res;
          if (error) {
            reject(error);
            return;
          }

          resolve(data);
        });
    });
  }

  public removeDir(dir: string) {
    return new Promise((resolve, reject) => {
      msgc
        .invoke(IO_SERVICE, FileSystemEvents.REMOVEDIR, { dir })
        .then((res: MsgcResponse) => {
          const { error, data } = res;
          if (error) {
            reject(error);
            return;
          }

          resolve(data);
        });
    });
  }

  public readFile(file: string) {
    return new Promise((resolve, reject) => {
      msgc
        .invoke(IO_SERVICE, FileSystemEvents.READFILE, {
          file,
          options: { encoding: "utf8" },
        })
        .then((res: MsgcResponse) => {
          const { error, data } = res;
          if (error) {
            reject(error);
            return;
          }

          resolve(data);
        });
    });
  }

  public writeFile(file: string, data: any) {
    return new Promise((resolve, reject) => {
      msgc
        .invoke(IO_SERVICE, FileSystemEvents.WRITEFILE, {
          file,
          data,
        })
        .then((res: MsgcResponse) => {
          const { error, data } = res;
          if (error) {
            reject(error);
            return;
          }

          resolve(data);
        });
    });
  }

  public removeFile(file: string, data: any) {
    return new Promise((resolve, reject) => {
      msgc
        .invoke(IO_SERVICE, FileSystemEvents.REMOVEFILE, {
          file,
          data,
        })
        .then((res: MsgcResponse) => {
          const { error, data } = res;
          if (error) {
            reject(error);
            return;
          }

          resolve(data);
        });
    });
  }

  public readJson(path: string) {
    return new Promise((resolve, reject) => {
      msgc
        .invoke(IO_SERVICE, FileSystemEvents.READJSON, {
          path,
        })
        .then((res: MsgcResponse) => {
          const { error, data } = res;
          if (error) {
            reject(error);
            return;
          }

          resolve(data);
        });
    });
  }

  public writeJson(path: string, data: any) {
    return new Promise((resolve, reject) => {
      msgc
        .invoke(IO_SERVICE, FileSystemEvents.WRITEJSON, {
          path,
          data,
        })
        .then((res: MsgcResponse) => {
          const { error, data } = res;
          if (error) {
            reject(error);
            return;
          }

          resolve(data);
        });
    });
  }

  public downloadFile(url: string, output: string) {
    return new Promise((resolve, reject) => {
      msgc
        .invoke(IO_SERVICE, FileSystemEvents.DOWNLOADFILE, {
          url,
          output,
        })
        .then((res: MsgcResponse) => {
          const { error, data } = res;
          if (error) {
            reject(error);
            return;
          }

          resolve(data);
        });
    });
  }

  //   public UploadFile(filePath: string, fileName: string) {
  //     return new Promise(async (resolve, reject) => {
  //       const qiniuTokenRes = await this.WebServiceSdk.util.getQiniuToken({
  //         name: fileName,
  //       });

  //       const { token } = qiniuTokenRes.data;

  //       msgc
  //         .invoke(IO_SERVICE, IOEvents.UPLOADFILE, {
  //           filePath,
  //           fileName,
  //           token,
  //         })
  //         .then((res: MsgcResponse) => {
  //           const { error, data } = res;
  //           if (error) {
  //             reject(error);
  //             return;
  //           }

  //           resolve(data);
  //         });
  //     });
  //   }

  public uploadFiles(files: string[]) {
    return new Promise((resolve, reject) => {});
  }

  public copyFiles(source: string, dest: string) {
    return new Promise((resolve, reject) => {
      msgc
        .invoke(IO_SERVICE, FileSystemEvents.COPYFILES, {
          source,
          dest,
        })
        .then((res: MsgcResponse) => {
          const { error, data } = res;
          if (error) {
            reject(error);
            return;
          }

          resolve(data);
        });
    });
  }

  public zipFiles(files: FileStat[], folderName: string) {
    return new Promise((resolve, reject) => {
      msgc
        .invoke(IO_SERVICE, FileSystemEvents.ZIPFILES, {
          files,
          folderName,
        })
        .then((res: MsgcResponse) => {
          const { error, data } = res;
          if (error) {
            reject(error);
            return;
          }

          resolve(data);
        });
    });
  }

  public unzip(file: string) {
    return new Promise((resolve, reject) => {
      msgc
        .invoke(IO_SERVICE, FileSystemEvents.UNZIP, {
          file,
        })
        .then((res: MsgcResponse) => {
          const { error, data } = res;
          if (error) {
            reject(error);
            return;
          }

          resolve(data);
        });
    });
  }
}
