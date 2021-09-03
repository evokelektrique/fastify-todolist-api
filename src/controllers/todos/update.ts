import { RouteShorthandOptions } from 'fastify'
import { bucket, Todo, TodoModel } from '../../models/todo'

const updateSchema: RouteShorthandOptions = {
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

const updateHandler = async (request, reply) => {
   const todo_model = new TodoModel(bucket)     // Initialize new instance of model
   const todo: Todo = request.body              // Create a todo Object from Todo interface
   const search     = todo_model.find(todo.id)  // Search for specific todo by `id`

   // Do the update
   bucket.map(object => object.id === search.id ? object.task = todo.task : todo)

   return todo
}

export const updateOptions = {
   schema: updateSchema,
   handler: updateHandler
}
