import express from 'express';
import { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connectDB from './config/database'; // Asegúrate de que este sea el camino correcto a tu archivo database.ts

const app = express();

// Conectar a la base de datos
connectDB();

// Middlewares
app.use(cors());
app.use(morgan('combined'));
app.use(express.json()); // Middleware para parsear JSON

// Rutas
const routerExample = express.Router(); // Crea un router para las rutas de usuarios

routerExample.get('/', (req: Request, res: Response) => {
  res.send('WELCOME!');
});

app.use('/', routerExample);

// Manejo de errores no encontrados
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ message: 'Resource not found' });
});

// Middleware de manejo de errores
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(error.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

export default app;