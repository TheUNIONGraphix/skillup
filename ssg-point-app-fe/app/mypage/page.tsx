'use client'

import { UserType } from '@/types/userType'
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
    const [user, setUser] = useState<UserType>({} as UserType);

    useEffect(() => {

        const getMyData = () => fetch('http://10.10.10.97:8000/api/v1/user/2425fbee-cd46-407b-aa0d-68810bc14c98')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setUser(data)
        })

        getMyData()

    }, [])


  return (
    <div>
        { 
            user && 
            <div>
            <p>{user.loginId}</p>
            <p>{user.email}</p>
            </div>
        }
    </div>
  )
}

