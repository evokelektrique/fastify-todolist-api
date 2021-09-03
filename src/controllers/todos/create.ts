import { RouteShorthandOptions } from 'fastify'
import { bucket, Todo, TodoModel } from '../../models/todo'

const properties = {
   id: { type: 'integer' },
   task: { type: 'string' }
}

const createSchema: RouteShorthandOptions = {
   response: {
      200: {
         type: 'object',
         properties: properties
      }
   },
   params: {
      type: 'object',
      properties: properties
   },
   body: {
      type: 'object',
      properties: properties
   },
}

const createHandler = async (request, reply) => {
   const todo_model = new TodoModel(bucket)     // Initialize new instance of model
   const todo: Todo = request.body
   const insert     = todo_model.insert(todo)   // Beacuse it's in memory, we don't really insert

   bucket           = [...bucket, insert]       // Add to bucket

   return insert
}

export const createOptions = {
   schema: createSchema,
   handler: createHandler
}
