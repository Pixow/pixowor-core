import { MessageChannel as msgc } from "electron-re";
import { IOEvents } from "./events";
export var FILE_SERVICE = "file-service";
var FileSystemManager = /** @class */ (function () {
    function FileSystemManager() {
    }
    FileSystemManager.prototype.ListDir = function (dir) {
        return new Promise(function (resolve, reject) {
            msgc
                .invoke(FILE_SERVICE, IOEvents.LISTDIR, {
                dir: dir,
            })
                .then(function (res) {
                var error = res.error, data = res.data;
                if (error) {
                    reject(error);
                    return;
                }
                resolve(data);
            });
        });
    };
    FileSystemManager.prototype.RemoveDir = function (dir) {
        return new Promise(function (resolve, reject) {
            msgc
                .invoke(FILE_SERVICE, IOEvents.REMOVEDIR, { dir: dir })
                .then(function (res) {
                var error = res.error, data = res.data;
                if (error) {
                    reject(error);
                    return;
                }
                resolve(data);
            });
        });
    };
    FileSystemManager.prototype.ReadFile = function (file) {
        return new Promise(function (resolve, reject) {
            msgc
                .invoke(FILE_SERVICE, IOEvents.READFILE, {
                file: file,
                options: { encoding: "utf8" },
            })
                .then(function (res) {
                var error = res.error, data = res.data;
                if (error) {
                    reject(error);
                    return;
                }
                resolve(data);
            });
        });
    };
    FileSystemManager.prototype.WriteFile = function (file, data) {
        return new Promise(function (resolve, reject) {
            msgc
                .invoke(FILE_SERVICE, IOEvents.WRITEFILE, {
                file: file,
                data: data,
            })
                .then(function (res) {
                var error = res.error, data = res.data;
                if (error) {
                    reject(error);
                    return;
                }
                resolve(data);
            });
        });
    };
    FileSystemManager.prototype.RemoveFile = function (file, data) {
        return new Promise(function (resolve, reject) {
            msgc
                .invoke(FILE_SERVICE, IOEvents.REMOVEFILE, {
                file: file,
                data: data,
            })
                .then(function (res) {
                var error = res.error, data = res.data;
                if (error) {
                    reject(error);
                    return;
                }
                resolve(data);
            });
        });
    };
    FileSystemManager.prototype.ReadJson = function (path) {
        return new Promise(function (resolve, reject) {
            msgc
                .invoke(FILE_SERVICE, IOEvents.READJSON, {
                path: path,
            })
                .then(function (res) {
                var error = res.error, data = res.data;
                if (error) {
                    reject(error);
                    return;
                }
                resolve(data);
            });
        });
    };
    FileSystemManager.prototype.WriteJson = function (path, data) {
        return new Promise(function (resolve, reject) {
            msgc
                .invoke(FILE_SERVICE, IOEvents.WRITEJSON, {
                path: path,
                data: data,
            })
                .then(function (res) {
                var error = res.error, data = res.data;
                if (error) {
                    reject(error);
                    return;
                }
                resolve(data);
            });
        });
    };
    FileSystemManager.prototype.DownloadFile = function (url, output) {
        return new Promise(function (resolve, reject) {
            msgc
                .invoke(FILE_SERVICE, IOEvents.DOWNLOADFILE, {
                url: url,
                output: output,
            })
                .then(function (res) {
                var error = res.error, data = res.data;
                if (error) {
                    reject(error);
                    return;
                }
                resolve(data);
            });
        });
    };
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
    FileSystemManager.prototype.UploadFiles = function (files) {
        return new Promise(function (resolve, reject) { });
    };
    FileSystemManager.prototype.CopyFiles = function (source, dest) {
        return new Promise(function (resolve, reject) {
            msgc
                .invoke(FILE_SERVICE, IOEvents.COPYFILES, {
                source: source,
                dest: dest,
            })
                .then(function (res) {
                var error = res.error, data = res.data;
                if (error) {
                    reject(error);
                    return;
                }
                resolve(data);
            });
        });
    };
    FileSystemManager.prototype.ZipFiles = function (files, folderName) {
        return new Promise(function (resolve, reject) {
            msgc
                .invoke(FILE_SERVICE, IOEvents.ZIPFILES, {
                files: files,
                folderName: folderName,
            })
                .then(function (res) {
                var error = res.error, data = res.data;
                if (error) {
                    reject(error);
                    return;
                }
                resolve(data);
            });
        });
    };
    FileSystemManager.prototype.Unzip = function (file) {
        return new Promise(function (resolve, reject) {
            msgc
                .invoke(FILE_SERVICE, IOEvents.UNZIP, {
                file: file,
            })
                .then(function (res) {
                var error = res.error, data = res.data;
                if (error) {
                    reject(error);
                    return;
                }
                resolve(data);
            });
        });
    };
    return FileSystemManager;
}());
export { FileSystemManager };
//# sourceMappingURL=file-system-manager.js.map