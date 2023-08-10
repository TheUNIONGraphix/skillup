// 'use client'
import { PostType } from '@/types/postType';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

async function getPostListData({ postId }: { postId: string}): Promise<PostType> {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    if (!res.ok) {
        throw new Error('something wrong')
    }
    return res.json()
}

export default async function page({ params }: { params: { postId: string } }) {

    const postId = params.postId
    const postData:PostType = await getPostListData({ postId })

    
  return (
    <div className='mt-10'>
        <Link href='/post'>
            <p>go list</p>
        </Link>
        <h1>post page</h1>
        <p>postId: {postData.id}</p>
        <p>title: {postData.title}</p>
        <p>body: {postData.body}</p>
    </div>
  )
}

