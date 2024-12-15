import Fastify from "fastify";
import { getUsers } from "./controllers/users.js";
const fastify = Fastify({
    logger: true,
});
fastify.get("/hello", getUsers);
fastify.listen({ port: 3000 }, (err, address) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    console.info(`🚀 Server is up n running on ${address}.`);
});
