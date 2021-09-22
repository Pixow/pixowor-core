import { MessageChannel as msgc } from "electron-re";
import { FileSystemEvents } from "./events";

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


export const IO_SERVICE = "io-service"

export class FileSystemManager {
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