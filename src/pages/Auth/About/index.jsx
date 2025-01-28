import React from 'react'

const About = () => {
  return (
    <div className='w-full h-full flex flex-col justify-between items-center py-[4rem] px-[1rem] lg:flex-row lg:justify-between lg:px-[4rem] lg:pe-[5rem]'>
      <div className='space-y-3 lg:w-1/2'>
        <p className='text-[2rem] uppercase font-bold text-center m-0 lg:text-[3rem]'>about us</p>
        <p className='text-xs text-center lg:text-lg'>Empowering Professional Communication through LRWR Skills</p>
        <p className='tracking-normal text-[0.9rem] text-justify font-semibold lg:text-[1.5rem]'>Welcome to our Language Fusion System! We are dedicated to enhancing your professional communication skills through a comprehensive and innovative approach. Our platform provides a unique blend of learning resources, practice exams, and tests designed to help you master Listening, Reading, Writing, and Speaking (LRWR) skills. Whether you're preparing for academic assessments, professional certifications, or simply seeking to improve your communication abilities, our system is tailored to meet your needs. Join us on a journey to elevate your language proficiency and succeed in your professional endeavors.</p>
      </div>
        <div className='lg:w-1/2 '>
        <img
        className='rounded-full object-cover lg:w-[27rem] lg:h-[27rem] lg:mx-auto'
        src="/public/assets/about.jpg" alt="about"  width={300} height={350} />
        </div>
    </div>
  )
}

export default About
