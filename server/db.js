import { createPool } from "mysql2/promise";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "./config";


export const pool = createPool({
    host:DB_HOST,
    user:DB_USER,
    port:DB_PORT,
    password:DB_PASSWORD,
    database:DB_NAME,
})

/*export const pool = createPool({
    host:'containers-us-west-67.railway.app',
    user:'root',
    port:'5724',
    password:'T2z5Apsa0mGX61uLjDBa',
    database:'railway',
})*/