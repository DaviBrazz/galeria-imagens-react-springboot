import React from "react";

interface InputTextProps {
    style?: string;
    onChange?:  (event: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string ;
    id?: string;
}

export const InputText: React.FC<InputTextProps> = ({onChange, style, placeholder, id} : InputTextProps) => {
    return (
        <input id={id} type="text" onChange={onChange} className={`${style} border px-3 py-2 rounded-lg text-gray-900`} placeholder={placeholder}/>
    )

}