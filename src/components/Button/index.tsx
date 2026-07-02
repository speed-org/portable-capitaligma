import React from "react";
import "./index.css"

interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    onClick: () => void;
}

export const Button = ({children, onClick, className, style, title}: IButton) => {
    return (
        <button
            className={"Component:Button "+className}
            onClick={() => onClick()}
            title={title}
            style={style}
        >{children}</button>
    )
}