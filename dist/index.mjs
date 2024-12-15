import Fastify from "fastify";
const fastify = Fastify({
    logger: true,
});
try {
    fastify.listen({ port: 3000 });
}
catch (err) {
    fastify.log.error(err);
    process.exit(1);
}
