/// <reference types="node" />
import EventEmitter from "events";
export declare enum WorkspaceSlots {
    LeftSplit = "left-split",
    RightSplit = "right-split",
    RootSplit = "root-split",
    LeftRibbon = "left-ribbon",
    RightRibbon = "right-ribbon",
    TopBar = "top-bar",
    RootBar = "root-bar"
}
export declare class WorkspaceSidedock {
}
export declare class WorkspaceRibbon {
}
export declare class WorkspaceSplit {
}
export declare class Workspace extends EventEmitter {
    leftSplit: WorkspaceSidedock;
    rightSplit: WorkspaceSidedock;
    leftRibbon: WorkspaceRibbon;
    rightRibbon: WorkspaceRibbon;
    rootSplit: WorkspaceSplit;
    constructor();
    changeLayout(): Promise<void>;
}
