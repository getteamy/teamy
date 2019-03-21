import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'

const APP_SECRET = 'secret'

const signup = async (parent, { name, password }, context, info) => {
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await context.prisma.createUser({
        name,
        password: hashedPassword
    })
    return user
}

const login = async (parent, { name, password }, context, info) => {
    const user = await context.prisma.user({ name })

    if (!user) {
        throw new Error("User doesn't exist")
    }

    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
        throw new Error("Password doesn't match")
    }

    const token = jwt.sign(
        {
            id: user.id,
            username: user.name
        },
        APP_SECRET,
        {
            expiresIn: '30d',
        }
    )

    return {
        token,
        user,
    }
}

const register = async (parent, { name, password }, context, info) => {
    const user = signup(parent, { name, password }, context, info);

    if (user) {
        const token = jwt.sign(
            {
                username: this.name
            },
            APP_SECRET,
            {
                expiresIn: '30d',
            }
        )

        return {
            token,
            user
        }
    } else {
        throw new Error("User already exists")
    }
}

export default { signup, login, register }