import ProductList from '@/components/ProductList';
import { ProductDataType } from '@/types/productType';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { options } from './api/auth/[...nextauth]/options';

async function getData() {
  const res = await fetch('https://dummyjson.com/products')
  
  if(!res.ok) {
    throw new Error(res.statusText)
  }

  return res.json()
}

export default async function Home() {

  const myData : ProductDataType = await getData()
  // console.log(myData)

  const session = await getServerSession(options)
  console.log(session)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
     {/* <h1>Home page</h1>
     <ProductList 
      data={myData.products}
     /> */}
     <nav style={{marginTop: '200px'}}>
        <ul className="flex gap-10">
          {
            session ?
            <>
            <li>
              <Link href="/event/ingevents">Event : {session.user.name} </Link>
            </li>
            <li>
              {session.user.name} 님 환영합니다.
            </li>
            <li>
              {session.user.token} 
            </li>
            <li>
              {session.user.uuid} 
            </li>
            </>
            : 
            <li> no session </li>
          }
          
        </ul>
     </nav>
    </main>
  )
}
