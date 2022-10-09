import { FC, PropsWithChildren } from "react";
import { AiOutlineFile, AiOutlineFileImage, AiOutlineFolder, AiOutlineFolderOpen, AiOutlineRight } from "react-icons/ai";

export enum NodeType {
    FILE = "file",
    DIR = "directory",
    ROOT = "root",
    IMAGE = "image"
}

interface DecoratedButtonProps {
    state?: boolean,
    type: NodeType
}

/**
 * DecoratedButton is the component used to render the entry for the presence of a node in the File System View hierarchy
 */
const DecoratedButton:FC<PropsWithChildren<DecoratedButtonProps>> = ({ children, state = true, type }) => {
    const className = "flex items-center select-none";
    const size = "1.25rem";
    const child = <span className="select-text">{children}</span>;

    if (type === NodeType.DIR)
        return (
            <h3 className={className}>
                {state ? <AiOutlineFolderOpen size={size} /> : <AiOutlineFolder size={size} />}
                &nbsp;{child}
            </h3>
        );
    else if (type === NodeType.FILE)
        return (
            <h3 className={className}>
                <AiOutlineFile size={size} />
                &nbsp;{child}
            </h3>
        );
    else if (type === NodeType.ROOT)
        return (
            <h3 className={className}>
                <AiOutlineRight size={size} />
                &nbsp;{child}
            </h3>
        );
    else if (type === NodeType.IMAGE)
        return (
            <h3 className={className}>
                <AiOutlineFileImage size={size} />
                &nbsp;{child}
            </h3>
        );
    else
        return (
            <h3 className={className}>{child}</h3>
        );
};

export default DecoratedButton;