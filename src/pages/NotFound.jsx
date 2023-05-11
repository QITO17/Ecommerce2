import React from 'react'
import { Link } from 'react-router-dom'


const NotFound = () => {
  return (
    
    <section className=' p-2 px-2'>
        <header>
      <h1 className="titulo font-bold md:mt-[50px]">
        404 NOT FOUND
      </h1>
    </header>
    
    <main>
      <img className='imagen' src="/images/Scarecrow.png" alt="" />
      <div className="texto md:mt-[100px]">
      <h2 >
        I have bad news for you 
      </h2>

      <p>
        The page you are looking for might be removed or is temporarily unavailable
      </p>
    </div>
    </main>

    <Link to={"/"} className="button mt-[100px] md:mt-5">
      Back to homepage
    </Link>

    <footer className='footer md:mb-[80px]'>
      created by username <a className="ancla" target="_blank" href="https://www.linkedin.com/in/brandoll-guzman-872137266/">brandoll-guzman</a>
    </footer>
        
    </section>

    
  )
}

export default NotFound