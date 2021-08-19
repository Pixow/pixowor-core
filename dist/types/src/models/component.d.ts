import { Visibility } from "./game";
import { User } from "./user";
export declare enum ComponentType {
    SpawnPointNode = "SpawnPointNode",
    ElementNode = "ElementNode",
    TerrainNode = "TerrainNode",
    CustomNode = "CustomNode",
    EffectNode = "EffectNode",
    CarpetNode = "CarpetNode",
    WallNode = "WallNode"
}
export interface IComponentVersion {
    resources: string[];
    _id: string;
    version: string;
    createdAt: string;
}
export declare class Component {
    _id: string;
    tags: string[];
    visibility: Visibility;
    archive: boolean;
    name: string;
    type: ComponentType;
    description: string;
    copy: boolean;
    owner: User;
    createdAt: string;
    updatedAt: string;
    versions: IComponentVersion[];
}
