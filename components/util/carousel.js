import Image from "next/image"
import { useState,useEffect, useRef,useImperativeHandle, forwardRef} from "react"

const AHKCarousel = forwardRef((props,ref)=>{
    useImperativeHandle(ref, () => ({

        scrollCarousel(idx) {
            elementRef.current.scrollLeft=elementRef.current.clientWidth*idx
        }
    
      }));
    const elementRef = useRef();
    const [scrollX,setScrollX] = useState("")
    const imageCarousel = [
        '/food1edit.jpg',
        '/food2.jpg',
        '/food3.jpg',
        '/food4.jpg'
    ]
    
    return(
 <div 
        className="flex flex-row snap-mandatory !overflow-y-hidden !overflow-x-hidden scroll-smooth bg-black snap-x indiana-scroll-container indiana-scroll-container--hidescrollbars indiana-scroll-container--native-scroll md:max-h-[350px] sm:max-h-[300px] lg:max-h-[450px] xl:max-h-[500px]"
        // onScroll={(e)=>console.log(e.target.scrollLeft)}
        ref={elementRef}
        >
            {
                props.images.map(function(item){
                    return <div className="w-full flex-shrink-0 transform cursor-grab snap-center max-h-[200px] md:max-h-[350px] sm:max-h-[300px] lg:max-h-[450px] xl:max-h-[500px]">
                    <Image
                        src={item}
                        width={100}
                        height={500}
                        className="w-[100%] sm:object-fill sm:w-full "
                        unoptimized={true}
                        />
                    </div>
                })
            }
            
        </div>
       
       
    )
})
export default AHKCarousel