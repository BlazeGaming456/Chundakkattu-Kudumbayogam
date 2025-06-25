'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

export default function LayoutClient ({ children }) {
  const pathname = usePathname()
  const isAdminPage = pathname.startsWith('/admin')

  return (
    <body className='antialiased flex flex-col min-h-screen'>
      {!isAdminPage && (
        <nav className='relative border-2 h-22'>
          <div className='flex justify-end gap-3 h-3/12 bg-light-brown'>
            <span>+91-7558024265</span>
            <span>chundakkattukudumbayogam@gmail.com</span>
          </div>

          <div className='h-9/12 flex items-center place-content-end gap-3 pr-10'>
            <Link href='/'>Home</Link>
            <Link href='/history'>History</Link>
            <Link href='/families'>Families</Link>
            <Link href='/gallery'>Gallery</Link>
            <Link href='/contact'>Contact Us</Link>
          </div>
          <Image
            src='/logo.svg'
            width={80}
            height={80}
            alt='Logo'
            className='absolute object-contain rounded-full border-2 shadow-md top-0 z-20'
          />
        </nav>
      )}

      <div className='flex-grow relative bg-cream'>{children}</div>

      {!isAdminPage && (
        <footer>
          <div className='h-16 flex border-2 items-center justify-around'>
            <span>2025@Chundakkattu</span>
            <Link href='/admin'>Admin Login</Link>
          </div>
        </footer>
      )}
    </body>
  )
}
