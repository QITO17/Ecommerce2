import {Outlet, Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Purchases from './pages/Purchases'
import Product from './pages/Product'
import Header from './components/Header'
import NotFound from './pages/NotFound'
import Loader from './components/layout/Louder'
import ProtectedAuth from './components/auth/ProtectedAuth'
import Footer from './components/product/Footer'
import Cart from './components/cart/Cart'


function App() {
  

  return (
    <section className='grid grid-rows-[auto_1fr] min-h-screen'>
      <Routes>
        
        <Route path='/' element={<>  <Header /> <Home /> <Footer /> </>}/> 

        <Route path='/login' element={<> <Header /> <Login /> <Footer /> </>}/> 

        <Route element={<ProtectedAuth />}>
          
          <Route path='/purchases' element={<> <Header /> <Purchases /> <Footer /> </>}/>

        </Route>

        

        <Route path='/products/:id' element={<> <Header /> <Product /> <Footer /> </>}/>
        
        <Route path='/*' element={<NotFound />}/>
        
  
      </Routes>
      <Cart />
      <Loader />
    </section>
  )
}

export default App
