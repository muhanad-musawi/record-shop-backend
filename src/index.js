import express from "express";  
import recordsRouter from './routes/records.router.js' 
import usersRouter from './routes/users.router.js' 
import morgan from 'morgan'
import cors from "cors"
const PORT = process.env.PORT || 4000;
const app = express();
app.use(cors())
app.use(express.json());
app.use(recordsRouter); 
app.use(usersRouter); 
app.use(morgan('tiny'))



//start server 
app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});