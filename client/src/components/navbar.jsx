import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="navbar">
            <div className="navbar_contenedor">

            
            <div className="navbar_logo">
               <h1>react My</h1> 
             </div>
           
            <div className="navbar_navegacion">
                <ul>
                    <li>
                      <Link className="navbar_navegacion_link" to="/">HOME</Link>
                    
                    </li>
                    <li>
                       <Link className="navbar_navegacion_link" to="new">create task</Link>
                     </li>
                </ul>
            </div>
            </div>
        </div>
        
    );
}

export default Navbar;