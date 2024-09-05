import React from "react";

interface ButtonProps {
    style?: string
    label?: string
    onClick?: (event: any) => void;
}

export const Button: React.FC<ButtonProps> = ({ onClick, style, label} : ButtonProps ) => {
    return (
        <button className={`${style} text-white px-4 p-2 rounded-lg`} onClick={onClick}>
            {label}
        </button>
    )
}