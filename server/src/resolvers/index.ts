export default {
    Query: {
        user(root, args, context) {
            return context.prisma.user({ where: { id: args.id } })
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
