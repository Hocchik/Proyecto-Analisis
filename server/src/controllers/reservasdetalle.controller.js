import { getConnection } from "../database/connection.js";
import sql from 'mssql'

//Basic APIs

export const getReservasDetalles = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query("SELECT * FROM DetalleReserva");
        res.json(result);
    } catch (error) {
        console.log(error)
    }
}

export const getReservaDetalle = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('DetalleReservaID', sql.Int, req.params.id)
        .query("SELECT * FROM DetalleReserva WHERE DetalleReservaID = @DetalleReservaID");
        res.json(result)
        console.log(result)
    } catch (error) {
        console.log(error)
    }    
}

export const createReservaDetalle = async (req, res) => {
    try {
        console.log(req.body)
        const pool = await getConnection();
        const result = await pool.request()
        .input('ReservaID', sql.Int, req.body.ReservaID)
        .input('Cantidad', sql.Int, req.body.Cantidad)
        .input('RequerimientoEspecial', sql.NVarChar, req.body.RequerimientoEspecial)
        .input('Alergias', sql.NVarChar, req.body.Alergias)
        .query("INSERT INTO DetalleReserva (ReservaID, Cantidad, RequerimientoEspecial, Alergias) VALUES (@ReservaID, @Cantidad, @RequerimientoEspecial, @Alergias) Select SCOPE_IDENTITY() as DetalleReservaID");
        console.log(result)
        res.json({
            DetalleReservaID: result.recordset[0].DetalleReservaID,
            ReservaID: req.body.ReservaID,
            Cantidad: req.body.Cantidad,
            RequerimientoEspecial: req.body.RequerimientoEspecial,
            Alergias: req.body.Alergias,
        })
    } catch (error) {
        console.log(error)
    }
}

export const updateReservaDetalle = async (req, res) => {
    try {
        console.log(req.body)
        const pool = await getConnection();
        const result = await pool.request()
        .input('DetalleReservaID', sql.Int, req.params.id)
        .input('ReservaID', sql.Int, req.body.ReservaID)
        .input('Cantidad', sql.Int, req.body.Cantidad)
        .input('RequerimientoEspecial', sql.NVarChar, req.body.RequerimientoEspecial)
        .input('Alergias', sql.NVarChar, req.body.Alergias)
        .query('Update DetalleReserva set ReservaID = @ReservaID, Cantidad = @Cantidad, RequerimientoEspecial = @RequerimientoEspecial, Alergias = @Alergias where DetalleReservaID = @DetalleReservaID');
        if(result.rowsAffected[0] === 0){
            return res.status(404).json({message: "Detalle de reserva no encontrada"})
        }
        res.json({
            DetalleReservaID: req.params.id,
            ReservaID: req.body.ReservaID,
            Cantidad: req.body.Cantidad,
            RequerimientoEspecial: req.body.RequerimientoEspecial,
            Alergias: req.body.Alergias
        })
    } catch (error) {
        console.log(error)
    }    
}

export const deleteReservaDetalle = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('DetalleReservaID', sql.Int, req.params.id)
        .query('Delete from DetalleReserva where DetalleReservaID = @DetalleReservaID');
        if(result.rowsAffected[0] === 0){
            return res.status(404).json({message: "Detalle de reserva no encontrada"})
        }
        return res.json({message: "Detalle de reserva eliminada con éxito"})
    } catch (error) {
        console.log(error)
    }
}

