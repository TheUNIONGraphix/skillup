'use client'
import { useSession } from 'next-auth/react'
import { redirect, usePathname } from 'next/navigation'
import React from 'react'

export default function Event() {

  const pathName = usePathname()
  console.log("pathName ",pathName)
  const { data: session, status } = useSession(
    {
      required: true,
      onUnauthenticated() {
        if( confirm('로그인이 필요합니다. 로그인 하시겠습니까?') )
        redirect('/api/auth/signin?callbackUrl=/event')
      }
    }
  )

  return (
    <div>page</div>
  )
}
