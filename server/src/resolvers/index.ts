export default {
    Query: {
        publishedPosts(root, args, context) {
            return context.prisma.posts({ where: { published: true } })
        }
    },
    Mutation: {
        createDraft(root, args, context) {
            return context.prisma.createPost(
                {
                    title: args.title,
                    author: {
                        connect: { id: args.userId }
                    }
                }
            )
        }
    }
}
