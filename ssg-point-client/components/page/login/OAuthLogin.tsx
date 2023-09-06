'use client'
import { signIn } from 'next-auth/react'
import React from 'react'

function OAuthLogin() {

  return (
    <div>
        <p onClick={()=>signIn('kakao')}>KAKAO LOGIN</p>
        <p onClick={()=>signIn('naver')}>Naver LOGIN</p>
    </div>
  )
}

export default OAuthLogin