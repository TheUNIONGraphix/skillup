'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import HeaderUserStatus from './HeaderUserStatus'
import SideMenu from '../widget/SideMenu'
import Logo from '../ui/header/Logo'
import { usePathname } from 'next/navigation'
import { pageTitle } from '@/data/pageTitle'

function HeaderTop() {
  const [isLogin, setIsLogin] = useState<Boolean>(false)
  const [isOpened, setIsOpened] = useState<Boolean>(false)
  const [title, setTitle] = useState<String>('')
  const pathname = usePathname();

  const handleSideMenu = () => {
    setIsOpened(!isOpened)
    console.log(isOpened)
  }

  useEffect(() => {
    console.log(pathname.split('/')[1])
    const getTitle = () => {
      const result = pageTitle.find((item) => item.path === pathname.split('/')[1] )?.title
      if(result === undefined) return setTitle('신세계 포인트')
      setTitle(result)
    }
    getTitle()
  },[pathname])
  

  return (
    <>
    <SideMenu isOpened={isOpened} setIsOpened={setIsOpened}/>
    <div className='header_top w-auto flex justify-between items-center'>
      { pathname === '/' 
      ? 
      <Logo url={'/'} imgAlt={'신세계포인트 로고'}      
      /> 
      : <HeaderUserStatus title={title} /> }
      <nav className='header_menu'>
        <ul className='flex gap-4 justify-center items-center'>
          <li className='text-sm font-medium'>
            {isLogin ? 
            null
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