import {  useEffect} from "react";
import { Taskcard } from "../components/taskcard.jsx";
import { useTasks } from "../context/taskcontext.jsx";


function Taskpage () {
    const {tasks, loadTasks} = useTasks();
    useEffect(()=>{
    loadTasks();
    },[])
     
    function renderMain(){
       if(tasks.length===0){
         return <h1>No tasks yet</h1>
       }

        return tasks.map(task =>(
            <Taskcard task={task} key={task.id}/>
        ))
    }


    return(
        <div>
            <h1>
                Tasks
            </h1>
            {renderMain()}
        </div>
    );
}

export default Taskpage