import "dotenv/config";
import fastify from "fastify";

const server = fastify();

server.get("/ping", async (request, reply) => {
  console.log("Request recieved at ping");

  return "pong\n";
});

server.listen(
  {
    port: Number(process.env.PORT),
  },
  (error, address) => {
    if (error) {
      console.error(error);
      process.exit(1);
    }

    console.log(`Server listening at: ${address}`);
  }
);
