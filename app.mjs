import express from 'express';
import morgan from 'morgan';

import userRoute from './routes/userRoute.mjs';

import errorController from './controllers/errorController.mjs';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/users', userRoute);

app.use(errorController);

export default app;
