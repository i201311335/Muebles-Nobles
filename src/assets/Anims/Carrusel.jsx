import { useState, useEffect } from "react";

export default function Carrusel({ sofa, intervalo}) {
    const [state, setState] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setState((prev) => (prev + 1) % sofa.length);
        }, intervalo);

        return () => clearInterval(id);
    }, [intervalo, sofa.length]);

    return (
        <img src={sofa[state]}></img>
        
    )
}