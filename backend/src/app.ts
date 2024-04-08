import express from 'express';
import cors from 'cors'; 
import http from 'http';
import { Server } from 'socket.io';
import hfBot from './service/huggingface';

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ["GET", "POST"]
    }
})
io.on('connection', (socket) => {
    console.log(`user connected ${socket.id}`);

    socket.on('send_message', async (data) => {
        console.log(data.message);
        const answer = await hfBot.Question(data.message);
        console.log(answer);
        socket.emit('recive_message', JSON.stringify(answer));
    })

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
})



export { server, io };