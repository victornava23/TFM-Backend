import express from 'express';
import paramsRoutes from './routes/parametros'

const app = express();



//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(paramsRoutes);

export default app