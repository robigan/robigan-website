import { StaticImageData } from "next/image";
import { FC } from "react";
import { AiOutlineFileImage } from "react-icons/ai";
import { NodeType } from "./common";
import { BaseFile, BaseFileStructure } from "./file";
import NextImage from "next/image";

export interface ImageStructure extends BaseFileStructure {
    type: NodeType.IMAGE,
    contents: StaticImageData
}

const Image: FC<{ payload: ImageStructure }> = ({ payload }) => (
    <BaseFile payload={payload} icon={AiOutlineFileImage}>
        <div className="w-full h-[85vh] rounded-xl overflow-hidden relative">
            <NextImage src={payload.contents} layout="fill" objectFit="contain" />
        </div>
    </BaseFile>
);

export default Image;