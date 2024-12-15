import { FastifyReply } from "fastify";

export const getUsers = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          hello: { type: "string" },
        },
      },
    },
  },
  handler: function (request: Request, reply: FastifyReply) {
    reply.send({ hello: "world" });
  },
};
