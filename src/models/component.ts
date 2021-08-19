import { Visibility } from "./game";
import { User } from "./user";

export enum ComponentType {
  SpawnPointNode = "SpawnPointNode",
  ElementNode = "ElementNode",
  TerrainNode = "TerrainNode",
  CustomNode = "CustomNode", // 自定义功能包
  EffectNode = "EffectNode",
  CarpetNode = "CarpetNode", // 地毯
  WallNode = "WallNode",
}


export interface IComponentVersion {
	resources: string[];
	_id: string;
	version: string;
	createdAt: string;
}

export class Component {
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
