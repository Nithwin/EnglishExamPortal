import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar';

const AuthLayout = () => {
  const isAuthenticated = false;
  return (
    <>
      {
        isAuthenticated ?
        (<Navigate to={"/"} />)
          :(
          <section>
            <Navbar />
            <section className='h-svh pt-[4rem]'>
              <Outlet />
            </section>
          </section>
          )
      }
    </>
  )
}

export default AuthLayout
