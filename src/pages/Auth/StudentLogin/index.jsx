import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineVisibilityOff } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
const StudentLogin = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  return (
    <div className='w-full lg:h-full flex flex-col justify-between items-center py-[4rem] px-[1rem] lg:flex-row lg:justify-between lg:px-[4rem] lg:pe-[5rem]'>
      <div className="lg:w-1/2">
        <img src="/public/assets/student-login.png" alt="student" width={300} height={300}
        className="rounded-full object-cover lg:w-[27rem] lg:h-[27rem] lg:mx-auto"   />
      </div>
      <div className=' mt-[2rem] lg:m-0 lg:w-1/2 lg:px-[7rem]' >
        <div className="bg-lightform rounded-[4rem] p-[1.5rem] lg:py-[2rem] lg:max-w-[30rem] lg:p-[2rem]">
        <p className='text-[2rem] uppercase font-bold text-center text-primary lg:text-[2.4rem]'>Student Login</p>
        <form action="" className="flex flex-col" >
          <div className="flex bg-secondary p-3 rounded-full items-center gap-3 px-[1rem] my-[1rem]">
            <MdOutlineEmail className="text-primary font-bold size-[1.5rem]" />
            <input type="email" placeholder='Email' required
            className='text-primary text-xl font-semibold focus:outline-0 lg:text-2xl'  />
          </div>
          <div className="flex bg-secondary p-3 rounded-full items-center gap-3 px-[1rem] my-[1rem]">
            <RiLockPasswordLine className="text-primary font-bold size-[1.5rem]" />
            <input type={passwordVisibility ? "text" : "password"}
            placeholder='Password' required
            className='text-primary text-xl font-semibold focus:outline-0 lg:text-2xl'  />
            {
              passwordVisibility ?
              <MdOutlineVisibility
              onClick={() => setPasswordVisibility(!passwordVisibility)}
              className="text-primary font-bold size-[1.7rem]" /> :
              <MdOutlineVisibilityOff
              onClick={() => setPasswordVisibility(!passwordVisibility)}
              className="text-primary font-bold size-[1.7rem]" />
            }


          </div>
          <div className="flex justify-center mt-[1rem] lg:mt-[2rem]">
            <button className="text-secondary bg-primary py-[0.8rem] rounded-full text-2xl font-bold uppercase w-full lg:text-[1.7rem]">
              login
            </button>
          </div>
          <div className="pt-[1.5rem] px-[3rem] pb-[1rem] lg:px-[4rem]">
            <hr className="h-1 w-full bg-primary rounded-full" />
          </div>
          <div className="">
            <Link
            to={"/forgot-password"}
            >
            <p
            className=" text-center text-lg text-blue-700 font-semibold lg:text-xl"
            > Forgot password ?</p></Link>
          </div>
        </form>
        </div>
      </div>

    </div>
  )
}

export default StudentLogin

