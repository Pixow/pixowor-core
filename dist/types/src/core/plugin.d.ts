export declare abstract class Plugin {
    name: string;
    version: string;
    description: string;
    author: string;
    getPluginIdentify(): string;
    abstract getDependencies(): string[];
    abstract activate(): void;
    abstract deactivate(): void;
}
