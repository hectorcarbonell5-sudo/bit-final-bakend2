import express from 'express';
import "dotenv/config";
import connectDB from './config/db.js';
import dns from 'node:dns';
import ingredientsRouter from './routers/ingredientes.js';

if (process.env.NODE_ENV !== 'production') { 
  dns.setServers(['8.8.8.8', '8.8.4.4']); 
}

const server=express();
const PORT=process.env.PORT || 8080;

connectDB();

server.use(express.json());
server.use('/ingredientes', ingredientsRouter);

server.get('/',(req,res)=>{
    res.send('hola mundo');
});

server.listen(PORT,()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});