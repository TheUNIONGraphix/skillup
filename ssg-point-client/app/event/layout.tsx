'use client'
import Link from "next/link";
import { useSession } from 'next-auth/react'
import { redirect, usePathname } from 'next/navigation'

export default function EventLayout({children}: {children: React.ReactNode}) {
  const pathName = usePathname()
  console.log("pathName ",pathName)
  const { data: session, status } = useSession(
    {
      required: true,
      onUnauthenticated() {
        if( confirm('로그인이 필요합니다. 로그인 하시겠습니까?') )
        redirect(`/api/auth/signin?callbackUrl=${pathName}`)
      }
    }
  )
  return (
    <>
    <nav className="w-full pt-20">
      <ul className="flex">
        <li className="w-1/3 p-5 bg-black text-white">
          <Link href="/event/ingevents">진행중 이벤트</Link>
        </li>
        <li className="w-1/3 p-5 bg-black text-white">
          <Link href="/event/endevents">완료 이벤트</Link>
        </li>
        <li className="w-1/3 p-5 bg-black text-white">
          <Link href="/event/winevents">당첨 이벤트</Link>
        </li>
      </ul>
    </nav>
    {children}
    </>
  )
}