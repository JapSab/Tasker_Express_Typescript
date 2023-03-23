import express, { NextFunction,  Request, Response, } from 'express';
import bodyParser, { json } from 'body-parser';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import { authRouter } from './routes/auth.routes';
import { userRouter } from './routes/user.routes';
import { taskRouter } from './routes/task.routes';
import cookieParser from 'cookie-parser';
import session, { Session } from 'express-session';
import Userdb from './models/user.model';

const MongoDBStore = require('connect-mongodb-session')(session)

// interface CustomSession extends Session {
//     user?: any; // replace `any` with the actual type of the `user` object
// }

const MONGODB_URI = 'mongodb://localhost/Express-Tasker';

// database connection
mongoose.connect(MONGODB_URI)
.then(() => console.log('Connected...'))
.catch(err => console.error('Connection failed...'));

const app = express();


const store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: 'mysessions'
  });

dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));


app.use(
    session({
        secret: process.env.SESSION_SECRET,
        saveUninitialized: false,
        resave: false,
        store: store
    })
)


app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/tasks', taskRouter);



app.listen(3000, () => { console.log(`Server is running on http://localhost:3000`)});