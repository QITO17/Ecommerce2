import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { LoginUser, logOut } from '../store/slices/userInfo.slice'
import { useDispatch, useSelector } from 'react-redux'


const Login = () => {
  const {register, handleSubmit} = useForm()
  const dispatch =  useDispatch()
  const {token, user} = useSelector(store => store.userInfo)


  const submit = (data) => {
      dispatch(LoginUser(data))
  }
  
    const handleClickLogOut = () => {
      dispatch(logOut())
    }

  return (
    <main className= 'mt-[30px] bg-gray-200 h-screen grid place-content-center px-2'>

      {
        token ? (
          <section className='bg-gray-100 p-12 rounded-md w-[270px] grid gap-6 text-center'>
            <h2 className=' text-2xl text-orange-600 font-bold'>Successful login</h2>
            <i className='bx bxs-user-circle text-6xl'></i>

            <h3 className=' capitalize font-semibold '>{user?.firstName} {user?.lastName}</h3>

            <button onClick={handleClickLogOut } className='bg-orange-600 text-whitw rounded-md py-2 px-6 mt-4 transition duration-300 transform hover:scale-110 focus:scale-110'>Logout</button>
          </section>
        ) : (
          <form onSubmit={handleSubmit(submit)} className='bg-gray-100 p-4 rounded-md max-w-[350px]'>
          <h3 className='font-semibold text-2xl  text-center mt-6'>Welcome! Enter your email and password to continue</h3>
  
          <section>
            <div className='bg-[#d8f5fd] rounded-md mt-4 mb-4 p-4'> 
            <h3 className=' text-center font-semibold'>Test data</h3>
  
            <div className=' ml-4'>
              <i className='bx bx-envelope text-xl mb-2 mt-2'></i>
              <span> john@gmail.com</span>
            </div>
            <div className=' ml-4'>
              <i className='bx bx-lock-alt text-xl'></i>
                <span>john1234</span>
            </div>
            </div>
            <div className='grid gap-2'> 
            <label htmlFor='email'>Email </label>
            <input className='border-[1px] border-gray-500 p-1 outline-none' id="email" 
            type="email" 
            {...register("email", {
              required: true
            })}
            />
            </div>
  
            <div className='grid gap-2'> 
            <label htmlFor='password'>Password </label>
            <input className='border-[1px] border-gray-500 p-1 outline-none' id="password" 
            type="password" 
            {...register("password", {
              required: true
            })}
            />
            </div>
          </section>
  
          <button className='w-full bg-orange-600 py-2  text-white hover:bg-orange-400 transition duration-300 transform hover:scale-90 rouded-sm mt-6'>
          Login
        </button>
  
        <span className='text-sm flex gap-3 mt-3'>Don't have an account? <Link to="#" className='text-[#2fa8f8]'>Sign up </Link></span>
        </form>
        )
      }


      

      
    </main>
  )
}

export default Login