import React from 'react'
import Hamburger from 'hamburger-react'
import { useState } from 'react'
import Image from 'next/image'
const Navbar = (props) => {
  const [isOpen, setOpen] = useState(false)
  const [navWidth, setNavWidth] = useState(0)

  return (
    <div className="w-full h-[100px] relative ">

        {props.logo?
          <div className='absolute right-[50%] translate-x-[50%] top-[50%] translate-y-[-50%]'>
             <Image
                src={'/logo.png'}
                width={300}
                height={200}
            >
            </Image>
          </div>
        :<></>}
      
        <div className='absolute right-10 top-[50%] translate-y-[-50%] text-black z-20'>
        <Hamburger toggled={isOpen} toggle={setOpen} color="black" onToggle={()=>{
          if(isOpen){
            //symbol is open
            console.log("openm")
            setNavWidth(0)
          }else{
            //symbol is close
            console.log("close")
            setNavWidth(300)
          }
        }}/>

        </div>

        <div className={'fixed bg-[#f1eeea] h-[100lvh] z-10 top-0 right-0 overflow-x-hidden transition-[width] ease-in delay-200 ' + (isOpen?"w-screen":"w-[0px]") +" sm:max-w-[500px] md:max-w-[400px]"}>
          <ul className='flex flex-col h-full items-center justify-center text-[30px] mt-[-50px]'>
            <li className='my-8'>About us</li>
            <li className='my-8'>Menu</li>
            
            <li className='my-8'>Contact</li>

          </ul>
        </div>
        
    </div>
  )
}

export default Navbar