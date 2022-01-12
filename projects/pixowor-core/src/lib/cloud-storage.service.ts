import { Injectable } from '@angular/core';
import PixowApi from 'pixow-api';
import { UploadFileConfig } from './models/upload-file.model';
import * as qiniu from 'qiniu-js';

@Injectable({
  providedIn: 'root',
})
export class CloudStorageService {
  constructor(private pixowApi: PixowApi) {}

  /**
   * Upload file to qiniu bucket
   * @param fileConfig FileConfig
   * @returns
   */
  public uploadFile(fileConfig: UploadFileConfig) {
    const { file, key } = fileConfig;

    return new Promise((resolve, reject) => {
      this.pixowApi.getQiniuToken({ name: key }).then((res) => {
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
