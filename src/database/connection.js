import sql from 'mssql'

const dbSettings = {
    user: "UsuarioA",
    password: "papaya",
    server: "localhost",
    database: "ReservaMesas",
    options: {
        encrypt: false,
        trustServerCertificate: true,
    }
}

export const getConnection = async () =>{
    try {
        const pool = await sql.connect(dbSettings)
        
        const result = await pool.request().query("Select * from Mesas")
        console.log(result)

        return pool;
    } catch (error) {
        console.log(error)
    }
}