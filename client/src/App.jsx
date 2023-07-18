import { Route,Routes } from 'react-router-dom';

import './App.css'
import Navbar from './components/navbar';
import { TaskcontextProvider } from './context/taskcontext';
import { Notfound } from './pages/notfound.jsx';
import { Taskform } from './pages/taskform.jsx';
import Taskpage  from './pages/taskpage.jsx';




function App() {


  return (

    <TaskcontextProvider>
             <Navbar/>
      <Routes>
         <Route path='/' element={<Taskpage/>}/>
         <Route path='/new' element={<Taskform/>}/>
         <Route path='edit/:id' element={<Taskform/>}/>
         <Route path='*' element={<Notfound/>}/>
      </Routes>

    </TaskcontextProvider>
      
    
    
  );
}

export default App
