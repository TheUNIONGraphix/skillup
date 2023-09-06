import Header from '@/components/layout/Header'
import '@/app/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AuthProvider from '@/app/context/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '신세계포인트',
  description: '신세계포인트 이용 정보는 물론 쇼핑과 라이프 스타일 혜택까지 볼거리가 풍성한 신세계포인트 앱으로 일상에 신세계를 더해보세요.',
  manifest: '/manifest.json',
  icons: { apple: '/assets/images/icons/icon-192x192.png'},
  themeColor: '#ffffff',
}

export default function RootLayout({children}: {children: React.ReactNode
}) {
  return (
    <html lang="ko">

      <body className={inter.className}>
        <AuthProvider>
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
