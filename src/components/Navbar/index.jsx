import React, { useState } from 'react'
import { NavigationList } from '../../data/data'
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import Button from '../Button';
import { Link, useLocation } from 'react-router-dom';
const Navbar = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  console.log(pathname);
  return (
    <section className='fixed top-0 left-0 w-full bg-primary py-[0.5rem] lg:p-[1rem]'>
        <div className='flex items-center lg:justify-between'>
          <div className='flex items-center'>
            <img
            className='w-16 lg:w-13'
            src={"/assets/logo.png"} alt="logo" height={64} width={64} />
            <p className='text-secondary text-[2rem] font-bold lg:text-[1.5rem]'>Linglee</p>
          </div>
        <nav
        className={`${openNavigation ? 'flex' : 'hidden'} fixed top-[5rem] left-0 right-0 bottom-0 bg-lightblue lg:flex lg:bg-transparent lg:static lg:top-0`}>
          <ul className='relative flex justify-evenly items-center flex-col m-auto h-full lg:flex-row'>
            {
              NavigationList.map((item,index) => (
                <li
                key={index}
                className='py-[2rem] lg:ps-[5rem] lg:p-0'>
                  <Link
                  to={item.to}
                  key={item}
                  onClick={() => setOpenNavigation(false)}
                  className={`block text-3xl lg:text-lg lg:font-normal font-bold uppercase ${item.isButton ? ` bg-primary py-3 px-10 rounded-full lg:hidden text-secondary`
                :
                `text-primary lg:border-b-2 lg:border-primary lg:hover:transition-all lg:hover:border-secondary lg:hover:ease-linear lg:hover:delay-100 ${(pathname.pathname === item.to) ? 'lg:text-secondary' : 'lg:text-gray-400'} lg:text-blue-400`} cursor-pointer`}>
                  {item.name}

                </Link>
                </li>
              ))
            }
          </ul>
          <div className='hidden lg:flex items-center px-3'>
            <Link to={"/admin-login"} className="uppercase cursor-pointer rounded-full hover:bg-primary hover:text-secondary border-2 border-secondary transition-colors ease-in delay-100 ext-primary bg-secondary py-2 px-[1.5rem] text-lg font-semibold ">Admin</Link>
          </div>
        </nav>

          <div className=' bg-secondary p-2 rounded-l-4xl px-4 cursor-pointer ml-auto lg:hidden'>
            {
              openNavigation ?
              <RxCross2 className='text-primary size-10 ' onClick={() => setOpenNavigation(false)} />
              : <TiThMenu className='text-primary size-10 ' onClick={() => setOpenNavigation(true)} />
            }
          </div>

        </div>
    </section>
  )
}

export default Navbar

