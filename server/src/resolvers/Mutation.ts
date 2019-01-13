import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'

const APP_SECRET = 'secret'

const signup = async (parent, args, context, info) => {
    const password = await bcrypt.hash(args.password, 10)
    const user = await context.prisma.createUser({ ...args, password })
    const token = jwt.sign({ userId: user.id }, APP_SECRET)

    return {
        token,
        user,
    }
}

const login = async (parent, args, context, info) => {
    try {
        const user = await context.prisma.user({ email: args.email })
        const valid = await bcrypt.compare(args.password, user.password)
        const token = jwt.sign({ userId: user.id }, APP_SECRET)
        return {
            token,
            user,
        }
    } catch(error) {
        throw new Error('Email or password is invalid')
    }


}

export default { signup, login }