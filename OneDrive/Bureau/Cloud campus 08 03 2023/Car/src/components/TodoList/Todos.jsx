
import Todo from "./Todo";

const Todos = ({ tasks, deleteTask }) => {

    return (
        <div>
            {
                tasks.map((task, i) => (
                    <Todo key={i} index={i} task={task} deleteTask={deleteTask} />
                ))
            }
        </div>

    );
};
export default Todos;
