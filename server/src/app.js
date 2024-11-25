import express from "express";
import morgan from "morgan";
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js'
import authAdminRoutes from './routes/authAdmin.routes.js'
import reservasRoutes from './routes/reservas.routes.js'
import clientesRoutes from './routes/clientes.routes.js'
import platillosRoutes from './routes/platillos.routes.js'


const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", authAdminRoutes);
app.use("/api", reservasRoutes);
app.use("/api", clientesRoutes);
app.use("/api", platillosRoutes);

export default app;