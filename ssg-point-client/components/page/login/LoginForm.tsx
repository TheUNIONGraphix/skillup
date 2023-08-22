'use client'
import { LogInFormDataType } from '@/types/formType';
import React, { useState } from 'react'

function LoginForm() {

  const [loginData, setLoginData] = useState<LogInFormDataType>({
    loginId: '',
    password: '',
    isAutoId: false,
    isAutoLogin: false
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if(name === 'isAutoId' || name === 'isAutoLogin') {
      console.log(name, e.target.checked)
      setLoginData({
        ...loginData,
        [name]: e.target.checked
      })
    } else {
      console.log(name, value)
      setLoginData({
        ...loginData,
        [name]: value
      })
    }
  }

  return (
    <form className='w-full px-8'>
      <input 
        type="text" 
        name="loginId" 
        id="loginId" 
        placeholder='아이디' 
        className='w-full'
        onChange={handleOnChange}
      />
      <input 
        type="password" 
        name="password" 
        id="password" 
        className='w-full'
        onChange={handleOnChange}
      />
      <input 
        type="checkbox" 
        name="isAutoId" 
        id="isAutoId" 
        onChange={handleOnChange}
      />
      <label htmlFor="isAutoId">아이디 저장</label>
      <input type="checkbox" name="isAutoLogin" id="isAutoLogin" onChange={handleOnChange}/>
      <label htmlFor="isAutoLogin">자동 로그인</label>
      <p>LOGIN ID : {loginData.loginId}</p>
      <p>PASSWORD : {loginData.password}</p>
      <p>IS AUTO ID : {loginData.isAutoId ? 'true' : 'false'}</p>
      <p>IS AUTO LOGIN : {loginData.isAutoLogin ? 'true' : 'false'}</p>
    </form>
  )
}

export default LoginForm