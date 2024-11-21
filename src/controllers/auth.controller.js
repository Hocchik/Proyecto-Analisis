import { getConnection } from "../database/connection.js";
import {createAccessToken} from "../libs/jwt.js";
import sql from 'mssql'

export const register = async (req, res) =>{

    const {Nombre, Apellido, NombreUsuario, Contrasena, Telefono, CorreoElectronico} = req.body;

    const pool = await getConnection();

    try {
        const UserFound = await pool.request()
        .input('NombreUsuario', sql.NVarChar, NombreUsuario)
        .input('Contrasena', sql.NVarChar, Contrasena)
        .input('CorreoElectronico', sql.NVarChar,  CorreoElectronico)
        .query('Select * from Clientes where NombreUsuario = @NombreUsuario and Contrasena = @Contrasena and CorreoElectronico = @CorreoElectronico')

        if(UserFound){
            return res.status(200).json({message: 'User already exists'})
        }

        const result = await pool.request()
        .input('NombreUsuario', sql.NVarChar, NombreUsuario)
        .input('Contrasena', sql.NVarChar, Contrasena)
        .input('CorreoElectronico', sql.NVarChar,  CorreoElectronico)
        .input('Nombre', sql.NVarChar, Nombre)
        .input('Apellido', sql.NVarChar, Apellido)
        .input('Telefono', sql.NVarChar, Telefono)
        .query('INSERT INTO Clientes (NombreUsuario, Contrasena, CorreoElectronico, Nombre, Apellido, Telefono) VALUES (@NombreUsuario, @Contrasena, @CorreoElectronico, @Nombre, @Apellido, @Telefono)')

        console.log(result)

        const token = await createAccessToken({ id: result.ClienteID });
    
        res.cookie("token", token);

        res.json({
            ClienteID: result.recordset[0].ClienteID,
            Nombre: Nombre,
            Apellido: Apellido,
            NombreUsuario: NombreUsuario,
            Contrasena: Contrasena,
            CorreoElectronico: CorreoElectronico,
            Telefono: Telefono
        })

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

export const login = async (req, res) =>{
    const { NombreUsuario, Contrasena } = req.body;

    const pool = await getConnection();

    try {
        const UserFound = await pool.request()
        .input('NombreUsuario', sql.NVarChar, NombreUsuario)
        .input('Contrasena', sql.NVarChar, Contrasena)
        .query('Select * from Clientes where NombreUsuario = @NombreUsuario and Contrasena = @Contrasena')

        if(!UserFound){
            return res.status(404).json({message: 'User not found'})
        }

        const token = await createAccessToken({ id: UserFound.ClienteID });
    
        res.cookie("token", token);

        res.json({
            ClienteID: UserFound.recordset[0].ClienteID,
            Nombre: UserFound.recordset[0].Nombre,
            Apellido: UserFound.recordset[0].Apellido,
            NombreUsuario: UserFound.recordset[0].NombreUsuario,
            Contrasena: UserFound.recordset[0].Contrasena,
            CorreoElectronico: UserFound.recordset[0].CorreoElectronico,
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
            NombreUsuario: UserFound.recordset[0].NombreUsuario,
            Contrasena: UserFound.recordset[0].Contrasena,
            CorreoElectronico: UserFound.recordset[0].CorreoElectronico,
            Telefono: UserFound.recordset[0].Telefono
        })

        
    } catch (error) {
        
    }
}

export const verifyToken = async (req, res) =>{
    const {token} =req.cookies
    if(!token)  return res.status(401).json({message: 'Unauthorized'})

        const pool = await getConnection();

        jwt.verify(token, TOKEN_SECRET, async (err, ClienteID) => {
            if(err) return res.status(401).json({message: 'Unauthorized'}) 
                const AdminFound = await pool.request()
            .input('ClienteID', sql.NVarChar, ClienteID)
            .query('Select * from Clientes where ClienteID = @ClienteID')

            if(!AdminFound) return res.status(401).json({message: 'Unauthorized'}) 

                return res.json({
                    ClienteID: UserFound.recordset[0].ClienteID,
                    NombreUsuario: UserFound.recordset[0].NombreUsuario,
                })

        })

}