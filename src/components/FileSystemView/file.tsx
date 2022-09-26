import { FC, ReactNode, useState } from "react";
import { NodeType } from "./common";
import { Dialog } from "@headlessui/react";

export interface FileStructure {
    type: NodeType.FILE,
    name: string,
    contents?: ReactNode,
}