'use client'

import React from "react";

interface PrimeiroComponentPorps {
    mensagem?: string;
    mensagemDoBotao?: string;
}

export const PrimeiroComponent: React.FC<PrimeiroComponentPorps> = (props: PrimeiroComponentPorps) => {

    function handleClick() {
        console.log(props.mensagemDoBotao);
    }

    return (
        <div>
        {props.mensagem}
            <br></br>
            <button onClick={handleClick}> Clique aqui</button>
        </div>
    )
}

export const ArrowFunction = () => {
return (
    <h2>Arrow Function</h2>
)
}