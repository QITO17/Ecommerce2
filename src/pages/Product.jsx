import { useParams, Link } from 'react-router-dom'
import ProductDetail from '../components/product/ProductDetail'
import { useEffect, useState } from 'react'
import { axiosEcommerce } from '../utils/configAxios'

const Product = () => {
  const [productsData, setProductsData] = useState()


    


  const {id} = useParams()

  useEffect( () => {
    axiosEcommerce
      .get(`products/${id}`)
      .then((res) => setProductsData(res.data))
      .catch((err) => console.log(err))
}, [])
  return (
    <main className=' px-2 '> 
    <section className=' mt-[130px] flex gap-2 items-center px-8'>
      <Link to="/">Home</Link>
      <div className=' h-[7px] aspect-square bg-orange-600 rounded-full'></div>
      <span className='font-bold'>{productsData?.category.name}</span>
    </section>

    <ProductDetail productId={id}/>

    
    </main>
  )
}

export default Product