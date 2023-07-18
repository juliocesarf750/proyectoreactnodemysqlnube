import { pool } from "../db.js";



export const getTasks = async(req , res) => {
   try{
      const [result] = await pool.query('select * from tasks order by createAt asc');
      res.json(result);
   }catch{
      return res.status(500).json({message:'error.message'});
   }

   
}

export const getTask = async(req , res) => {
   try{
      const [result] = await pool.query('select * from tasks where tasks.id = ?',[req.params.id,]);
      if(result.length == 0)
          return res.status(404).json({message:'task not found'});
       res.json(result[0]);
   }catch{
      return res.status(500).json({message:'error.message'});
   }
  
 }

export const createTask = async(req , res) => {
   try{
      const {title, descripcion} = req.body;
      const [result] = await pool.query('insert into tasks(title,descripcion) VALUES (?, ?)',[title,descripcion]);
      
       res.json({
         id: result.insertId,
         title,
         descripcion,
       })
   }catch{
      return res.status(500).json({message:'error.message'});
   }
   
 }

 export const updateTasks = async (req, res) => {
   try {
      const [result] = await pool.query('UPDATE tasks SET ? WHERE id = ?', [req.body, req.params.id]);
      res.json(result);
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
}


export const deleteTask = async(req , res) => {
   try{
      const [result] = await pool.query('delete from tasks where id = ? ',[req.params.id]);

      if(result.affectedRows == 0)
         return res.status(404).json({message:'task no found'});
   
      return res.sendStatus(204);
   }catch{
      return res.status(500).json({message:'error.message'});
   }
   
    
 }