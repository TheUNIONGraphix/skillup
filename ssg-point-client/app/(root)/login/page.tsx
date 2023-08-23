import LoginForm from '@/components/page/login/LoginForm'
import Logo from '@/components/ui/header/Logo'
import React from 'react'
// get path from 'path'

function Login() {

  // get path

  
  return (
    <section className='flex flex-col items-center gap-10 pt-20'>
      <Logo url={'/'} imgAlt={'Login Logo'} />
      <LoginForm />
    </section>
  )
}

export default Login