// 'use client'
import { usePathname } from 'next/navigation';
import React from 'react'

function page({ params }: { params: { postId: string } }) {

    const postId = params.postId
    const postData = fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        return data
    })
  return (
    <div className='mt-10'>
        <h1>post page</h1>
        <p>postId: {postId}</p>
        {/* <p>user : {postData}</p> */}
    </div>
  )
}

export default page