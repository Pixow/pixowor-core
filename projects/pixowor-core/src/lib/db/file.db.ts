import Dexie from 'dexie';
import { FileData } from '../models/file.model';

export class FileDB extends Dexie {
  public files!: Dexie.Table<FileData, string>;

  constructor() {
    super('FileDB');

    this.version(1).stores({
      files: '&url',
    });

    this.files.mapToClass(FileData);
  }
}

export const db = new FileDB();

export function getFileFromDB(url: string): Promise<FileData | undefined> {
  return db.files.get({ url });
}

export function saveFileInDB(data: FileData): Promise<string> {
  return db.files.put(data);
}
