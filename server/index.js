import express  from "express";
import { PORT } from "./config.js";
import indexRouters from './routers/index.routers.js';
import taskRouters from './routers/tasks.routers.js';
import cors from 'cors';
const app = express();
//con cualquier direccion
//app.use(cors());

//con una direccion espesifica
app.use(cors());

app.use(express.json());
app.use(taskRouters);

app.listen(PORT);
console.log(`Server is running on port ${PORT}`);