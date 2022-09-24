import { FC, PropsWithChildren } from "react";

const ModalInterface: FC<PropsWithChildren> = ({ children }) => (
    <div className="rounded-2xl bg-black-light p-8 min-w-[60vw] min-h-[50vh]">
        {children}
    </div>
);

export default ModalInterface;