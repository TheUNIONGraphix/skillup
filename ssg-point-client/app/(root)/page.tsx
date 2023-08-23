import ProductList from '@/components/ProductList';
import { ProductDataType } from '@/types/productType';
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

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     {/* <h1>Home page</h1>
     <ProductList 
      data={myData.products}
     /> */}
    </main>
  )
}
