import React, { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }: ContainerProps) => {
    return <section className="container">{children}</section>;
};
