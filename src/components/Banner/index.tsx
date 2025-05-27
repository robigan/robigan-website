import { FC, PropsWithChildren, useState } from "react";

type BannerProps = PropsWithChildren & { className?: string };

const Banner: FC<BannerProps & { id: string }> = ({ children, className, id }) => {
    const [isClosed, setIsClosed] = useState(false);

    return (
        <div className={"flex justify-between flex-nowrap min-h-min max-h-[20%] hover:max-h-full focus:max-h-full z-[999] m-2 rounded-lg w-auto bg-red-600 bg-opacity-85 pl-2 " + (className ?? "") + (isClosed ? " hidden" : "")}>
            {children}
            <div className="flex items-center">
                <button className="p-3 ml-2" onClick={() => setIsClosed(true)}>
                    <span>X</span>
                </button>
            </div>
        </div>
    );
};

const Content: FC<BannerProps> = ({ children, className }) => (
    <div className={"w-full my-1 overflow-y-hidden text-ellipsis " + (className ?? "")}>
        {children}
    </div>
);

export default Object.assign(Banner, { Content });
