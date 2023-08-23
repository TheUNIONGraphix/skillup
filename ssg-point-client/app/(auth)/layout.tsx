import Header from '@/components/layout/Header'
import '@/app/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'SSG POINT APP',
//   description: 'SSG POINT APP',
//   manifest: '/manifest.json',
// }

export default function AuthLayout({children} : {children: React.ReactNode}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}