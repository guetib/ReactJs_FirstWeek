import { useState } from "react"

const Computer = () => {

    const [inputName, setInputName] = useState("")
    const [computer, setComputer] = useState()

    const handleChange = e => {
        setInputName(e.target.value)
    }


    const handleSubmit = e => {
        e.preventDefault()
        setComputer(inputName)
        setInputName("")
    }

    return (
        <div>
            <h1>{computer}</h1>
            <form onSubmit={handleSubmit}>
                <h1>Formulaire</h1>
                <input type="text" placeholder="name" onChange={handleChange} value={inputName} />
                <button type="submit">Valider</button>
            </form>
        </div>
    )
}

export default Computer