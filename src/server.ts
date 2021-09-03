import Fastify, { FastifyInstance, RouteShorthandOptions } from 'fastify'
import { Server, IncomingMessage, ServerResponse } from 'http'
import { TodoRoute } from './routes/todo'

const app: FastifyInstance = Fastify({ logger: true })
app.register(TodoRoute)

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

start()
