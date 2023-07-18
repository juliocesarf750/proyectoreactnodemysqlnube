import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="navbar">
            <div className="navbar_logo">
               <h1>react My</h1>
             </div>
           
            <div className="navbar_navegacion">
                <ul>
                    <li>
                      <Link to="/">HOME</Link>
                    
                    </li>
                    <li>
                       <Link to="new">create task</Link>
                     </li>
                </ul>
            </div>
        </div>
        
    );
}

export default Navbar;