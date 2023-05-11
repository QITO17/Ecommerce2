import React, { useEffect, useState } from 'react'
import ProductsCart from '../components/home/ProductsCart'
import { axiosEcommerce } from '../utils/configAxios'

const Home = () => {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [productName, setProductName] = useState("")
  const [showCategories, setShowCategories] = useState(false)
  const [currenCategory, setCurrenCategory] = useState(0)


    const handleSubmit = (e) => {
        e.preventDefault()
        const newProductsName = e.target.productName.value
        setProductName(newProductsName)
    }

    const productByName = products.filter((product) => product.title.toLowerCase().includes(productName.toLowerCase()))

    const handleShowCategories = () => {
      setShowCategories(!showCategories)
    }

    const handleClickCategory = (e) => {
      setCurrenCategory(Number(e.target.dataset.category))
      
    }

    

  useEffect(() => {
    axiosEcommerce
    .get("categories")
    .then((res) => setCategories(res.data))
    .catch((err) => console.log(err))
    
  }, [])

  useEffect(() => {
    if (currenCategory === 0)
    axiosEcommerce
    .get("products")
    .then((res) => setProducts(res.data))
    .catch((err) => console.log(err))
    
  }, [currenCategory])

  useEffect(() => {
    if (currenCategory) {
      axiosEcommerce
    .get(`products?categoryId=${currenCategory}`)
    .then((res) => setProducts(res.data))
    .catch((err) => console.log(err))
    }
  }, [currenCategory])
  

  return (

    
    
    <main className=' mt-[80px] lg:mt-[110px] px-6 py-8'>



      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-center mx-auto md:ml-[200px]">
          <input id='productName' placeholder="What are you looking for" type="text"className="border border-gray-300 py-3 px-6 text-sm  md:px-[200px] lg:px-[250px]"/>
          <button className="bg-orange-600 text-white px-4 py-3 transition duration-300 transform hover:scale-110 focus:scale-110 rounded-sm lg:px-10 md:px-10"><i className='bx bx-search bx-flashing' ></i></button>
        </div>

    
      <div className="flex justify-end mx-0 my-0 mr-auto mb-auto ml-10 mt-2 md:[200px] lg:mr-[270px]">
        <button className="text-lg text-gray-400 transition duration-300 transform hover:scale-110 focus:scale-110 mt-3"
          onClick={handleShowCategories}
        ><i className='bx bx-filter-alt'></i>
            Filters
        </button>
      </div>
    
      <ul 
          className={`relative bg-white shadow-xl transition-all duration-300 ease-in-out max-w-[1000px] mx-auto  ${
          showCategories ? "block" : "hidden"
        }`}
        >
        
        
        <div className="flex justify-end items-center px-4 py-2 border-b">
            
          <button
            className="text-gray-500 hover:text-orange-600 focus:outline-none"
            onClick={handleShowCategories}
          >
            <i className="bx bx-x"></i>
          </button>
        </div>
        
        
        
        
        
        <li onClick={handleClickCategory} data-category={0} className=' text-center  mt-2 font-semibold transition duration-300 transform hover:scale-110 focus:scale-110 cursor-pointer'>All</li>
        {categories.map((category) => (
          <li onClick={handleClickCategory} data-category={category.id} className=' text-center mt-2 font-semibold transition duration-300 transform hover:scale-110 focus:scale-110 cursor-pointer' key={category.id}>{category.name}</li>
          
        ))}
        
        
        
      </ul>
      
    

      </form>
      

      <section className='px-2 grid gap-10 auto-rows-auto grid-cols-[repeat(auto-fill,_250px)]  justify-center'>
        {
          productByName.map(product => <ProductsCart key={product.id} product={product}/>)
        }
      </section>


    </main>
  )
}

export default Home