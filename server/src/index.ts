import { prisma } from './generated/prisma-client'
import { GraphQLServer } from 'graphql-yoga'
import Mutation from './resolvers/Mutation'

const resolvers = {
    Mutation
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: request => ({
        ...request,
        prisma,
    }),
})

server.start(() => console.log('👨‍💻️ Server is running on port 4000'))
