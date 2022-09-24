import { FC, PropsWithChildren } from "react";

const ModalBackground: FC<PropsWithChildren> = ({ children }) => (
    <div className="absolute top-0 left-0 w-screen h-screen bg-opacity-95 bg-black flex justify-center items-center z-40">
        {children}
    </div>
);

export default ModalBackground;