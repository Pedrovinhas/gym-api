import fastify from 'fastify';
import { PrismaClient } from '@prisma/client'
import { z } from 'zod';


export const app = fastify()

const prisma = new PrismaClient()

app.post('/users', async (request, reply) => {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string(),
    password: z.string().min(6),
  })
  
  const { name, email, password } = registerBodySchema.parse(request.body)
  
  await prisma.user.create({
    data: {
      name,
      email,
      password_hash: password,
    },
  })
  
  return reply.status(201).send()
})

