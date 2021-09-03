import { RouteShorthandOptions } from 'fastify'
import { bucket, Todo, TodoModel } from '../../models/todo'

const indexSchema: RouteShorthandOptions = {
   response: {
      200: {
         type: 'object',
         properties: {
            id: { type: 'integer' },
            task: { type: 'string' }
         }
      }
   }
}

const indexHandler = async (request, reply) => {
   const todo_model = new TodoModel(bucket)
   return reply.code(200).send(todo_model.findAll());
}

export const indexOptions = {
   schema: indexSchema,
   handler: indexHandler
}
