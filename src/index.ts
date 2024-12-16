import Fastify from "fastify";

const fastify = Fastify({
  logger: true,
});

fastify.addHook("onResponse", async (request, reply) => {
  // Some async code run after response, eg. logs, traces, metrics
});

fastify.addHook("onError", async (request, reply, error) => {
  // Useful for custom error logging
  // You should not use this hook to update the error
});

fastify.listen(
  { port: process.env.PORT ? parseInt(process.env.PORT) : 3000 },
  (err, address) => {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
    console.info(`🚀 Server is up n running on ${address}.`);
  }
);
