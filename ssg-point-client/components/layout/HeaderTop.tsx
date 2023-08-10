'use client'

import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'

import HeaderUserStatus from './HeaderUserStatus'
import SideMenu from '../widget/SideMenu'

function HeaderTop() {
  const [isLogin, setIsLogin] = useState<Boolean>(false)
  const [isOpened, setIsOpened] = useState<Boolean>(false)

  const handleSideMenu = () => {
    setIsOpened(!isOpened)
    console.log(isOpened)
  }

  return (
    <>
    <SideMenu isOpened={isOpened} setIsOpened={setIsOpened}/>
    <div className='header_top w-auto flex justify-between items-center'>
      <div className='header_logo w-14 h-auto object-cover'>
        <Link href='/'>
          <Image
              src='https://m.shinsegaepoint.com/img/logo_header.840b502c.gif'
              alt='신세계포인트 로고'
              width={200}
              height={100} 
              priority
          />
        </Link>
      </div>
      <nav className='header_menu'>
        <ul className='flex gap-4 justify-center items-center'>
          <li className='text-sm font-medium'>
            {isLogin ? 
            <HeaderUserStatus />
            : <Link href='/login'>로그인</Link> }
          </li>
          <li onClick={handleSideMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 5H20" stroke="#121212" strokeWidth="2" strokeLinecap="round"/>
              <path d="M4 12L20 12" stroke="#121212" strokeWidth="2" strokeLinecap="round"/>
              <path d="M4 19H20" stroke="#121212" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </li>
        </ul>
      </nav>
    </div>
  </>
  )
}

export default HeaderTop