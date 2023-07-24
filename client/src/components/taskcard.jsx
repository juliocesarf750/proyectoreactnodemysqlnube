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
        <div className="cards py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-500" key={task.id}>
            <h2>{task.title}</h2>
            <p>{task.descripcion}</p>
            <span>{task.done == 1 ? "✔️":'❌'}</span>
            <span>{task.createAt}</span>
            <div className="cards_botones">
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <button onClick={()=>navigate(`/edit/${task.id}`)}>Edit</button>
            <button onClick={()=>handleDone()}>togle task</button>
                
            </div>
            
        </div>
    );
}