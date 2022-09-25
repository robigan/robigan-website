export enum NodeType {
    FILE = "file",
    DIR = "directory"
}

export interface FileStructure {
    type: NodeType.FILE,
    name: string,
    contents?: ReactNode,
}

export interface DirectoryStructure {
    type: NodeType.DIR,
    name: string,
    children?: Array<DirectoryStructure | FileStructure>,
}

export type RootDirectoryStructure = DirectoryStructure[]