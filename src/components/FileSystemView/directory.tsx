import { FC } from "react";
import { Disclosure } from "@headlessui/react";
import { DirectoryStructure, NodeType, RootDirectoryStructure } from "./types";

interface DirectoryProps {
    payload: DirectoryStructure,
    refKey: string,
}

const Directory: FC<DirectoryProps> = ({ payload, refKey }) => (
    <Disclosure>
        <Disclosure.Button>{payload.name}</Disclosure.Button>
        <Disclosure.Panel>
            {
                payload.children && payload.children.map((childPayload) => {
                    const computedKey = refKey + "/" + childPayload.name;
                    
                    if (childPayload.type === NodeType.DIR) 
                        return <Directory payload={childPayload} key={computedKey} refKey={computedKey} />;
                    else if (childPayload.type === NodeType.FILE)
                        return <></>;
                })
            }
        </Disclosure.Panel>
    </Disclosure>
);

interface RootDirectoryProps {
    payload: RootDirectoryStructure
}

const RootDirectory: FC<RootDirectoryProps> = ({ payload }) => (
    <>
        <div>/</div>
        <div>
            {
                payload.map((childPayload) => {
                    const computedKey = "/" + childPayload.name;
                    return <Directory payload={childPayload} key={computedKey} refKey={computedKey} />;
                })
            }
        </div>
    </>
);

export default RootDirectory;