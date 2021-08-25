export abstract class Plugin {
  name: string;
  title: string;
  icon?: string;
  version: string;
  description: string;
  author: string;
  active?: boolean;
  isTest?: boolean;
  updateAvailable: boolean;

  getPluginIdentify(): string {
    return this.name + "@" + this.version;
  }

  abstract getDependencies(): string[];
  abstract activate(): void;
  abstract deactivate(): void;
}
