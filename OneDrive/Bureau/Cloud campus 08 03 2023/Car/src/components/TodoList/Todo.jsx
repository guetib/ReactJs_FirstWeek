import "./Todo.css";

const Todo = ({ task, deleteTask, index }) => {
    return (
        <div className="todo">
            {task}
            <button onClick={() => { deleteTask(index) }}>X</button>
        </div>

    );
};
export default Todo
