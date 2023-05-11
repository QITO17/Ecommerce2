import { useDispatch, useSelector } from 'react-redux'
import { changeIsSchowCar, getCartProducts, purchasesCart } from '../../store/slices/cart.slice'
import { useEffect } from 'react'
import CartProduct from './CartProduct'



const Cart = () => {
  

  const {isShowCart, products} =  useSelector(store => store.cart)

  const {token} = useSelector( store => store.userInfo)
  
  const dispatch = useDispatch()


  const handleClickChangeShowCart = () => {
    dispatch(changeIsSchowCar())
  }

  const totalPrice = products.reduce((acc, curr) => acc + (curr.quantity * curr.product.price), 0)

  const handleClickCheckout = () => {
    dispatch(purchasesCart())
  }

  useEffect(() => {
      if (isShowCart) {
      dispatch(getCartProducts())
      }
  }, [isShowCart])


  return (
    <section className={` fixed top-0 bg-white h-screen w-[300px] shadow-xl ${isShowCart && token ? "right-0" : "-right-full"} duration-500 p-3 grid grid-rows-[auto_1fr_auto]`}>
        
        <h2 className='text-xl font-bold text-orange-500 mt-[50px] lg:mt-[90px] mr-[130px]'>Shopping cart</h2>
        <i onClick={handleClickChangeShowCart} className="bx bx-x text-gray-500 hover:text-orange-600 focus:outline-none text-xl absolute top-16 lg:top-[100px] right-3"></i>
          

          {/* productos del carrito */}
          <section className=' overflow-y-auto grid gap-10 content-start'>
            {
              products.map(product => <CartProduct key={product.id} product={product} />)
            }
          </section>

          <section className='grid grid-cols-2 py-6 border-t-[1px] border-gray-400'>
            <span className='text-gray-400 mb-6'>Total</span>
            <h4 className='text-end font-semibold mb-6'>$ {totalPrice}</h4>
            <button onClick={handleClickCheckout} className='col-span-2 ml-4 rounded-md w-[250px] bg-orange-600 py-2 text-white hover:bg-orange-400 transition duration-300 transform hover:scale-90 rouded-sm '>
            Checkout
            </button>
          </section>
    </section>
  )
}

export default Cart