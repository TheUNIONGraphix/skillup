'use client'
import { LogInFormDataType } from '@/types/formType';
import { type } from 'os';
import React, { useEffect, useState } from 'react'

function LoginForm() {

  const autoLogin = localStorage.getItem('autoLogin');

  const [loginData, setLoginData] = useState<LogInFormDataType>({
    loginId: '',
    password: '',
    isAutoId: false,
    isAutoLogin: false
  });
  const [pwType, setPwType] = useState<boolean>(true);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if(name === 'isAutoId' && e.target.checked) {
      handleLocalStorage(loginData.loginId)
    }
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

  const handleLocalStorage = (loginId: String) => {
    localStorage.setItem('autoLogin', loginId.toString())
  }

  const handlePwType = () => {
    setPwType(!pwType)
  }

  useEffect(() => {
    console.log(typeof autoLogin)
    if(autoLogin) {
      setLoginData({
        ...loginData,
        loginId: autoLogin,
        isAutoId: true
      })
    }
  },[])

  return (
    <form className='flex flex-col gap-3 w-full px-10'>
      <input 
        type="text" 
        name="loginId" 
        id="loginId" 
        placeholder='아이디' 
        className='w-full rounded-3xl bg-white p-3 text-sm border border-black-500'
        defaultValue={autoLogin??''}
        onChange={handleOnChange}
      />
      <input 
        type={pwType ? 'password' : 'text'}
        name="password" 
        id="password" 
        className='w-full rounded-3xl bg-white p-3 text-sm border border-black-500'
        onChange={handleOnChange}
      />
      <button type="button" onClick={handlePwType}>
        view password
      </button>
      <div className='flex justify-between'>
        <div className='flex justify-start items-center gap-3'>
          <input 
            className='w-6 h-6 rounded-full checked:bg-black appearance-none border border-black-500 cursor-pointer'
            type="checkbox" 
            name="isAutoId" 
            id="isAutoId" 
            checked={loginData.isAutoId&&true}
            onChange={handleOnChange}
          />
          <label htmlFor="isAutoId">아이디 저장</label>
        </div>
        <div className='flex justify-start items-center gap-3'>
          <input 
            className='w-6 h-6 rounded-full checked:bg-black appearance-none border border-black-500 cursor-pointer'
            type="checkbox" 
            name="isAutoLogin" 
            id="isAutoLogin" 
            onChange={handleOnChange}/>
          <label htmlFor="isAutoLogin">자동 로그인</label>
        </div>
      </div>
      {/* <p>LOGIN ID : {loginData.loginId}</p>
      <p>PASSWORD : {loginData.password}</p>
      <p>IS AUTO ID : {loginData.isAutoId ? 'true' : 'false'}</p>
      <p>IS AUTO LOGIN : {loginData.isAutoLogin ? 'true' : 'false'}</p> */}
    </form>
  )
}

export default LoginForm