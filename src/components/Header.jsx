import { Link, useNavigate } from 'react-router-dom'
import { changeIsSchowCar } from '../store/slices/cart.slice'
import { useDispatch, useSelector } from 'react-redux'

const Header = () => {
  const {token} = useSelector(store => store.userInfo)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClickChangeShowCart = () => {
    if (!token) return navigate("/login")
    dispatch(changeIsSchowCar())
  }
  return (
    <section className="fixed z-10 top-0 left-0 w-full bg-white shadow-md py-2 px-6 flex items-center justify-between lg:py-6 ">
      <Link to={"/"} className=' text-2xl font-bold text-orange-500'>
        <h1 className=' transition duration-300 transform hover:scale-110 focus:scale-110'>
        e-commerce
        </h1>
      </Link>

      <nav className="flex gap-4 justify-end text-2xl text-gray-400 lg:gap-[100px] lg:text-3xl">
        <Link to={"/login"}><i className='bx bx-user lg:border-r-2 lg:border-gray-400 lg:pr-4  transition duration-300 transform hover:scale-110 focus:scale-110'></i></Link>
        

        <Link to={"/purchases"}><i className='bx bx-box lg:border-r-2 lg:border-gray-400 lg:pr-6 transition duration-300 transform hover:scale-110 focus:scale-110'></i></Link>

        <button onClick={handleClickChangeShowCart} ><i className='bx bx-cart lg:border-r-2 lg:border-gray-400 lg:pr-4  transition duration-300 transform hover:scale-110 focus:scale-110'></i></button>
      </nav>
      
    </section>
  )
}

export default Header