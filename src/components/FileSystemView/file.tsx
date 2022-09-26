import { FC, PropsWithChildren, ReactNode, useState } from "react";
import DecoratedButton, { NodeType } from "./common";
import { Dialog } from "@headlessui/react";
import { AiOutlineClose, AiOutlineFile } from "react-icons/ai";
import { IconType } from "react-icons/lib";

export interface BaseFileStructure {
    type: NodeType,
    name: string
}

export const BaseFile: FC<PropsWithChildren<{ payload: BaseFileStructure, icon: IconType }>> = ({ payload, children, icon: Icon }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button type="button" onClick={() => setIsOpen(true)} className="m-1 block">
                <DecoratedButton state={isOpen} type={payload.type}>
                    &#8200;{payload.name}
                </DecoratedButton>
            </button>

            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="z-40 fixed inset-0 font-mono">
                <div className="fixed inset-0 bg-black opacity-80" />

                <Dialog.Panel className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black-light rounded-3xl p-4 min-h-[50vh] max-h-[85vh] flex flex-col">

                    <div className="flex justify-between mb-8 mt-2 ml-2 mr-4">

                        <Dialog.Title className="flex items-center mr-12">
                            <Icon size="1.75rem" />&#8200;{payload.name}
                        </Dialog.Title>

                        <button type="button" onClick={() => setIsOpen(false)}>
                            <AiOutlineClose size="1.75rem" />
                        </button>

                    </div>

                    {children}

                </Dialog.Panel>
            </Dialog>
        </>
    );
};

export interface FileStructure extends BaseFileStructure {
    type: NodeType.FILE,
    contents?: ReactNode,
}

/**
 * The File component is the component that renders all files in the File System View, its payload can include content that will be displayed to a user, just like a normal file does
 */
const File: FC<{ payload: FileStructure }> = ({ payload }) => (
    <BaseFile payload={payload} icon={AiOutlineFile}>
        <div className="w-full flex-grow bg-black overflow-y-auto p-2 rounded-xl min-w-[65vw]">
            {payload.contents}
        </div>
    </BaseFile>
);

export default File;