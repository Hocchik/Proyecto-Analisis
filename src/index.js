import app from './app.js'
import {connectDB} from './db.js'
import {getConnection} from './database/connection.js'

getConnection();



app.listen(3000);
console.log('Server on port', 3000);