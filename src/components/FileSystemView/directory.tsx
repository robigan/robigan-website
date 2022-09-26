import { FC } from "react";
import { Disclosure } from "@headlessui/react";
import { FileStructure } from "./file";
import DecoratedButton, { NodeType } from "./common";

export interface DirectoryStructure {
    type: NodeType.DIR,
    name: string,
    children?: Array<DirectoryStructure | FileStructure>,
}

export type RootDirectoryStructure = DirectoryStructure[]

interface DirectoryProps {
    payload: DirectoryStructure,
    refKey: string,
}

const Directory: FC<DirectoryProps> = ({ payload, refKey }) => (
    <Disclosure>
        <Disclosure.Button className="m-1">
            <DecoratedButton state={true} type={payload.type}>
                {payload.name} /
            </DecoratedButton>
        </Disclosure.Button>
        <Disclosure.Panel className="ml-8">
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
    </>
);

export default RootDirectory;