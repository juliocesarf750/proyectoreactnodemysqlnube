import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="navbar" >
            <div className="navbar_contenedor">

            
            <div className="navbar_logo text-3xl ">
               <h1>RNMF</h1> 
             </div>
           
            <div className="navbar_navegacion " style={{fontSize:"18px"}}>
                <ul>
                    <li>
                      <Link className="navbar_navegacion_link" to="/">Tareas</Link>
                    
                    </li>
                    <li>
                       <Link className="navbar_navegacion_link" to="new">Crear tarea</Link>
                     </li>
                </ul>
            </div>
            </div>
        </div>
        
    );
}

export default Navbar;