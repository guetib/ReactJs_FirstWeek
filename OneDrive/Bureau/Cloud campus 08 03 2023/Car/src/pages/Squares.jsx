import { useState } from "react";
import Square from "../components/Squares/Square"

const Squares = () => {

    const [backgroundColor, setBackroundColor] = useState('blue')
    const handleClick = () => {
        setBackroundColor('green')
    }

    return (
        <div>
            <Square color={backgroundColor} />
            <Square color={backgroundColor} />
            <Square color={backgroundColor} />
            <button onClick={handleClick}>Modifier La couleur</button>
        </div>
    );
};

export default Squares;
