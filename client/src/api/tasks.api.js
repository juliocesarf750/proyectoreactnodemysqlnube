import axios from 'axios';

export const getTaskRequest = async() =>

        await axios.get('https://wild-sun-3186.fly.dev/tasks');
        //await axios.get('http://localhost:3000/tasks');


export const createTasksRequest = async(task) =>
        await axios.post('https://wild-sun-3186.fly.dev/tasks',task);
        //await axios.post('http://localhost:3000/tasks',task);

export const deleteTaskRequest = async (id) =>
       await axios.delete(`https://wild-sun-3186.fly.dev/tasks/${id}`);
       //await axios.delete(`http://localhost:3000/tasks/${id}`);

export const getTasksRequest = async(id)=>
     await axios.get(`https://wild-sun-3186.fly.dev/tasks/${id}`);
     //await axios.get(`http://localhost:3000/tasks/${id}`);


export const updateTaskRequest = async (task,id) =>
       await axios.put(`https://wild-sun-3186.fly.dev/tasks/${id}`,task);
       //await axios.put(`http://localhost:3000/${id}`,task);

export const toggleTaskDoneRequest = async(id,Done)=>
     await axios.put(`https://wild-sun-3186.fly.dev/tasks/${id}`,{ Done},);
     //await axios.put(`http://localhost:3000/${id}`,{ Done},);