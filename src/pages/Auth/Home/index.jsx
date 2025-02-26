import React from 'react'
import Button from '../../../components/Button'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex justify-evenly items-center flex-col h-full py-[6rem] lg:flex-row lg:justify-evenly w-full '>
      <div className='rounded-full'>
        <img src="/assets/home.jpg"
          className='rounded-full object-cover md:h-[20rem] md:w-[20rem] lg:h-[21rem] lg:w-[21rem] '
          alt="home" height={300} width={300} />
      </div>

      <div className='flex justify-center flex-col mt-auto lg:mt-0'>
        <p className='text-[1.5rem] font-bold text-center text-primary lg:text-[2.5rem]'>LANGUAGE <span className='text-sky'>FUSION</span> SYSTEM</p>
        <p className='text-xs text-center text-primary md:text-lg lg:text-lg'>"Where Learning English is Fun and Future-Ready!"</p>
        <div className='mx-auto mt-[3rem]'>
          <Link to={"/student-login"} className=' uppercase text-[1.7rem] lg:text-[1.5rem] font-bold bg-primary text-secondary px-[6rem] lg:px-[5rem] py-[1rem] rounded-full lg:hover:text-primary lg:hover:bg-secondary lg:border-3 lg:border-secondary transition-colors ease-linear delay-75 lg:hover:border-primary'>
            login
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Home
