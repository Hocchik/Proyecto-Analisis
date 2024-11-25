import { getConnection } from "../database/connection.js";
import sql from 'mssql'

//Basic APIs

export const getPlatillos = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query("SELECT * FROM Platillos");
        res.json(result);
    } catch (error) {
        console.log(error)
    }
}

export const getPlatillo = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('PlatilloID', sql.Int, req.params.id)
        .query("SELECT * FROM Platillos WHERE PlatilloID = @PlatilloID");
        res.json(result)
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

export const createPlatillo = async (req, res) => {
    try {
        console.log(req.body)
        const pool = await getConnection();
        const result = await pool.request()
        .input('Nombre', sql.NVarChar, req.body.Nombre)
        .input('Descripcion', sql.NVarChar, req.body.Descripcion)
        .input('Precio', sql.Decimal, req.body.Precio)
        .input('CategoriaPlaID', sql.Int, req.body.CategoriaPlaID)
        .input('URL', sql.NVarChar, req.body.URL)
        .query("INSERT INTO Platillos (Nombre, Descripcion, Precio, CategoriaPlaID, URL) VALUES (@Nombre, @Descripcion, @Precio, @CategoriaPlaID, @URL) Select SCOPE_IDENTITY() as PlatilloID");
        console.log(result)
        res.json({
            PlatilloID: result.recordset[0].PlatilloID,
            Nombre: req.body.Nombre,
            Descripcion: req.body.Descripcion,
            Precio: req.body.Precio,
            CategoriaPlaID: req.body.CategoriaPlaID,
            URL: req.body.URL
        })
    } catch (error) {
        console.log(error)
    }
}

export const updatePlatillo = async (req, res) => {
    try {
        console.log(req.body)
        const pool = await getConnection();
        const result = await pool.request()
        .input('PlatilloID', sql.Int, req.params.id)
        .input('Nombre', sql.NVarChar, req.body.Nombre)
        .input('Descripcion', sql.NVarChar, req.body.Descripcion)
        .input('Precio', sql.Decimal, req.body.Precio)
        .input('CategoriaPlaID', sql.Int, req.body.CategoriaPlaID)
        .input('URL', sql.NVarChar, req.body.URL)
        .query('Update Platillos set Nombre = @Nombre, Descripcion = @Descripcion, Precio = @Precio, CategoriaPlaID = @CategoriaPlaID, URL = @URL where PlatilloID = @PlatilloID');
        if(result.rowsAffected[0] === 0){
            return res.status(404).json({message: "Platillo no encontrado"})
        }
        res.json({
            PlatilloID: req.params.id,
            Nombre: req.body.Nombre,
            Descripcion: req.body.Descripcion,
            Precio: req.body.Precio,
            CategoriaPlaID: req.body.CategoriaPlaID,
            URL: req.body.URL
        })
    } catch (error) {
        console.log(error)
    }
}

export const deletePlatillo = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('PlatilloID', sql.Int, req.params.id)
        .query('Delete from Platillos where PlatilloID = @PlatilloID');
        console.log(result)
        if(result.rowsAffected[0] === 0 ){
            return res.status(404).json({message: "Platillo no encontrado"})
        }
        return res.json({message: "Platillo eliminado con exito"})
    } catch (error) {
        console.log(error)
    }
}