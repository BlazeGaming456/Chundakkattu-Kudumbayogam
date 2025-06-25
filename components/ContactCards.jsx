import React from 'react'
import Image from 'next/image'

const ContactCards = () => {
  return (
    <div className='border-2 w-fit justify-center items-center'>
      <div className='h-2/3 justify-center items-center'>
          <Image src='/papa.svg' width={100} height={100} />
      </div>
      <div className='flex flex-col h-1/3'>
        <span>Secretary</span>
        <span>Raju Thomas</span>
        <span>Kurungazha PO, Pullad</span>
        <span>Mobile No.: 7558024xxx</span>
      </div>
    </div>
  )
}

export default ContactCards