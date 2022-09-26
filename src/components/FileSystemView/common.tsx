import { FC, PropsWithChildren, ReactNode } from "react";
import { AiOutlineFile, AiOutlineFolder, AiOutlineFolderOpen, AiOutlineRight } from "react-icons/ai";

export enum NodeType {
    FILE = "file",
    DIR = "directory",
    ROOT = "root"
}

type NodeTypeIconMapping = {
    [key in NodeType.FILE]: {
        icon: ReactNode
    };
} & {
    [key in NodeType.DIR]: {
        open: ReactNode,
        closed: ReactNode,
    };
} & {
    [key in NodeType.ROOT]: {
        icon: ReactNode
    }
}

const nodeTypeIconMapping: NodeTypeIconMapping = {
    [NodeType.FILE]: {
        icon: <AiOutlineFile size="1.25rem" />
    },
    [NodeType.DIR]: {
        open: <AiOutlineFolderOpen size="1.25rem" />,
        closed: <AiOutlineFolder size="1.25rem" />
    },
    [NodeType.ROOT]: {
        icon: <AiOutlineRight size="1.25rem" />
    }
};

interface DecoratedButtonProps {
    state?: boolean,
    type: NodeType
}

const DecoratedButton:FC<PropsWithChildren<DecoratedButtonProps>> = ({ children, state = true, type }) => {
    const className = "inline-flex items-center";

    if (type === NodeType.DIR)
        return (
            <h3 className={className}>
                {state ? nodeTypeIconMapping[type].open : nodeTypeIconMapping[type].closed}
                <p>{children} </p>
            </h3>
        );
    else if (type === NodeType.FILE)
        return (
            <h3 className={className}>{nodeTypeIconMapping[type].icon} {children}</h3>
        );
    else if (type === NodeType.ROOT)
        return (
            <h3 className={className}>
                {nodeTypeIconMapping[type].icon} 
                <p>{children}</p>
            </h3>
        );
    else 
        return (
            <h3 className={className}>{children}</h3>
        );
};

export default DecoratedButton;