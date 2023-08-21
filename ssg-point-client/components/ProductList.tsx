"use client";

import { ProductDataType, ProductType } from '@/types/productType';
import React, { useEffect, useState } from 'react'

function ProductList({data}: {data: ProductType[]}) {

  const [ myData, setMyData ] = useState<ProductDataType[]>();
  const [ productData, setProductData ] = useState<ProductType[]>();

  useEffect(() => {

    const getData = async () => {
      fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setMyData(data)
        setProductData(data.products)
      })
      .catch(err => console.log(err))
    }

    getData()
  },[])

  return (
    <div>
      <div className='my-20'>
        <h3>CSR get fetch Product</h3>
        {
          productData && productData.map((product, idx) => (
              <p key={idx}>{product.title}</p>
          ))
        }
    </div>
    <div className='my-20'>
    <h3>SSR Props Product</h3>
      {
        data && data.map((product, idx) => (
            <p key={idx}>{product.title}</p>
        ))
      }
    </div>
    </div>
  )
}

export default ProductList