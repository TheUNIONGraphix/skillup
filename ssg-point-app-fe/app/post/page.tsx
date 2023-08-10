'use client'
import { PostType } from '@/types/postType'
import { get } from 'http'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function PostList() {

    const [postList, setPostList] = useState<PostType[]>([])
    useEffect(() => {
        const getPostList = () => fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setPostList(data)
        })
        getPostList()
    }, [])

    const router = useRouter();
  return (
    <div className='mt-5'>
        {
            postList && postList.map((post: PostType) => (
                <div key={post.id} className='mt-5 mb-5'>
                    <p className='text-lg text-red-300'>{post.title}</p>
                    <button onClick={()=>router.push(`/post/${post.id}`)}>more</button>
                </div>
            ))
        }
    </div>
  )
}

export default PostList