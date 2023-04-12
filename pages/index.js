
import AOS from 'aos';
import { useEffect } from "react"
import { useCallback } from "react"
import { useState } from "react"
import 'aos/dist/aos.css';
import Head from "next/head"
import Navbar from "../components/navbar"
import MainPage from "../components/main"
function AHKHome(){
    useEffect(() => {
        AOS.init()
}, [])

const [scrolled , setScrolled] = useState(false)
  const onScroll = useCallback(event => {
      const { pageYOffset, scrollY } = window;
      if(pageYOffset>0){
        setScrolled(true)
      }
      if(pageYOffset==0){
        setScrolled(false)

      }
      console.log("yOffset", pageYOffset, "scrollY", scrollY);
  }, []);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
       window.removeEventListener("scroll", onScroll, { passive: true });
    }
  }, []);

    return(
       <>
        <Head>
        <title>Bandar Nelayan</title>
        <link rel="icon" href="/sarlogo.png" />
        <script src="../path/to/flowbite/dist/flowbite.js"></script>
      

      </Head>
      <Navbar scrolled={scrolled} logo={false}></Navbar>
      <MainPage></MainPage>

    
       </>
    )
}
export default AHKHome