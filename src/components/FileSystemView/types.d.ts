interface FileStructure {
    type: "file",
    name: string,
    contents?: ReactNode,
}

interface DirectoryStructure {
    type: "directory",
    name: string,
    children?: Array<DirectoryStructure | FileStructure>,
}

type RootDirectoryStructure = DirectoryStructure[]