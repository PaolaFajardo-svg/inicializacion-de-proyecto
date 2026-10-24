import express, { Request, Response } from 'express';
import apiRoutes from './Routes';
import cors from 'cors';
import { requestLogger } from './Middlewares/logger.middleware';
import { globalErrorHandler } from './Middlewares/errorHandler.middleware';

const app = express();

app.use(cors());
app.use(requestLogger)
app.use(express.json());


// Health Check Endpoint
app.get('/api/v1/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'ControlLabs API operando correctamente',
    timestamp: new Date().toISOString()
  });
});


app.get('/__test/error', (_req, _res, next) => {
  next(new Error('Error de prueba'));
});

app.use('/api/v1', apiRoutes);

app.use((_req, res) => {
  res.status(404).json({ success: false, error: 'Ruta no encontrada.' });
});

app.use(globalErrorHandler);

export default app;