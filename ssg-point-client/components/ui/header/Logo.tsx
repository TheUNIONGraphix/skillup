import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logoImg from '../../../public/assets/images/logo/logo_header.gif'

function Logo(props : {url: string, imgUrl?: string, imgAlt: string}) {
  const { url, imgUrl, imgAlt } = props
  return (
    <div className='header_logo w-14 h-auto object-cover'>
      <Link href={url}>
        <Image
            src={imgUrl ? imgUrl : logoImg }
            alt={imgAlt}
            width={200}
            height={100} 
            priority
        />
      </Link>
    </div>
  )
}

export default Logo