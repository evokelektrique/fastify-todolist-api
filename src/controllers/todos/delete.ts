import { RouteShorthandOptions } from 'fastify'
import { bucket, Todo, TodoModel } from '../../models/todo'

const deleteSchema: RouteShorthandOptions = {}

const deleteHandler = async (request, reply) => {
   const todo_model = new TodoModel(bucket)     // Initialize new instance of model
   const { id } = request.params                // Deconstruct `request`
   const search = todo_model.find(Number(id))   // Search for specific todo by `id`

   // Do the delete
   bucket = bucket.filter(object => object !== search)

   return reply.code(200).send()
}

export const deleteOptions = {
   schema: deleteSchema,
   handler: deleteHandler
}
