import { useNavigate } from "react-router-dom";
import { deleteTaskRequest } from "../api/tasks.api";
import { useTasks } from "../context/taskcontext";

export const Taskcard = ({task}) =>{
    const {deleteTask, updateTask} = useTasks();
    const navigate = useNavigate()
    
    
    return(
        <div>
            <h2>{task.title}</h2>
            <p>{task.descripcion}</p>
            <span>{task.done == 1 ? "✔️":'❌'}</span>
            <span>{task.createAt}</span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <button onClick={()=>navigate(`/edit/${task.id}`)}>Edit</button>
            
        </div>
    );
}