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
    .input('ReservaID',  sql.Int, req.params.id)
    .query('Select * from Reserva where ReservaID = @ReservaID')

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
    .input('ReservaID', sql.Int, req.params.id)
    .input('ClienteID', sql.Int, req.body.ClienteID)
    .input('MesaID', sql.Int, req.body.MesaID)
    .input('FechaReserva', sql.NVarChar, req.body.FechaReserva)
    .input('HorarioID', sql.NVarChar, req.body.HorarioID)
    .input('Estado', sql.NVarChar, req.body.Estado)
    .query('Update Reserva set ClienteID= @ClienteID, MesaID = @MesaID, FechaReserva= @FechaReserva, HorarioID= @HorarioID, Estado= @Estado where ReservaID = @ReservaID')
    
    if(result.rowsAffected[0] === 0){
        return res.status(404).json({message:'Reserva no encontrada'})
    }

    res.json({
        ReservaID: req.params.id,
        ClienteID: req.body.ClienteID,
        MesaID: req.body.MesaID,
        FechaReserva: req.body.FechaReserva,
        HorarioID: req.body.HorarioID,
        Estado: req.body.Estado
    })
}

export const deleteReservacion = async (req, res) =>{
    const pool = await getConnection();
    const result = await pool.request()
    .input('ReservaID',  sql.Int, req.params.id)
    .query('Delete from Reserva where ReservaID = @ReservanID')
    console.log(result)
    if(result.rowsAffected[0] === 0){
        return res.status(404).json({message:'Reserva no encontrada'})
    }
    return res.json({message:'Reservacion eliminada con exito'})
}
