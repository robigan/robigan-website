import { FC, PropsWithChildren } from "react";

const Timeline: FC<PropsWithChildren> = ({ children }) => (
    <div className="pb-4 relative flex">
        <div className="pt-2">
            <div className="h-full w-1 bg-primary flex-none rounded-full mx-4 relative">
                <div className="absolute w-4 h-4 left-1/2 -translate-x-1/2 rounded-full bg-primary"></div>
            </div>
        </div>

        <div className="flex-auto pb-16">
            {children}
        </div>
    </div>
);

export default Timeline;