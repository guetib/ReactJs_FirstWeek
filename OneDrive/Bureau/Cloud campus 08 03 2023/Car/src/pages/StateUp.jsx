import { useState } from "react";
import Form from "../components/StateUp/Form";
import Screen from "../components/StateUp/Screen";

const StateUp = () => {

    const [inputName, setInputName] = useState('')

    return (
        <div>
            <Form inputName={inputName} />
            <Screen inputName={inputName} setInputName={setInputName} />
        </div>
    );
};

export default StateUp;