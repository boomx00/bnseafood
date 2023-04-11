import React from 'react'
import Image from 'next/image'

const MainPage = () => {
  return (
    <div className='w-full h-full  flex flex-col justify-center items-center'>
        <div className='w-[300px] h-[300px] sm:w-[300px] sm:h-[300px]  relative'>
            <Image
                src={'/bnhead.png'}
                width={500}
                height={500}
            >
            </Image>
        </div>
        <div className='w-[300px] h-[70px] sm:w-[450px] sm:h-[100px]  relative'>
            <Image
                src={'/logo.png'}
                fill
            >
            </Image>
        </div>
        <div className='mt-16 text-center'>
            <p>Opening Hours</p>
            <p>Monday-Friday: 9:00 - 20:00</p>
            <p>Saturday-Sunday: 9:00 - 23:00</p>
        </div>
        <div className='mt-20'>
            <p>Make an Inquiry</p>
        </div>
    </div>
  )
}

export default MainPage