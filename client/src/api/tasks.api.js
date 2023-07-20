import axios from 'axios';

export const getTaskRequest = async() =>
        await axios.get('http://localhost:3000/tasks');


export const createTasksRequest = async(task) =>
        await axios.post('http://localhost:3000/tasks',task);

export const deleteTaskRequest = async (id) =>
       await axios.delete(`http://localhost:3000/tasks/${id}`);

export const getTasksRequest = async(id)=>
     await axios.get(`http://localhost:3000/tasks/${id}`);

export const updateTaskRequest = async (task,id) =>
       await axios.put(`http://localhost:3000/tasks/${id}`,task);

export const toggleTaskDoneRequest = async(id,Done)=>
      await axios.put(`http://localhost:3000/tasks/${id}`,{ Done},);