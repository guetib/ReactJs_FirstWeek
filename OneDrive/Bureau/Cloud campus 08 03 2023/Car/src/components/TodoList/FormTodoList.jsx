import { useState } from "react";

const FormTodoList = ({ tasks, setTasks }) => {


    const [inputTask, setInputTask] = useState([])

    const handleSubmit = e => {
        e.preventDefault()
        setTasks(oldState => [...oldState, inputTask])
        setInputTask('')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={e => setInputTask(e.target.value)}
                    value={inputTask}
                    type="text"
                />
                <button type="submit">Ajouter une Tahe</button>
            </form>
        </div>
    );
};
export default FormTodoList;