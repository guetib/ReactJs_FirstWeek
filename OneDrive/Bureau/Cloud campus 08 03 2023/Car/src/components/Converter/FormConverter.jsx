import { useState } from "react";

const FormConverter = ({ setResult }) => {


    const [inputEur, setInputEur] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        setResult(Number(inputEur))
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={e => setInputEur(e.target.value)}
                    value={inputEur}
                    type="number"
                />
                <button type="submit">Convertir</button>
            </form>
        </div>
    );
};
export default FormConverter;