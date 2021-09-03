import { FastifyInstance, FastifyPluginOptions, FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'

// Controllers / Handlers(In Fastify)
import { indexOptions } from '../controllers/todos/index'
import { createOptions } from '../controllers/todos/create'
import { updateOptions } from '../controllers/todos/update'
import { deleteOptions } from '../controllers/todos/delete'

// Register routes as a fastify plugin
export async function TodoRoutes(app: FastifyInstance, options: FastifyPluginOptions) {
   app.get('/todos', indexOptions)
   app.post('/todo', createOptions)
   app.put('/todo', updateOptions)
   app.delete('/todo/:id', deleteOptions)
}

export default fp(TodoRoutes)
