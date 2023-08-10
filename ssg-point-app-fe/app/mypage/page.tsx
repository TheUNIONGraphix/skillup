'use client'

import { UserType } from '@/types/userType'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function MyPage() {

    // const handleClick = () => {
    //     console.log('click')
    // }

    // ssr
    // const getMyData = fetch('http://10.10.10.97:8000/api/v1/user/2425fbee-cd46-407b-aa0d-68810bc14c98')
    // .then(response => response.json())
    // .then(json => console.log(json))

    // csr
    // const [user, setUser] = useState<UserType>({} as UserType);

    const router = useRouter();
    const pathName = usePathname();
    console.log(router)
    console.log(pathName)

    const handleBack = () => {
        router.back()
    }

    const handlePush = () => {
        for(let i = 0; i < 10000000; i++) {
            // test
        }
        router.push('/')
    }

    // useEffect(() => {

    //     const getMyData = () => fetch('http://localhost:8000/api/v1/user/2425fbee-cd46-407b-aa0d-68810bc14c98')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setUser(data)
    //     })

    //     getMyData()

    // }, [])


  return (
    <div className="mt-5">
        <h1 onClick={handleBack}>Go Back</h1>
        <h2 onClick={handlePush}>go home</h2>
    </div>
  )
}

