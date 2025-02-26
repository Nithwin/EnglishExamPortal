import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
const Contact = () => {
  return (
    <div className='w-full lg:h-full py-[5rem] px-[1.5rem] md:px-[10rem] flex flex-col  lg:flex-row lg:items-center lg:justify-between lg:px-[8rem]'>
      <div className='bg-lightform rounded-[4rem] p-[1.5rem] h-fit' >
        <p className='text-[2rem] uppercase font-bold text-center text-primary lg:text-[1.7rem]'>contact us</p>
        <form action="" className="" >
          <div className="flex bg-secondary p-3 rounded-full items-center gap-3 px-[1.5rem] my-[1rem]">
            <IoPersonOutline className="text-primary font-bold size-[1.5rem] lg:size-[1.2rem]" />
            <input type="text" placeholder='Name' required
            className='text-primary  text-lg font-semibold focus:outline-0'  />
          </div>
          <div className="flex bg-secondary p-3 rounded-full items-center gap-3 px-[1.5rem] my-[1rem]">
            <MdOutlineEmail className="text-primary font-bold size-[1.5rem] lg:size-[1.2rem]" />
            <input type="email" placeholder='Email' required
            className='text-primary text-lg font-semibold focus:outline-0'  />
          </div>
          <div className="flex bg-secondary p-3 rounded-4xl items-center gap-3 px-[1.5rem] my-[1rem]">
              <textarea name="" id="" cols="30" rows="5" placeholder='Message'
            className='text-primary text-lg font-semibold focus:outline-0 resize-none'
            ></textarea>
          </div>
          <div className="flex justify-center mt-[2.5rem] lg:mt-0">
            <button className="text-secondary bg-primary px-[3rem] py-[0.6rem] rounded-full text-xl font-bold uppercase">
              send message
            </button>
          </div>

        </form>
      </div>
      <div className="hidden lg:block overflow-hidden rounded-full lg:w-[22rem] lg:h-[22rem]">
        <img src="/public/assets/contact.jpg" alt="" width={400}
        className="object-top scale-150 translate-y-11"   />
      </div>
    </div>
  )
}

export default Contact
