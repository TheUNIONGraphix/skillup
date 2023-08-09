import React from 'react'
import Link from 'next/link'
import { headerMenuDatas } from '@/datas/headerMenuDatas';
import { HeaderMenuType } from '@/types/headerMenuType';


function Header() {

    const renderMenu = headerMenuDatas;

  return (
    <header>
        <nav>
            <ul className='flex gap-3 p-4 justify-center'>
                {
                    renderMenu.map((menu: HeaderMenuType) => (
                        <li key={menu.id}>
                            <Link href={menu.url}>{menu.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    </header>
  )
}

export default Header