import { FC, PropsWithChildren } from "react";

const InnerTileOverlay: FC<PropsWithChildren> = ({ children }) => (
    <div className="absolute h-full w-full z-10 opacity-0 hover:opacity-90 bg-black-light flex justify-center items-center transition-all duration-300">
        <div className="h-1/4 w-1/4 flex justify-center items-center">
            {children}
        </div>
    </div>
);

const InnerTileContent: FC<PropsWithChildren> = ({ children }) => (
    <div className="rounded-[50px] bg-black-lighter flex justify-center items-center h-full w-full">
        <div className="h-1/3 w-1/3 flex justify-center items-center">
            {children}
        </div>
    </div>
);

const InnerTile: FC<PropsWithChildren> = ({ children }) => (
    <div className="aspect-square relative">
        {children}
    </div>
);

const TileCaption: FC<PropsWithChildren> = ({ children }) => (
    <p className="w-fit mx-auto h-4 mb-2 text-[1em] md:text-[1.1em]">{children}</p>
);

const Tile: FC<PropsWithChildren> = ({ children }) => (
    <span className="hover:underline active:underline">
        {children}
    </span>
);

const OuterTile: FC<PropsWithChildren> = ({ children }) => (
    // `basis-1/2 lg:basis-1/4 lg:h-1/2 flex items-center` is proposed but the entries get too big on smaller devices
    <div className="basis-1/3 h-1/2 flex items-center"> 
        <div className="w-3/4 lg:w-1/2 mx-auto">
            {children}
        </div>
    </div>
);

export default Object.assign(Tile, { OuterTile, TileCaption, InnerTile, InnerTileContent, InnerTileOverlay });