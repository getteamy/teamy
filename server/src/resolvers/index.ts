import { prisma } from "../generated/prisma-client";

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
                    email: args.email
                }
            )
        },
        createWorkspace(root, args, context) {
            return context.prisma.createWorkspace(
                {
                    name: args.name,
                    users: [args.administrator],
                    administrator: {
                        connect: {
                            email: args.administrator
                        }
                    },
                }
            )
        },
        updateWorkspace(root, args, context) {
            return context.prisma.updateWorkspace(
                {
                    data: {
                        name: args.name,
                        users: args.users,
                        teams: args.teams
                    },
                    where: {
                        id: args.id
                    }
                }
            )
        }
    },
    User: {
        skills(parent) {
            return prisma.user({ id: parent.id }).skills()
        }
    },

    Skill: {
        users(parent) {
            return prisma.skill({ name: parent.name }).users()
        }
    }
}
