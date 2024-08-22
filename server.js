import express from 'express';
import homeRouter from './routes/homeRouter.js';
import { productsRouter } from './routes/productsRouter.js';
import { getErrorStatus } from './controllers/404ErrorController.js';
import userRouter from './routes/userRouter.js';

const app = express();
const port = 5000;

app.use(express.json());
// app.get('/hello', (req, res) => res.send("<h1>Hello World!</h1>"));

// app.get('/aboutUs', (req, res) => res.send("<h1>About Us</h1>"));

app.use('/', homeRouter);
// app.use('/products', productsRouter);
app.use('/products/', productsRouter);

app.use('/users/', userRouter);

app.get('*', getErrorStatus);

app.listen(port, () => console.log(`Listening at port number ${port}`))