import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getFileFromDB, saveFileInDB } from './db/file.db';
import { FileData } from './models/file.model';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor() {}

  public async getImageUrl(url: string) {
    const blob = await this.getFileBlob(url);
    if (blob) {
      return this.blobToBase64(blob);
    } else {
      return url;
    }
  }

  private blobToBase64(blob: Blob): string {
    return URL.createObjectURL(blob);
  }

  public async getFileArrayBuffer(url: string): Promise<ArrayBuffer> {
    return new Promise(async (resolve, reject) => {
      const blob = await this.getFileBlob(url);

      if (blob) {
        const fileReader = new FileReader();

        fileReader.onload = function (event: any) {
          resolve(event.target.result);
        };
        fileReader.onerror = function (err) {
          reject(new Error('FileReader Error'));
        };
        fileReader.readAsArrayBuffer(blob);
      } else {
        reject(new Error(`Get ${url} Failed`));
      }
    });
  }

  public async getFileBlob(url: string) {
    const fileData = await getFileFromDB(url);
    if (!fileData) {
      const blob = await this.fetchFile(url);
      if (blob) {
        await this.saveFile(url, blob);
        return blob;
      } else {
        return null;
      }
    } else {
      return fileData.data;
    }
  }

  private async saveFile(url: string, blob: Blob) {
    saveFileInDB(new FileData(url, blob));
  }

  public fetchFile(url: string): Promise<Blob | null> {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            resolve(null);
          }
          return res.blob();
        })
        .then((blob) => {
          resolve(blob);
        })
        .catch((err) => {
          resolve(null);
        });
    });
  }
}
