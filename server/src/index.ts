import { prisma } from './generated/prisma-client'
import { GraphQLServer } from 'graphql-yoga'

import resolvers from './resolvers'

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: {
        prisma
    },
})
server.start(() => console.log('👨‍💻️ Server is running on port 4000'))
