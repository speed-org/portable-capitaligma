import React from "react";
import "./index.css"

interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export const Button = ({children, style,...props}: IButton) => {
    return (
        <button
            style={{...style}}
            {...props}
            className="Component:Button"
        >{children}</button>
    )
}