import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import path from 'path';
import { authRouter } from './routes/auth.routes';

// database connection
mongoose.connect('mongodb://localhost/Express-Tasker')
.then(() => console.log('Connected...'))
.catch(err => console.error('Connection failed...'));

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use('/auth', authRouter);

app.listen(3000, () => { console.log(`Server is running on http://localhost:3000`)});