import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addProductCart } from '../../store/slices/cart.slice'

const ProductsCart = ({product}) => {

  const dispatch = useDispatch()

  const handleClickProducts = (e) => {
    e.preventDefault()
    dispatch(addProductCart({ productId: product.id, quantity: 1}))
  }
  return (
    
    <Link to={`/products/${product.id}`} className=' border-[1px] border-gray-300 rounded-lg mt-10'>
        
        <div className='relative group p-6 border-b-[1px] border-gray-300 h-[200px] overflow-hidden'>

        

            <img className='h-full w-full group-hover:opacity-0 transition-opacity  duration-500 object-contain' src={product.images[0].url} alt="" />
            <img className='absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity  duration-500h-full w-full object-contain' src={product.images[1].url} alt="" />
        
        
        </div>

        <section className='p-6 relative'>
            <h4 className=' text-gray-400 font-bold text-xl'>{product.brand}</h4>
              <h3 className='font-bold ml-3 mb-4 text-gray-500'>{product.title}</h3>

              <h4 className='text-gray-400 '>Price</h4>
                <span className='font-bold text-xl ml-2 text-gray-500'>$ {product.price}</span>

                <button onClick={handleClickProducts} className='absolute right-5 bottom-4 bg-orange-500 text-white text-xl rounded-full w-[45px] aspect-square hover:bg-orange-600 transition duration-300 transform hover:scale-110 focus:scale-110'><i className='bx bxs-cart-download' ></i></button>
        </section>
    </Link>
    
  )
}

export default ProductsCart