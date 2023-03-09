
import { useState } from "react"

const Formulaires = () => {

    const [inputName, setInputName] = useState("")
    const [inputStacks, setInputStacks] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        console.log(inputName, inputStacks)
        setInputName("")
        setInputStacks("")
    }

    const handleNameChange = e => {
        setInputName(e.target.value)
    }
    const handleStacksChange = e => {
        setInputStacks(e.target.value)
    }

    return (
        <div>
            <h1>Formulaire - {inputName} </h1>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange} value={inputName} placeholder='Name' type="text" />
                <input onChange={handleStacksChange} value={inputStacks} placeholder='Stacks' type="text" />
                <button type="submit">Valider {inputName}</button>
            </form>
        </div>
    );
};

export default Formulaires;