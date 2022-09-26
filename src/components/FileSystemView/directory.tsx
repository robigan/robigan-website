import { FC } from "react";
import { Disclosure } from "@headlessui/react";
import File, { FileStructure } from "./file";
import DecoratedButton, { NodeType } from "./common";
import Image, { ImageStructure } from "./image";

export interface DirectoryStructure {
    type: NodeType.DIR,
    name: string,
    children?: Array<DirectoryStructure | FileStructure | ImageStructure>,
}

export type RootDirectoryStructure = DirectoryStructure[]

interface DirectoryProps {
    payload: DirectoryStructure,
    refKey: string,
}

/**
 * Directory is a component that can be used to render a directory in the File System View and render it's children
 */
const Directory: FC<DirectoryProps> = ({ payload, refKey }) => (
    <Disclosure>
        <Disclosure.Button className="m-1 block">
            {({ open }) => (            
                <DecoratedButton state={open} type={NodeType.DIR}>
                    {payload.name} /
                </DecoratedButton>
            )}
        </Disclosure.Button>
        <Disclosure.Panel className="ml-8">
            {
                payload.children && payload.children.map((childPayload) => {
                    const computedKey = refKey + "/" + childPayload.name;
                    
                    if (childPayload.type === NodeType.DIR) 
                        return <Directory payload={childPayload} key={computedKey} refKey={computedKey} />;
                    else if (childPayload.type === NodeType.FILE)
                        return <File payload={childPayload} key={computedKey} />;
                    else if (childPayload.type === NodeType.IMAGE)
                        // eslint-disable-next-line jsx-a11y/alt-text
                        return <Image payload={childPayload} />;
                })
            }
        </Disclosure.Panel>
    </Disclosure>
);

interface RootDirectoryProps {
    payload: RootDirectoryStructure
}

/**
 * RootDirectory is the entry point component that will be used to render the entire File System View hierarchy
 */
const RootDirectory: FC<RootDirectoryProps> = ({ payload }) => (
    <div className="font-mono">
        <DecoratedButton type={NodeType.ROOT}>
            /
        </DecoratedButton>
        <div className="ml-8">
            {
                payload.map((childPayload) => {
                    const computedKey = "/" + childPayload.name;
                    return <Directory payload={childPayload} key={computedKey} refKey={computedKey} />;
                })
            }
        </div>
    </div>
);

export default RootDirectory;