import React from 'react'
import Navbar from '../../components/navbar'

const index = () => {
  return (
    <>
   
    <Navbar logo={true}></Navbar>
    <div className='flex flex-col w-full justify-center items-center mt-[2rem] bg-[url("/bnboat.PNG")] bg-cover bg-center'>
        <div className='w-[500px] h-[300px] bg-blue-400'>

        </div>
        <div className='w-[500px] text-center mt-10'> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo facilisis nulla, non aliquet nulla facilisis at. Sed ullamcorper fermentum finibus. Cras consectetur nisi quis purus interdum, in vestibulum lorem aliquet. Vivamus id fermentum urna, eu placerat nulla. Morbi sollicitudin mauris elit, et euismod turpis iaculis non. Nulla sed convallis dolor. Nullam malesuada mollis orci, et congue risus bibendum viverra. Quisque consectetur ipsum in pharetra feugiat. Vivamus eget pretium enim, in lobortis eros. Pellentesque faucibus mi in tincidunt consectetur. Quisque accumsan congue ex, ac imperdiet turpis porttitor sed.
        </div>
    </div>
    </>
    
  )
}

export default index