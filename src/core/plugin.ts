
export abstract class Plugin {
  name: string;
  version: string;
  description: string;
  author: string;


  getPluginIdentify(): string {
    return this.name + "@" + this.version;
  }

  abstract getDependencies(): string[];
  async prepare() {};
  abstract activate(): void;
  abstract deactivate(): void;
}
