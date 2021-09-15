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


export const FILE_SERVICE = "file-service"

export class FileSystemManager {

  public ListDir(dir: string): Promise<FileStat[]> {
    return new Promise((resolve, reject) => {
      msgc
        .invoke(FILE_SERVICE, FileSystemEvents.LISTDIR, {
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

  public RemoveDir(dir: string) {
    return new Promise((resolve, reject) => {
      msgc
        .invoke(FILE_SERVICE, FileSystemEvents.REMOVEDIR, { dir })
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

  public ReadFile(file: string) {
    return new Promise((resolve, reject) => {
      msgc
        .invoke(FILE_SERVICE, FileSystemEvents.READFILE, {
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

  public WriteFile(file: string, data: any) {
    return new Promise((resolve, reject) => {
      msgc
        .invoke(FILE_SERVICE, FileSystemEvents.WRITEFILE, {
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

  public RemoveFile(file: string, data: any) {
    return new Promise((resolve, reject) => {
      msgc
        .invoke(FILE_SERVICE, FileSystemEvents.REMOVEFILE, {
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

  public ReadJson(path: string) {
    return new Promise((resolve, reject) => {
      msgc
        .invoke(FILE_SERVICE, FileSystemEvents.READJSON, {
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

  public WriteJson(path: string, data: any) {
    return new Promise((resolve, reject) => {
      msgc
        .invoke(FILE_SERVICE, FileSystemEvents.WRITEJSON, {
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

  public DownloadFile(url: string, output: string) {
    return new Promise((resolve, reject) => {
      msgc
        .invoke(FILE_SERVICE, FileSystemEvents.DOWNLOADFILE, {
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
//         .invoke(FILE_SERVICE, IOEvents.UPLOADFILE, {
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

  public UploadFiles(files: string[]) {
    return new Promise((resolve, reject) => {});
  }

  public CopyFiles(source: string, dest: string) {
    return new Promise((resolve, reject) => {
      msgc
        .invoke(FILE_SERVICE, FileSystemEvents.COPYFILES, {
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

  public ZipFiles(files: FileStat[], folderName: string) {
    return new Promise((resolve, reject) => {
      msgc
        .invoke(FILE_SERVICE, FileSystemEvents.ZIPFILES, {
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

  public Unzip(file: string) {
    return new Promise((resolve, reject) => {
      msgc
        .invoke(FILE_SERVICE, FileSystemEvents.UNZIP, {
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