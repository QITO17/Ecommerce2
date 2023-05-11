import React, { useEffect, useState } from 'react'
import { axiosEcommerce } from '../../utils/configAxios'
import ProductsCart from '../home/ProductsCart'

const SimilarProducs = ({categoryId, productId}) => {
  const [similarProduct, setSimilarProduct] = useState([])


  useEffect ( () => {
    if (categoryId) {
      axiosEcommerce
    .get(`products?categoryId=${categoryId}`)
    .then((res) => {
      setSimilarProduct(res.data.filter(product => product.id !== productId))
    })
    .catch((err) => console.log(err))
    }
    
  }, [categoryId, productId])
  return (
    <section className='px-2 '>
      <h2 className='text-orange-600 text-xl font-bold mt-6 mb-6'>Discover similar items</h2>

      <section className='grid gap-6 auto-rows-auto grid-cols-[repeat(auto-fill,_2)]  justify-center  mb-[100px]'>
        {
          similarProduct.map(product => <ProductsCart  key={product.id} product={product}/>)
        }
      </section>
    </section>
    
  )
}

export default SimilarProducs