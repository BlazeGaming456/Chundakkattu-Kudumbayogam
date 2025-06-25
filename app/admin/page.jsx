import React from 'react'
import prisma from '@/lib/db'

const page = async () => {
  const member = await prisma.member.find();
  return (
    <div>{member}</div>
  )
}

export default page