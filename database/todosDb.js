import {ConnectDB} from "../config/database.js";

export async function InsertTodo(id, task, date, isDone){
    let con = ConnectDB()
    let response

    console.log('-> DB - Adding new Todo')
    try{
        response = await con.promise().query(`CALL spInsertTodo(?,?,?,?)`, [id, task, date, isDone])
    }catch (error){
        console.log(error)
    }
    con.end()
    console.log('++ DB - Added new Todo')
    return response
}

export async function UpdateTodoDone(id, isDone){
    let con = ConnectDB()
    let response

    console.log('-> DB - Updating Todo Done')
    try{
        response = await con.promise().query(`CALL spUpdateTodoDone(?,?)`, [id, isDone])
    }catch (error){
        console.log(error)
    }
    con.end()
    console.log('^^ DB - Updated Todo Done')
    return response
}

export async function DeleteTodo(id){
    let con = ConnectDB()
    let response

    console.log('-> DB - Deleting Todo')
    try{
        response = await con.promise().query(`CALL spDeleteTodo(?)`, [id])
    }catch (error){
        console.log(error)
    }
    con.end()
    console.log('<> DB - Deleted Todo')
    return response
}
