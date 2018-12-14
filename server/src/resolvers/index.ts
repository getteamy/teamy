export default {
    Query: {
        publishedPosts(root, args, context) {
            return context.prisma.posts({ where: { published: true } })
        }
    },
    Mutation: {
        createUser(root, args, context) {
            return context.prisma.createUser(
                {
                    email: args.email,
                }
            )
        }
    }
}
