import { getConnection } from "../database/connection.js";
import sql from 'mssql'

export const getReservaciones = async (req, res) =>{
    const pool = await getConnection();
    const result = await pool.request().query('SELECT * FROM Reserva')
    res.json(result)
}

export const getReservacion = async (req, res) =>{
    const pool = await getConnection();
    
    const result = await pool.request()
    .input('ReservacionID',  sql.Int, req.params.id)
    .query('Select * from Reserva where ReservacionID = @ReservacionID')

    res.json(result);
    console.log(result)
} 

export const createReservacion = async (req, res) =>{
    console.log(req.body);

    const pool = await getConnection();

    const result = await pool.request()
    .input('ClienteID', sql.Int, req.body.ClienteID)
    .input('MesaID', sql.DateTime, req.body.MesaID)
    .input('FechaPedido', sql.Int, req.body.FechaPedido)
    .input('HorarioID', sql.VarChar, req.body.HorarioID)
    .input('Estado', sql.VarChar, req.body.Estado)
    .query('Insert into Reserva (ClienteID, MesaID, FechaPedido, HorarioID, Estado) values (@ClienteID, @MesaID, @FechaPedido, @HorarioID, @Estado); Select SCOPE_IDENTITY() as ReservacionID')
    
    console.log(result)

    res.json({
        ReservacionID: result.recordset[0].ReservacionID,
        MesaID: req.body.MesaID,
        FechaReservacion: req.body.FechaReservacion,
        ClienteID: req.body.ClienteID,
        Observaciones: req.body.Observaciones
    })

} 

export const putReservacion = async (req, res) =>{
    console.log(req.body);
    const pool = await getConnection();
    const result = await pool.request()
    .input('ReservacionID', sql.Int, req.params.id)
    .input('MesaID', sql.Int, req.body.MesaID)
    .input('FechaReservacion', sql.DateTime, req.body.FechaReservacion)
    .input('ClienteID', sql.Int, req.body.ClienteID)
    .input('Observaciones', sql.VarChar, req.body.Observaciones)
    .query('Update Reserva set MesaID= @MesaID, FechaReservacion = @FechaReservacion, ClienteID= @ClienteID, Observaciones= @Observaciones where ReservacionID = @ReservacionID')
    
    if(result.rowsAffected[0] === 0){
        return res.status(404).json({message:'Reservacion no encontrada'})
    }

    res.json({
        ReservacionID: req.params.id,
        MesaID: req.body.MesaID,
        FechaReservacion: req.body.FechaReservacion,
        ClienteID: req.body.ClienteID,
        Observaciones: req.body.Observaciones
    })
}

export const deleteReservacion = async (req, res) =>{
    const pool = await getConnection();
    const result = await pool.request()
    .input('ReservacionID',  sql.Int, req.params.id)
    .query('Delete from Reservaciones where ReservacionID = @ReservacionID')
    console.log(result)
    if(result.rowsAffected[0] === 0){
        return res.status(404).json({message:'Reservacion no encontrada'})
    }
    return res.json({message:'Reservacion eliminada con exito'})
}
