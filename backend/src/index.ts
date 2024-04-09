import { server, io } from "../src/app";
import dotenv from 'dotenv'
dotenv.config();

if(!process.env.HF_TOKEN) throw new Error('HF_TOKEN must be defiend!');


process.on('SIGINT', async () =>  {
  io.disconnectSockets();
  process.exit(0);
} );
process.on('SIGTERM', async () =>  {
  io.disconnectSockets();
  process.exit(0);
});

server.listen(4000, () => {
  console.log('app started at port 4000');
})
