import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'

const APP_SECRET = 'secret'

const signup = async (_, { name, password }, context) => {
  const exists = await context.prisma.user({ name })

  if (exists) {
    throw new Error('User already exists')
  }

  const hashedPassword = await bcrypt.hash(password, 10)
  const user = await context.prisma.createUser({
    name,
    password: hashedPassword
  })
  return user
}

const login = async (_, { name, password }, context) => {
  const user = await context.prisma.user({ name })

  if (!user) {
    throw new Error('User doesn\'t exists')
  }

  const passwordMatch = await bcrypt.compare(password, user.password)

  if (!passwordMatch) {
    throw new Error('Password doesn\'t match')
  }

  const token = jwt.sign(
    {
      id: user.id,
      username: user.name
    },
    APP_SECRET,
    {
      expiresIn: '30d'
    }
  )

  return {
    token,
    user
  }
}

export default { signup, login }
