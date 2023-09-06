'use client'
import React, { use, useEffect, useState } from 'react'
import PostCodeDaum from '../widgets/PostCodeDaum';
import { DaumAddressType } from '@/types/DaumAddressType';
import SsgCheckbox from '@/components/ui/SsgCheckbox';

export interface agreeType {
    id: number;
    title: string;
    content: string;
    isCheck: boolean;
}

function SignUp() {

    const agreeList = [
        {
            id: 1,
            title: '이용약관 동의',
            content: '이용약관 동의 내용',
            isCheck : false
        },
        {
            id: 2,
            title: '뭐라고 ??',
            content: '이용약관 동의 내용',
            isCheck : false
        },
        {
            id: 3,
            title: '나도 동의',
            content: '이용약관 동의 내용',
            isCheck : false
        }
    ]
    const [isView, setIsView] = useState<boolean>(false);
    const [address, setAddress] = useState<DaumAddressType>();
    const [agreeDataList, setAgreeDataList] = useState<agreeType[]>(agreeList as agreeType[]);
    const [isAllChecked, setIsAllChecked] = useState<boolean>(false);

    const handleChecked = (id:number, isCheck:boolean) => {

        const newAgreeList = [...agreeDataList];
        newAgreeList.map((item) => {
            if(item.id === id){
                item.isCheck = isCheck;
            }
        })
        setAgreeDataList(newAgreeList);
    }

    const handleAllChecked = () => {
        const newAgreeList = [...agreeDataList];
        newAgreeList.map((item) => {
            item.isCheck = !isAllChecked;
        })
        setAgreeDataList(newAgreeList);
        setIsAllChecked(!isAllChecked);
    }

    const handleOpenModal = () => {
        setIsView(true);
    }

    const handleUpdateFetch = () => {
        fetch('http://localhost:3000/api/user', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify({
                name: 'test',
                age: 30,
            }),
        }).then((res) => {
            console.log(res)
        }
        )
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
            <SsgCheckbox
                checkId={0}
                label={'전체 동의'}
                name={'전체 동의'}
                checked={agreeDataList.every((item) => item.isCheck)}
                handler={handleAllChecked}
                size={2}

            />
            {
                agreeDataList.map((item:agreeType) => {
                    return (
                        <SsgCheckbox 
                            key={item.id}
                            checkId={item.id}
                            label={item.title}
                            name={item.title}
                            checked={item.isCheck}
                            handler={handleChecked}
                            size={2}
                        />
                    )
                })
            }
           
        </section>
    </>

  )
}

export default SignUp