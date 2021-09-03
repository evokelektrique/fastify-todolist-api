import Fastify, { FastifyInstance, } from 'fastify'
import { Server, IncomingMessage, ServerResponse } from 'http'
import { fastifySwagger } from 'fastify-swagger'
import { TodoRoutes } from './routes/todo'

const fastifyOptions = {
  logger: true
}

// Create a fastify server
const app: FastifyInstance = Fastify(fastifyOptions)

// Register plugins
app.register(fastifySwagger, {
   exposeRoute: true,
   routePrefix: '/docs',
   swagger: {
      info: {
         title: 'Todolist API Documentation',
         description: 'Blazing fast api powered by fastify',
         version: '1.0'
      },
      definitions: {
         Todo: {
            type: 'object',
            required: ['id', 'task'],
            properties: {
               id: { type: 'integer' },
               task: { type: 'string' }
            }
         }
      },
   },
})

app.register(TodoRoutes)

// Main server function
const start = async () => {
  try {
    await app.listen(3000)
    const address = app.server.address()
    console.log(`Server is listening at http://${address.address}:${address.port}`)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

// Start the server
start()
