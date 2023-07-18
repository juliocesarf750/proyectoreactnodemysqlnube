import { Formik,Form } from "formik";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useTasks } from "../context/taskcontext.jsx";



export const Taskform = () =>{
    const {createTask, getTasks,updateTask} = useTasks();
    const [task, setTask] = useState({
        title:'',
        descripcion:'',
    })
    const params = useParams();
    useEffect(()=>{
        const loadTask = async()=>{
            if(params.id){
                const task = await getTasks(params.id);
               setTask({
                title:task.title,
                descripcion:task.descripcion,
               });

             }
             console.log(task);
        
        }

        loadTask();
        
      },[])

  
    return(
        <div>
            <h1>{params.id ? 'Edit task' : 'New task'}</h1>
            <Formik 
                initialValues={task}
                enableReinitialize={true}
                  
             onSubmit={async(values, actions) => {
                if(params.id){
                    await updateTask(values,params.id);
                }else{
                    await createTask(values);
                }
                
                actions.resetForm();
               
             }}
            >

             {({handleChange, handleSubmit, values, isSubmitting}) =>(
                <Form onSubmit={handleSubmit}>
                <label>title</label>
                <input type="text" name="title" placeholder="write a title"
                onChange={handleChange}
                value={values.title}
                />

                <label>descripcion</label>
                <textarea
                  name="descripcion"
                  rows="3"
                  placeholder="write a description"
                  onChange={handleChange}
                  value={values.descripcion}
                >
                      
                </textarea>
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Saving..." : "Save"}
                </button>
            </Form>
             )}                
            </Formik>
        </div>
    );
}