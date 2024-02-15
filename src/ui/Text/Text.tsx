import React, { ReactNode } from "react";

interface IText { 
    children: ReactNode
}

const Text: React.FC<IText> = (props) => { 
    const { children } = props;

    return <span>{children}</span>;
};

export default Text;