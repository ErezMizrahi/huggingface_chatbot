import { server, io } from "../src/app";

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
