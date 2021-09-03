import { FastifyInstance, FastifyPluginOptions, FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'

let todos = {
   id: 1,
   task: 'Test'
}

export async function TodoRoute(app: FastifyInstance, options: FastifyPluginOptions) {
   app.get('/todos', {}, async (request, reply) => {
      return reply.code(200).send(todos);
   });
}

export default fp(TodoRoute)
