import React, { useEffect, useState } from 'react'
import { axiosEcommerce } from '../../utils/configAxios'
import SimilarProducs from './SimilarProducs'
import { useDispatch } from 'react-redux'
import { addProductCart } from '../../store/slices/cart.slice'


const ProductDetail = ({productId}) => {
    const [productsData, setProductsData] = useState()
    
    const [imageToShow, setImageToShow] = useState(0)

    const [couter, setCouter] = useState(1)
    
    const dispatch = useDispatch()

    const handleClickPlus = () => {
      const newCouter = couter + 1
      setCouter(newCouter)
    }

    const handleClickLess = () => {
        const newCouter = couter - 1
        if  (newCouter >= 1) {
          setCouter(newCouter)
        }
    }
    const stylePositionImages = {
      "0": "-ml-[0%]",
      "1": "-ml-[100%]",
      "2": "-ml-[200%]"
    }

    const handleClickAddToCart = () => {
        dispatch(addProductCart({ productId: productsData.id, quantity: couter}))
    }

    useEffect( () => {
        axiosEcommerce
          .get(`products/${productId}`)
          .then((res) => setProductsData(res.data))
          .catch((err) => console.log(err))
    }, [productId])

    const nextImage = () => {
      const newImagePosition = imageToShow + 1;
      if(newImagePosition <= 2 ){
        setImageToShow(newImagePosition)
      }else{
        setImageToShow(0)
      }
    }

    const previousImage = () => {
      const newImagePosition = imageToShow - 1;
      if(newImagePosition >= 0 ){
        setImageToShow(newImagePosition)
      }else{
        setImageToShow(2)
      }
    } 


  return (
    <>
    <section className='grid gap-6 sm:grid-cols-2 sm:p-8 sm:items-center mx-w-[1000px] mx-auto'>
     <section className=' overflow-hidden duration-200 relative '>
      <section className={`flex w-[300%] ${stylePositionImages[imageToShow]}`}>
          <div className='h-[300px] w-[calc(100%_/_3)] p-4'>
            <img className='h-full w-full object-contain' src={productsData?.images[0].url} alt="" />
          </div>
          <div className='h-[300px] w-[calc(100%_/_3)] p-4'>
            <img className='h-full w-full object-contain' src={productsData?.images[1].url} alt="" />
          </div>
          <div className='h-[300px] w-[calc(100%_/_3)] p-4'>
            <img className='h-full w-full object-contain' src={productsData?.images[2].url} alt="" />
          </div>
        </section>
        <i onClick={nextImage} className='bx bxs-right-arrow absolute top-1/2 -translate-x-1/2 right-2 text-red-600 hover:text-red-300 cursor-pointer '></i>
      <i onClick={previousImage} className='bx bxs-left-arrow absolute top-1/2 -translate-x-1/2 left-2 text-red-600 hover:text-red-300 cursor-pointer '></i>
      </section>

      
   
    <section>
    <h4 className='text-gray-400 font-bold text-xl mt-6'>{productsData?.brand}</h4>
      <h3 className=' font-bold text-xl ml-3'>{productsData?.title}</h3>

      <section className='grid grid-cols-2 mt-6'>
        <article>
          <h4 className='text-gray-400'>price</h4>
          <span className=' font-bold text-xl ml-3'>$ {productsData?.price}</span>
        </article>

        <article>
          <h4 className='text-gray-400'>Quantity</h4>
          <div className=' flex items-center'>
            <button onClick={handleClickLess} className='border-[1px] p-2 px-4 transition duration-300 transform hover:scale-110 focus:scale-110 hover:bg-orange-600 hover:text-white'>-</button>
            <span className='border-[1px] p-2 px-4 border-x-0'>{couter}</span>
            <button onClick={handleClickPlus} className='border-[1px] p-2 px-4 transition duration-300 transform hover:scale-110 focus:scale-110 hover:bg-orange-600 hover:text-white'>+</button>
          </div>

        </article>
      </section>

      <button onClick={handleClickAddToCart} className='w-full bg-orange-600 py-2  text-white hover:bg-orange-400 transition duration-300 transform hover:scale-90 rouded-sm mt-6'>
        Add to cart <i className='bx bx-cart'></i>
      </button>

      <p className='text-sm my-6'>
        {productsData?.description}
      </p>
    </section>
    </section>
    <SimilarProducs productId={productsData?.id} 
                    categoryId={productsData?.categoryId}/>
    </>
  )
}

export default ProductDetail