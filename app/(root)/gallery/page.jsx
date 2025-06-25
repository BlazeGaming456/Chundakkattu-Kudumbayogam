'use client'

import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

const images = [
  "/images1.jpg",
  "/images2.jpg",
  "/images3.jpg",
]

const page = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div>
      <div className='grid grid-cols-4 p-12 hover:cursor-pointer'>
        {images.map((image)=> (
          <div onClick={()=>setSelectedImage(image)}>
            <Image src={image} height={300} width={300} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className='fixed flex bg-opacity-70 justify-center items-center backdrop-blur-sm inset-0 z-50'>
          <div className='relative w-full max-w-3xl max-h-[90vh]'>
            <Image
              src={selectedImage}
              alt="Enlarged"
              width={1200}
              height={800}
              className="object-contain w-full h-full rounded"
            />
            <button className='absolute top-2 right-2 hover:opacity-60 cursor-pointer' onClick={()=>setSelectedImage(null)}>
              <X size={28}/>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default page