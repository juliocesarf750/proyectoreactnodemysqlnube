import { useNavigate } from "react-router-dom";
import { useTasks } from "../context/taskcontext";

export const Taskcard = ({task}) =>{
    const {deleteTask,toggleTaskDone} = useTasks();
    const navigate = useNavigate()
    
    const handleDone = async ()=>{
       await toggleTaskDone(task.id);
       console.log(task.id);
    }
    
    return(
        <div>
            <h2>{task.title}</h2>
            <p>{task.descripcion}</p>
            <span>{task.done == 1 ? "✔️":'❌'}</span>
            <span>{task.createAt}</span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <button onClick={()=>navigate(`/edit/${task.id}`)}>Edit</button>
            <button onClick={()=>handleDone()}>togle task</button>
        </div>
    );
}