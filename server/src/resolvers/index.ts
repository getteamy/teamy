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
                    email: args.email,
                    skills: {
                        create: args.skills.map(skill => ({name : skill}))
                    }
                }

            )
        },
    },
    User: {
        skills(parent) {
            return prisma.user({id: parent.id}).skills()
        }
    },

    Skill: {
        users(parent) {
            return prisma.skill({name: parent.name}).users()
        }
    }
}
