import Fastify from "fastify";

const fastify = Fastify({
  logger: true,
});

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.info(`🚀 Server is up n running on ${address}.`);
});
