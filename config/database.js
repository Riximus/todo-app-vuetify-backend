import {createConnection} from "mysql2";
import * as dotenv from 'dotenv'
dotenv.config()

export function ConnectDB(){
    const connection = createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB
    })

    connection.connect((error) => {
        if (error) throw error
        console.log('Database connected')
    })

    return connection
}
