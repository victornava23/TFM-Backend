import sql from 'mssql';
import {dbsettings} from './config'


export async function getConnection(){
    try{
        const pool = await sql.connect(dbsettings)
        return pool
    } catch(error){
        console.log(error)
    } 
}

export {sql}
//getConnection();