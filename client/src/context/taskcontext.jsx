
import { createContext, useContext, useState } from "react";
import { createTasksRequest, deleteTaskRequest, getTaskRequest, getTasksRequest,updateTaskRequest,toggleTaskDoneRequest } from "../api/tasks.api";

export const Taskcontext = createContext();

export const useTasks = () =>{
   const context = useContext(Taskcontext);
   if(!context){
    throw new Error("useTasks must be used whitehin a TaskContexProvide");

   }

   return context;
}
 
export const TaskcontextProvider = ({children}) => {
    const [tasks, setTasks] = useState([]);

    async function loadTasks(){
        
        const response = await getTaskRequest();
        setTasks(response.data);
     }

    const deleteTask = async(id)=>{
         
        try{
            const response  = await deleteTaskRequest(id);
            setTasks(tasks.filter(tasks => tasks.id !== id ));
            console.log(response);
        }catch(error){
           console.error(error);
        }

    }

    const createTask = async(task) =>{
        
        try{
             await createTasksRequest(task);
            
            
        }catch(error){
            console.error(error);
        }
    }

    const getTasks = async(id)=>{
        try{
            const response = await getTasksRequest(id);
            return response.data
        }catch(error){
          console.error(error);
        }
    }

    const updateTask = async(task,id)=>{
        try{
            const response = await updateTaskRequest(task,id);
            console.log(response);
        }catch(error){
         console.Error(error)
        }
         
    }

    const toggleTaskDone = async(id)=>{
     try{
        const taskFound = tasks.find((tasks) => tasks.id === id);
        await toggleTaskDoneRequest(id,taskFound.done === 0 ?true:false);

        setTasks(tasks.map(task => task.id === id ? task.done = task.done === 0 ? 1 : 0 : tasks.done));
     }catch(error){
          console.error(error);
     }
        
    }

    

    return (<Taskcontext.Provider value={{tasks, loadTasks, deleteTask, createTask, updateTask,getTasks,toggleTaskDone}}>
                {children}
            </Taskcontext.Provider>);
};