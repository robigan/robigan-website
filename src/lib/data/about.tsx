import { NodeType } from "../../components/FileSystemView/common";
import { RootDirectoryStructure } from "../../components/FileSystemView/directory";

export const ABOUT_FSV_DATA: RootDirectoryStructure = [
    {
        name: "home",
        type: NodeType.DIR,
        children: [
            {
                name: "robigan",
                type: NodeType.DIR,
                children: [
                    {
                        name: "whoami.txt",
                        type: NodeType.FILE,
                        contents: <>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium consequatur reiciendis aut nisi perferendis aliquam architecto. Itaque placeat voluptatum dignissimos sapiente odio eius inventore distinctio esse magnam voluptatibus, nam laboriosam.</p>
                        </>
                    },
                    {
                        name: "Documents",
                        type: NodeType.DIR,
                        children: [],
                    }
                ]
            }
        ]
    },
    {
        name: "etc",
        type: NodeType.DIR,
        children: [
            {
                name: "locale.gen",
                type: NodeType.FILE,
                contents: <>
                    <p>en_US.UTF-8</p>
                    <p>it_IT.UTF-8</p>
                    <p>fr_FR.UTF-8</p>
                </>
            }
        ]
    }
];