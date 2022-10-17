import { Dialog } from "@headlessui/react";
import { FC, PropsWithChildren, ReactNode, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";
import Tile from "../Tile";

type ModalTileProps = {
    /**
     * Title string for the text below the icon
     */
    title: string,
    modalContent?: ReactNode,
}

const ModalTile: FC<PropsWithChildren<ModalTileProps>> = ({ title, children, modalContent }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Tile.OuterTile4x2>

            <a type="button" onClick={() => setIsOpen(true)} className="cursor-pointer" tabIndex={0}>
                <Tile>
                    <Tile.InnerTile>
                        <Tile.InnerTileOverlay>
                            <BsArrowRightShort />
                        </Tile.InnerTileOverlay>
                        <Tile.InnerTileContent>
                            {children}
                        </Tile.InnerTileContent>
                    </Tile.InnerTile>
                    <Tile.TileCaption>{title}</Tile.TileCaption>
                </Tile>
            </a>

            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="z-40 fixed inset-0">
                <div className="fixed inset-0 bg-black opacity-80" />

                <Dialog.Panel className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black-light rounded-3xl p-4 min-h-[50vh] max-h-[85vh] min-w-[45vw] max-w-[95vw] lg:max-w-[70vw] flex flex-col">
                    <div className="flex justify-between mb-8 mt-2 mx-4">
                        <Dialog.Title className="mr-12 whitespace-nowrap text-[4vw] md:text-4xl">
                            {title}
                        </Dialog.Title>

                        <button type="button" onClick={() => setIsOpen(false)}>
                            <AiOutlineClose size="1.75rem" />
                        </button>
                    </div>

                    <div>{modalContent}</div>
                </Dialog.Panel>
            </Dialog>
        </Tile.OuterTile4x2>
    );
};

export default ModalTile;