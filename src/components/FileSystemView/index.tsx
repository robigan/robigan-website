import RootDirectory from "./directory";

export const TEST_DATA: RootDirectoryStructure = [
    {
        name: "home",
        type: "directory",
        children: [
            {
                name: "robigan",
                type: "directory",
                children: [
                    {
                        name: "About Me",
                        type: "file",
                        contents: <p>Hello World</p>
                    },
                    {
                        name: "Documents",
                        type: "directory",
                        children: [

                        ],
                    }
                ]
            }
        ]
    }
];

const FileSystemView = {};

export default Object.assign(FileSystemView, { RootDirectory });