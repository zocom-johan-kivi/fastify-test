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
    handler: function (request, reply) {
        reply.send({ hello: "world" });
    },
};
