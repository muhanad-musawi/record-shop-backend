import express from "express";  
import recordsRouter from './routes/records.router.js' 
import usersRouter from './routes/users.router.js' 
import morgan from 'morgan'  

import {seedTestData} from '../database.mongoose.js'
//import {MongoClient} from 'mongodb'  
import 'dotenv/config';
import mongoose from "mongoose"
import cors from "cors"
const PORT = process.env.PORT || 4000;
const app = express();
app.use(cors())
app.use(express.json());
app.use(usersRouter); 
app.use(morgan('tiny'))

console.log(process.env.DB_PASSWORD);
const uri = `mongodb+srv://muhanad-musawi:${process.env.DB_PASSWORD}@cluster0.ymgxp.mongodb.net/record-shop?retryWrites=true&w=majority` ;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology:true});
const connection = mongoose.connection;
connection.once('open', ()=> { 
    seedTestData()
    console.log("Connection success");
});


app.use('/records', recordsRouter)

//start server 
app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});