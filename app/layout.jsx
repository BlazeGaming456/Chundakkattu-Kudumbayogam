import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import LayoutClient from './LayoutClient'

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

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${geistSans.variable} ${geistMono.variable}`}>
      <LayoutClient>{children}</LayoutClient>
    </html>
  )
}