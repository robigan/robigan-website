import Image from "next/image";
import { FC } from "react";
import { BackgroundImageProps } from "../../lib/BackgroundImageTypes";

const BackgroundImage:FC<BackgroundImageProps> = (props) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full select-none" style={{ zIndex: "-10" }}>
            <Image alt="" {...props}></Image>
        </div>
    );
};

export default BackgroundImage;