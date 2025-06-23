import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import Link from 'next/link'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata = {
  title: 'Chundakkattu Kudumbayogam',
  description: 'Chundakkattu Kudumbayogam Website'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <nav className='relative border-2 h-22'>
          <div className='flex justify-end gap-3 h-3/12 bg-light-brown'>
            <span>+91-7558024265</span>
            <span>chundakkattukudumbayogam@gmail.com</span>
          </div>
          
          <div className='h-9/12 flex items-center place-content-end gap-3 pr-10'>
            <Link href='/'>
              Home
            </Link>
            <Link href='/history'>
              History
            </Link>
            <Link href='/families'>
              Families
            </Link>
            <Link href='/gallery'>
              Gallery
            </Link>
            <Link href='/contact'>
              Contact Us
            </Link>
          </div>
          <Image src='/logo.svg' width={80} height={80} alt='Logo' className='absolute object-contain rounded-full border-2 shadow-md top-0 z-20' />
        </nav>
        <div className='flex-grow relative'>
          {children}
        </div>

        <footer>
          <div className='h-16 flex border-2 items-center justify-around'>
            <span>2025@Chundakkattu</span>
            <Link href='/admin'>
              Admin Login
            </Link>
          </div>
        </footer>
      </body>
    </html>
  )
}
