


declare module "electron-re" {
  export class MessageChannel {
    static invoke: (...args: any) => Promise<any>;
  }
}