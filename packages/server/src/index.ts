import { GraphQLServer } from 'graphql-yoga'
import * as jwt from 'jsonwebtoken'

import { prisma } from './generated/prisma-client'

import Mutation from './resolvers/Mutation'
import Query from './resolvers/Query'

const resolvers = {
  Mutation,
  Query
}

function getUser(token: string) {
  if (token) {
    return jwt.verify(token, 'secret')
  }
  return null
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context({ request }) {
    const tokenWithBearer = request.headers.authorization || ''
    const token = tokenWithBearer.split(' ')[1]
    const user = getUser(token)

    return {
      user,
      prisma
    }
  }
})

//@eslint:ignore
server.start(() => console.log('👨‍💻️ Server is running on port 4000'))
