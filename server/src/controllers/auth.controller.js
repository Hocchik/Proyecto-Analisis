import { getConnection } from "../database/connection.js";
import {createAccessToken} from "../libs/jwt.js";
import sql from 'mssql'

export const register = async (req, res) =>{

    const {Nombre, Apellido, Correo, Telefono, Contrasena} = req.body;

    const pool = await getConnection();

    try {
        const UserFound = await pool.request()
        .input('Correo', sql.NVarChar, Correo)
        .input('Contrasena', sql.NVarChar, Contrasena)
        .query('Select * from Clientes where Correo = @Correo and Contrasena = @Contrasena')

        if(UserFound){
            return res.status(200).json({message: 'Client already exists'})
        }

        const result = await pool.request()
        .input('Nombre', sql.NVarChar, Nombre)
        .input('Apellido', sql.NVarChar, Apellido)
        .input('Correo', sql.NVarChar, Correo)
        .input('Telefono', sql.NVarChar, Telefono)
        .input('Contrasena', sql.NVarChar, Contrasena)
        .query('INSERT INTO Clientes (Nombre, Apellido, Correo, Telefono, Contrasena) VALUES (@Nombre, @Apellido, @Correo, @Telefono, @Contrasena)')

        console.log(result)

        const token = await createAccessToken({ id: result.ClienteID });
    
        res.cookie("token", token);

        res.json({
            ClienteID: result.recordset[0].ClienteID,
            Nombre: Nombre,
            Apellido: Apellido,
            Correo: Correo,
            Telefono: Telefono,
        })

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

export const login = async (req, res) =>{
    const { Correo, Contrasena } = req.body;

    const pool = await getConnection();

    try {
        const UserFound = await pool.request()
        .input('Correo', sql.NVarChar, Correo)
        .input('Contrasena', sql.NVarChar, Contrasena)
        .query('Select * from Clientes where Correo = @Correo and Contrasena = @Contrasena')
        if(!UserFound){
            return res.status(404).json({message: 'Client not found'})
        }
        const token = await createAccessToken({ id: UserFound.ClienteID });

        res.cookie("token", token);
        
        res.json({
            ClienteID: UserFound.recordset[0].ClienteID,
            Nombre: UserFound.recordset[0].Nombre,
            Apellido: UserFound.recordset[0].Apellido,
            Correo: UserFound.recordset[0].Correo,
            Telefono: UserFound.recordset[0].Telefono
        })

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const logout = async (req, res) =>{
    res.cookie('token', "", {
        expires: new Date(0)
    });
    return res.sendStatus(200);
}

export const profile = async (req, res) =>{
    
    const {ClienteID} = req.body

    const pool = await getConnection();
    
    try {
        const UserFound = await pool.request()
        .input('ClienteID', sql.NVarChar, ClienteID)
        .query('Select * from Clientes where ClienteID = @ClienteID')

        if(!UserFound){
            return res.status(404).json({message: 'User not found'})
        }

        return res.json({
            ClienteID: UserFound.recordset[0].ClienteID,
            Nombre: UserFound.recordset[0].Nombre,
            Apellido: UserFound.recordset[0].Apellido,
            Correo: UserFound.recordset[0].Correo,
            Telefono: UserFound.recordset[0].Telefono
        })

        
    } catch (error) {
        console.log(error)
    }
}

export const verifyToken = async (req, res) =>{
    const {token} =req.cookies
    if(!token)  return res.status(401).json({message: 'Unauthorized'})

        const pool = await getConnection();

        jwt.verify(token, TOKEN_SECRET, async (err, ClienteID) => {
            if(err) return res.status(401).json({message: 'Unauthorized'}) 
                const ClientFound = await pool.request()
            .input('ClienteID', sql.NVarChar, ClienteID)
            .query('Select * from Clientes where ClienteID = @ClienteID')

            if(!ClientFound) return res.status(401).json({message: 'Unauthorized'}) 

                return res.json({
                    ClienteID: UserFound.recordset[0].ClienteID,
                    Correo: UserFound.recordset[0].Correo,
                })

        })

}