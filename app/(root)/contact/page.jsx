import React from 'react'
import ContactCards from '@/components/ContactCards'
import Image from 'next/image'

const page = () => {
  return (
    <div className='flex w-full'>
      <div className="w-2/3 flex items-center justify-center p-4">
        <div className="grid grid-cols-2 gap-12 space-x-12">
          <ContactCards />
          <ContactCards />
          <ContactCards />
          <ContactCards />
        </div>
      </div>
      <div className='w-1/3 flex items-center justify-center p-4'>
        <Image src='/logo.svg' height={1000} width={1000} />
      </div>
    </div>
  )
}

export default page
