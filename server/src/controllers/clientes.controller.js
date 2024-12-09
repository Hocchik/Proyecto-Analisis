import { getConnection } from "../database/connection.js";
import sql from 'mssql'

//Basics APIs

export const getClientes = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('SELECT * FROM Clientes')
        res.json(result)
    } catch (error) {
        console.log(error)
    }
}

export const getCliente = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('ClienteID',  sql.Int, req.params.id)
        .query('Select * from Clientes where ClienteID = @ClienteID')
        res.json(result);
        console.log(result); 
    } catch (error) {
        console.log(error)
    }
}

export const createCliente = async (req, res) => {
    try {
        console.log(req.body);
        const pool = await getConnection();
        const result = await pool.request()
        .input('Nombre', sql.NVarChar, req.body.Nombre)
        .input('Apellido', sql.NVarChar, req.body.Apellido)
        .input('Correo', sql.NVarChar, req.body.Correo)
        .input('Telefono', sql.NVarChar, req.body.Telefono)
        .input('Contrasena', sql.NVarChar, req.body.Contrasena)
        .query('Insert into Clientes (Nombre, Apellido, Correo, Telefono, Contrasena) values (@Nombre, @Apellido, @Correo, @Telefono, @Contrasena); Select SCOPE_IDENTITY() as ClienteID')
        console.log(result)
        res.json({
            id: result.recordset[0].ClienteID,
            Nombre: req.body.Nombre,
            Apellido: req.body.Apellido,
            Correo: req.body.Correo,
            Telefono: req.body.Telefono
        })
    } catch (error) {
        console.log(error)
    }
}

export const updateCliente = async (req, res) => {
    try {
        console.log(req.body)
        const pool = await getConnection();
        const result = await pool.request()
        .input('ClienteID', sql.Int, req.params.id)
        .input('Nombre', sql.NVarChar, req.body.Nombre)
        .input('Apellido', sql.NVarChar, req.body.Apellido)
        .input('Correo', sql.NVarChar, req.body.Correo)
        .input('Telefono', sql.NVarChar, req.body.Telefono)
        .input('Contrasena', sql.NVarChar, req.body.Contrasena)
        .query('Update Clientes set Nombre = @Nombre, Apellido = @Apellido, Correo = @Correo, Telefono = @Telefono, Contrasena = @Contrasena where ClienteID = @ClienteID')
        if(result.rowsAffected[0] === 0){
            return res.status(404).json({message:'Cliente no encontrado'})
        }
        res.json({
            ClienteID: req.params.id,
            Nombre: req.body.Nombre,
            Apellido: req.body.Apellido,
            Correo: req.body.Correo,
            Telefono: req.body.Telefono,
            Contrasena: req.body.Contrasena
        })
    } catch (error) {
        console.log(error)
    }
}

export const deleteCliente = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('ClienteID', sql.Int, req.params.id)
        .query('Delete from Clientes where ClienteID = @ClienteID')
        console.log(result)
        if(result.rowsAffected[0] === 0){
            return res.status(404).json({message:'Cliente no encontrado'})
        }
        return res.json({message:'Cliente eliminado con exito'})
    } catch (error) {
        console.log(error)
    }
}
