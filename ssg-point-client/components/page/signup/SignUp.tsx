'use client'
import React, { use, useEffect, useState } from 'react'
import PostCodeDaum from '../widgets/PostCodeDaum';
import { DaumAddressType } from '@/types/DaumAddressType';

function SignUp() {

    const [isView, setIsView] = useState<boolean>(false);
    const [address, setAddress] = useState<DaumAddressType>();

    const handleOpenModal = () => {
        setIsView(true);
    }

    useEffect(() => {
        if(address){
            // setIsView(false);
            console.log(address)
        }
    }, [address])

  return (
    <>    
        <PostCodeDaum isView={isView} setIsView={setIsView} setAddress={setAddress} />
        <section className='p-10'>
            <div className='mt-10 sm:mt-0'>
                <button onClick={handleOpenModal}>
                    open modal
                </button>
            </div>
            <p>{address?.address}</p>
            <p>{address?.zonecode}</p>
        </section>
    </>

  )
}

export default SignUp