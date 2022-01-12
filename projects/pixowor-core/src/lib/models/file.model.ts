export enum FileType {
  IMAGE = 'image',
  PI = 'pi',
}

export class FileData {
  constructor(public url: string, public data: Blob) {}
}
