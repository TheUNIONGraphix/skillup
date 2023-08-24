import LoginForm from '@/components/page/login/LoginForm'
import Logo from '@/components/ui/header/Logo'
import { getServerSession } from 'next-auth'
import React from 'react'
import { options } from '../api/auth/[...nextauth]/options'
// get path from 'path'

async function Login() {

  // get path
  const session = await getServerSession(options)
  console.log(session)
  
  return (
    <section className='flex flex-col items-center gap-10 pt-20'>
      <Logo url={'/'} imgAlt={'Login Logo'} />
      <LoginForm />
    </section>
  )
}

export default Login