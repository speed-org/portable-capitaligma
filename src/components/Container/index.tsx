import React from "react";

export interface IContainer extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export const Container = ({ children, style, ...props }: IContainer) => {
    return (
        <div style={{ ...style }} {...props}>
            {children}
        </div>
    );
};