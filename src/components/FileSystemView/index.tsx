import { NodeType } from "./common";
import RootDirectory, { RootDirectoryStructure } from "./directory";

export const TEST_DATA: RootDirectoryStructure = [
    {
        name: "home",
        type: NodeType.DIR,
        children: [
            {
                name: "robigan",
                type: NodeType.DIR,
                children: [
                    {
                        name: "About Me",
                        type: NodeType.FILE,
                        contents: <p>Hello World</p>
                    },
                    {
                        name: "Documents",
                        type: NodeType.DIR,
                        children: [],
                    }
                ]
            }
        ]
    }
];

const FileSystemView = {};

export default Object.assign(FileSystemView, { RootDirectory });