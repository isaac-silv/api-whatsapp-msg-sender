import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import msgRoute from './src/routes/msgRoute.js'

dotenv.config();

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/msg-webhook', msgRoute)

export default app;