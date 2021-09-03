export declare abstract class Plugin {
    name: string;
    version: string;
    description: string;
    author: string;
    getPluginIdentify(): string;
    abstract getDependencies(): string[];
    prepare(): Promise<void>;
    abstract activate(): void;
    abstract deactivate(): void;
}
