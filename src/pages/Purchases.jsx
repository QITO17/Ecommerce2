import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { axiosEcommerce, getConfig } from '../utils/configAxios' 
import PurchasesCart from '../components/purchases/PurchasesCart'

const Purchases = () => {
  const [purchases, setPurchases] = useState([])

  useEffect( () => {
      axiosEcommerce
        .get("purchases", getConfig())
        .then((res) => {
          const orderpurchases = res.data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
          setPurchases(orderpurchases)
        })
        .catch((err) => console.log(err))
  }, [])


  return (
    <main className='px-6 max-w-[1000px] mx-auto'>
      <section className=' mt-[100px] flex gap-2 items-center'>
      <Link to="/">Home</Link>
      <div className=' h-[7px] aspect-square bg-orange-600 rounded-full'></div>
      <span className='font-bold'>Purchases</span>
      
    </section>

    <h1 className=' font-bold text-2xl mt-6'>My purchases</h1>

    <section className=' grid gap-6 py-4'>

      {
        purchases.map(purchase => <PurchasesCart key={purchase.id} purchase={purchase}/>)
      }

    </section>
    </main>
  )
}

export default Purchases