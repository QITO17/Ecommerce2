import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteProductCart } from '../../store/slices/cart.slice'

const CartProduct = ({product}) => {
  const dispatch = useDispatch()

  const handleClickDelete = () => {
    dispatch(deleteProductCart(product.id))
  }


  return (
    <article className='mt-4'>
        <section className='grid grid-cols-[auto_1fr_auto] gap-2'>
            <div className=' h-[90px] aspect-square row-span-2'>
                <img className='w-full h-full object-contain p-2 transition duration-300 transform hover:scale-110' src={product.product.images[0].url} alt="" />
            </div>
            <h4>
                {product.product.title}
            </h4>
                
            <i onClick={handleClickDelete} className='bx bx-trash text-orange-500 hover:text-orange-700 transition duration-300 transform hover:scale-110 cursor-pointer'></i>

            <div className=' flex items-center'>
            <button className='border-[1px] p-2 px-4 transition duration-300 transform hover:scale-110 focus:scale-110 hover:bg-orange-600 hover:text-white'>-</button>
            <span className='border-[1px] p-2 px-4 border-x-0'>{product.quantity}</span>
            <button className='border-[1px] p-2 px-4 transition duration-300 transform hover:scale-110 focus:scale-110 hover:bg-orange-600 hover:text-white'>+</button>
          </div>
        </section>

        <h4 className='mt-2 text-end'>Total: <span className='font-bold'>${(product.quantity * product.product.price).toFixed(1)}</span></h4>
    </article>
  )
}

export default CartProduct