import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

function EventBannerCard({ id, img, title}: { id: number, img: string, title: string }) {
  return (
    <li>
      <Link href={""}>
        <Image src={img} alt={title} width={100} height={100}/>
      </Link>
    </li>
  )
}

export default EventBannerCard