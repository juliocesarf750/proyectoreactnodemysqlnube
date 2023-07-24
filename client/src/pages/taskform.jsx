import { Formik,Form } from "formik";
import { useEffect, useState } from "react";
import { useParams, useNavigate} from "react-router-dom";

import { useTasks } from "../context/taskcontext.jsx";



export const Taskform = () =>{
    const {createTask, getTasks,updateTask} = useTasks();
    const [task, setTask] = useState({
        title:'',
        descripcion:'',
    })
    const params = useParams();
    const navigate = useNavigate();
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
        <div className="pagina_formulario">
          <div className="contenedor_formulario">
            <div className="formulario_parrafo py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-500">

            </div>
            <div className="formulario">
            <h1 className="text-3xl">{params.id ? 'Editor de Tareas' : 'Nueva tarea'}</h1>
            <Formik 
                initialValues={task}
                enableReinitialize={true}
                  
             onSubmit={async(values, actions) => {
                if(params.id){
                    await updateTask(values,params.id);
                    navigate('/');
                }else{
                    await createTask(values);
                }
                
               setTask({
                title:'',
                descripcion:'',
               });
               
             }}
            >

             {({handleChange, handleSubmit, values, isSubmitting}) =>(
                <Form className="text-lg" onSubmit={handleSubmit}>
                <h3>Titulo</h3>
                <input type="text" name="title" placeholder="write a title"
                onChange={handleChange}
                value={values.title}
                />

                <h3>Descripción</h3>
                <textarea
                  name="descripcion"
                  rows="3"
                  placeholder="write a description"
                  onChange={handleChange}
                  value={values.descripcion}
                  
                >
                      
                </textarea>
                <button className="py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Saving..." : "Save"}
                </button>
                
            </Form>
             )}                
            </Formik>
            </div>
            </div>
        </div>
    );
}