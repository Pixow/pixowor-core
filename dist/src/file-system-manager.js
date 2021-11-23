import { MessageChannel as msgc } from "electron-re";
import { FileSystemEvents } from "./events";
import * as qiniu from "qiniu-js";
export var IO_SERVICE = "io-service";
var FileSystemManager = /** @class */ (function () {
    function FileSystemManager(pixowApi) {
        this.pixowApi = pixowApi;
    }
    /**
    * Upload file to qiniu bucket
    * @param fileConfig FileConfig
    * @returns
    */
    FileSystemManager.prototype.uploadFile = function (fileConfig) {
        var _this = this;
        var file = fileConfig.file, key = fileConfig.key;
        return new Promise(function (resolve, reject) {
            _this.pixowApi.util.getQiniuToken({ name: key }).then(function (res) {
                var token = res.data.token;
                qiniu.upload(file, key, token).subscribe({
                    next: function (res) { },
                    error: function (err) {
                        reject(err);
                    },
                    complete: function (res) {
                        resolve(res);
                    },
                });
            });
        });
    };
    FileSystemManager.prototype.installI18n = function (translateObjs) {
        return new Promise(function (resolve, reject) {
            msgc
                .invoke(IO_SERVICE, FileSystemEvents.INSTALL_I18N, { translateObjs: translateObjs })
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
    FileSystemManager.prototype.mkdir = function (dir) {
        return new Promise(function (resolve, reject) {
            msgc
                .invoke(IO_SERVICE, FileSystemEvents.MKDIR, { dir: dir })
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
    FileSystemManager.prototype.listDir = function (dir) {
        return new Promise(function (resolve, reject) {
            msgc
                .invoke(IO_SERVICE, FileSystemEvents.LISTDIR, {
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
    FileSystemManager.prototype.removeDir = function (dir) {
        return new Promise(function (resolve, reject) {
            msgc
                .invoke(IO_SERVICE, FileSystemEvents.REMOVEDIR, { dir: dir })
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
    FileSystemManager.prototype.readFile = function (file) {
        return new Promise(function (resolve, reject) {
            msgc
                .invoke(IO_SERVICE, FileSystemEvents.READFILE, {
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
    FileSystemManager.prototype.writeFile = function (file, data) {
        return new Promise(function (resolve, reject) {
            msgc
                .invoke(IO_SERVICE, FileSystemEvents.WRITEFILE, {
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
    FileSystemManager.prototype.removeFile = function (file, data) {
        return new Promise(function (resolve, reject) {
            msgc
                .invoke(IO_SERVICE, FileSystemEvents.REMOVEFILE, {
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
    FileSystemManager.prototype.readJson = function (path) {
        return new Promise(function (resolve, reject) {
            msgc
                .invoke(IO_SERVICE, FileSystemEvents.READJSON, {
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
    FileSystemManager.prototype.writeJson = function (path, data) {
        return new Promise(function (resolve, reject) {
            msgc
                .invoke(IO_SERVICE, FileSystemEvents.WRITEJSON, {
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
    FileSystemManager.prototype.downloadFile = function (url, output) {
        return new Promise(function (resolve, reject) {
            msgc
                .invoke(IO_SERVICE, FileSystemEvents.DOWNLOADFILE, {
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
    FileSystemManager.prototype.uploadFiles = function (files) {
        return new Promise(function (resolve, reject) { });
    };
    FileSystemManager.prototype.copyFiles = function (source, dest) {
        return new Promise(function (resolve, reject) {
            msgc
                .invoke(IO_SERVICE, FileSystemEvents.COPYFILES, {
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
    FileSystemManager.prototype.zipFiles = function (files, folderName) {
        return new Promise(function (resolve, reject) {
            msgc
                .invoke(IO_SERVICE, FileSystemEvents.ZIPFILES, {
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
    FileSystemManager.prototype.unzip = function (file) {
        return new Promise(function (resolve, reject) {
            msgc
                .invoke(IO_SERVICE, FileSystemEvents.UNZIP, {
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