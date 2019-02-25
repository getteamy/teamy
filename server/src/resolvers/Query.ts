const user = async (parent, args, { user, prisma }, info) => {
    if (!user) {
        throw new Error("Not authenticated")
    }
    return prisma.user({ id: user.id })
}

export default { user }