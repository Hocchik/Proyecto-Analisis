import { getConnection } from "../database/connection.js";
import sql, { MAX } from 'mssql'

export const getReservaciones = async (req, res) =>{
    const pool = await getConnection();

    const result = await pool.request().query('SELECT * FROM reservaciones')

    res.json(result)
}

export const createReservaciones = async (req, res) =>{
    console.log(req.body);

    const pool = await getConnection();

    const result = await pool.request()
    .input('MesaID', sql.Int, req.body.MesaID)
    .input('FechaReservacion', sql.DateTime, req.body.FechaReservacion)
    .input('HoraInicio', sql.DateTime, req.body.HoraInicio)
    .input('ClienteID', sql.Int, req.body.ClienteID)
    .input('Observaciones', sql.NVarChar(MAX), req.body.Observaciones)
    .query('Insert into Reservaciones (MesaID, FechaReservacion, HoraInicio, ClienteID, Observaciones) values (@MesaID, @FechaReservacion, @HoraInicio, @ClienteID, @Observaciones)')
    res.json(result)
}
