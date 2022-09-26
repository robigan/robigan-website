import { FC, ReactNode, useState } from "react";
import DecoratedButton, { NodeType } from "./common";
import { Dialog } from "@headlessui/react";
import { AiOutlineFile } from "react-icons/ai";

export interface FileStructure {
    type: NodeType.FILE,
    name: string,
    contents?: ReactNode,
}

interface FileProps {
    payload: FileStructure
}

/**
 * The File component is the component that renders all files in the File System View, its payload can include content that will be displayed to a user, just like a normal file does
 */
const File: FC<FileProps> = ({ payload }) => {
    const [isOpen, setIsOpen] = useState(false);
    console.log("File is " + isOpen);

    return (
        <>
            <button type="button" onClick={() => setIsOpen(true)} className="m-1 block">
                <DecoratedButton state={isOpen} type={NodeType.FILE}>
                    &#8200;{payload.name}
                </DecoratedButton>
            </button>

            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="z-40 fixed inset-0">
                <div className="fixed inset-0 bg-black opacity-80" />

                <Dialog.Panel className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black-light rounded-3xl p-4 min-h-[50vh] min-w-[60vw] max-h-[85vh] flex flex-col">
                    <Dialog.Title className="mb-8 mt-2 ml-2 flex items-center"><AiOutlineFile size="1.75rem" />&#8200;{payload.name}</Dialog.Title>

                    <div className="w-full flex-grow bg-black overflow-y-auto p-2 rounded-xl">
                        {payload.contents}
                    </div>
                </Dialog.Panel>
            </Dialog>
        </>
    );
};

export default File;