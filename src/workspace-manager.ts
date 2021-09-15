import EventEmitter from "events";

export enum WorkspaceSlots {
  LeftSplit = "left-split",
  RightSplit = "right-split",
  RootSplit = "root-split",
  LeftRibbon = "left-ribbon",
  RightRibbon = "right-ribbon",
  TopBar = "top-bar",
  RootBar = "root-bar"
}

export class WorkspaceSidedock {}

export class WorkspaceRibbon {}

export class WorkspaceSplit {}

export class WorkspaceManager extends EventEmitter {
  public leftSplit: WorkspaceSidedock;
  public rightSplit: WorkspaceSidedock;
  public leftRibbon: WorkspaceRibbon;
  public rightRibbon: WorkspaceRibbon;
  public rootSplit: WorkspaceSplit;

  constructor() {
    super();

  }

  async changeLayout() {}

}

