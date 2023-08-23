'use client'
import { ErroLogInFormType } from '@/types/errorType';
import { LogInFormDataType } from '@/types/formType';
import { signIn } from 'next-auth/react';
import React, { useEffect, useState } from 'react'

function LoginForm() {

  const [loginData, setLoginData] = useState<LogInFormDataType>({
    loginId: '',
    password: '',
    isAutoId: false,
    isAutoLogin: false
  });

  const [errorText, setErrorText] = useState<ErroLogInFormType>({
    loginId: '',
    password: '',
  });

  const [pwType, setPwType] = useState<boolean>(true);

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
      setErrorText({
        ...errorText,
        [name]: ''
      })
    }
  }

  const handleLocalStorage = (loginId: String) => {
    localStorage.setItem('autoLogin', loginId.toString())
  }

  const handlePwType = () => {
    setPwType(!pwType)
  }

  const handleLoginFetch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let errText: ErroLogInFormType = {
      loginId: '',
      password: '',
    }
    if(loginData.isAutoId) handleLocalStorage(loginData.loginId)
    if(loginData.loginId === '' || loginData.loginId === undefined) errText.loginId = '아이디를 입력해주세요'
    if(loginData.password === '' || loginData.password === undefined) errText.password = '비밀번호를 입력해주세요'
    if(errText.loginId !== '' || errText.password !== '') {
      setErrorText(errText)
      return
    } else {
      console.log(loginData)
      const result = await signIn('Credentials', {
        username: loginData.loginId,
        password: loginData.password,
        redirect: false,
        callbackUrl: '/'
      })
      console.log(result)
    }
  }

  useEffect(() => {
    if(typeof window !== 'undefined') {
      const autoLogin = localStorage.getItem('autoLogin') || '';
      console.log("localStorage",autoLogin.length > 0 ? autoLogin : 'no data');
      if(autoLogin) {
        setLoginData({
          ...loginData,
          loginId: autoLogin,
          isAutoId: true
        })
      }
    }    
  },[])

  return (
    <form className='flex flex-col gap-3 w-full px-10' onSubmit={handleLoginFetch}>
      <input 
        type="text" 
        name="loginId" 
        id="loginId" 
        placeholder='아이디' 
        className='w-full rounded-3xl bg-white p-3 text-sm border border-black-500'
        // defaultValue={loginData.loginId}
        onChange={handleOnChange}
      />
      <p className='text-red-500 text-xs'>{errorText.loginId}</p>
      <input 
        type={pwType ? 'password' : 'text'}
        name="password" 
        id="password" 
        className='w-full rounded-3xl bg-white p-3 text-sm border border-black-500'
        onChange={handleOnChange}
      />
      <p className='text-red-500 text-xs'>{errorText.password}</p>
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
      <button type="submit" className='w-full rounded-3xl bg-black text-white p-3 text-sm border border-black-500'>
        로그인
      </button>
      {/* <p>LOGIN ID : {loginData.loginId}</p>
      <p>PASSWORD : {loginData.password}</p>
      <p>IS AUTO ID : {loginData.isAutoId ? 'true' : 'false'}</p>
      <p>IS AUTO LOGIN : {loginData.isAutoLogin ? 'true' : 'false'}</p> */}
    </form>
  )
}

export default LoginForm