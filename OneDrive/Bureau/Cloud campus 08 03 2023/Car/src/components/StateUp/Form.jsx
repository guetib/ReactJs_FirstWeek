import { useState } from "react";

const Form = ({ inputName, setInputName }) => {
    const handleSubmit = e => {
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={e => setInputName(e.target.value)}
                    value={inputName}
                    type="text"
                />
                <button type="submit">Enregistrer</button>
            </form>
        </div>
    )
};
export default Form;