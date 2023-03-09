import { useState } from "react"
import Rect from "../components/Background/Rect"

const Background = () => {

    const [inputColor, setInputColor] = useState("")
    const [backgroundColor, setbackground] = useState("green")

    const handleChange = e => {
        setInputColor(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        setbackground(inputColor)
        setInputColor("")
    }

    return (



        <div>
            <form onSubmit={handleSubmit} >
                <input type="text" onChange={handleChange} value={inputColor} />
                <button type="submit">Changer Color</button>
            </form>

            < Rect bgcolor={backgroundColor} />
        </div>
    )
}

export default Background

