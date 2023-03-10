import { useState } from "react";
import FormTodoList from "../components/TodoList/FormTodoList";
import Todos from "../components/TodoList/Todos";

const TodoList = () => {

    const [tasks, setTasks] = useState([
        'Apprendre JS',
        'Apprendre Reat.js'
    ])

    const deleteTask = (index) => {
        const updateTasks = [...tasks]
        updateTasks.splice(index, 1)
        setTasks(updateTasks)
    }

    return (
        <div>
            <h1>TodoList</h1>
            <FormTodoList tasks={tasks} setTasks={setTasks} />
            <Todos tasks={tasks} deleteTask={deleteTask} />

        </div>
    );
};

export default TodoList;