import {getConnection,sql} from '../database'
import { queries } from '../queries';


export const getParams = async (req, res) => {
    try{
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllParametros);
        console.log(result)
        res.send(result.recordset);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}

export const getParam = async (req, res) => {
    const {id} = req.params;
    try{
        const pool = await getConnection();
        const result = await pool.request().input("Id",id).query(queries.getParametroById);
        console.log(result);
        res.send(result.recordset);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
}
 
export const getParamCount = async (req, res) => {
    
    try{
        const pool = await getConnection();
        const result = await pool.request().query(queries.getTotalParametros);
        res.json(result.recordset[0]['']);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}

export const createParam = async (req, res) => {
    
    const {parametro, descripcion} = req.body
    if (parametro == null){
        return res.status(400).json({msg:'Bad Request. Por favor ingrese parametro'})
    }

    try{
        const pool = await getConnection();

        await pool.request().input("parametro", sql.VarChar, parametro).input("descripcion", sql.Text, descripcion).query(queries.addNewParametro)

        res.json({parametro,descripcion});   
    }catch(error){
        res.status(500);
        res.send(error.message);
    }

    
}

export const deleteParam = async (req, res) => {
    const {id} = req.params;
    try{
        const pool = await getConnection();
        const result = await pool.request().input("Id",id).query(queries.deleteParametro);
        res.sendStatus(204);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
}

export const updateParam = async (req, res) => {
    const {id} = req.params;
    const {parametro, descripcion} = req.body
    if (id ==null || parametro==null || parametro==null){
        return res.status(400).json({msg:'Bad Request. Por favor ingrese todos los campos'})
    }

    try{
        const pool = await getConnection();
        await pool.request().input("parametro", sql.VarChar, parametro).input("descripcion", sql.Text, descripcion).input('id',sql.Int,id).query(queries.updateParametro)
        res.json({parametro,descripcion});  
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}