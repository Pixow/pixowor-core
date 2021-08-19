declare module "electron-re" {
  export class EreMessageChannel {
    static invoke: (...args: any) => Promise<any>;
  }
}
