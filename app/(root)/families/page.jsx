import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className='relative min-h-screen border-2'>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-1/2 w-1/2 bg-red-50'>
        <span>Our Four Families</span>
        <div>
            <Link href='/'>
                First
            </Link>
            <Link href='/'>
                First
            </Link>
            <Link href='/'>
                First
            </Link>
            <Link href='/'>
                First
            </Link>
        </div>
      </div>
    </div>
  )
}

export default page
