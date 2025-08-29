import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Experience({func, title, ID, desc1, desc2, desc3, desc4, desc5, isOpen}) {

    const experianceData = [desc1, desc2, desc3, desc4, desc5];
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        isOpen ? setIsVisible(true) : setIsVisible(false);
    }, [isOpen]) 
    
    const { ref: experiance, inView: experianceIsVisible } = useInView({
        triggerOnce: true, 
        threshold: 0.1   
    });

    return(
        <>  
            <article onClick={func} 
                     ref={experiance}
                     className={`bg-[#7a2dc2ff] rounded-[20px] w-[70vw] flex cursor-pointer justify-center items-center h-[8vw] ml-[1vw] mr-[1vw] [transition:0.5s] z-5
                                hover:bg-[#272626] hover:border-[#7a2dc2] hover:border-[1px]            
                                active:bg-[#1d1c1c] active:border-[#7e0fe6] active:border-[1px] duration-2000
                                ${experianceIsVisible ? "mt-[4vw] opacity-100" : "mt-[9vw] opacity-0"}`}
            >
                <h1 className='text-[3.5vw] text-[white]'>{title || "Untitled"}</h1>
            </article>

        {isOpen && (
            <div id={ID} className={`w-[70vw] h-auto p-[1.8vw] bg-[#272626ff] border-[2px] border-[#7a2dc2ff] rounded-br-[20px] rounded-bl-[20px]
                                    duration-200 ${isVisible ? "mt-[-2.5vw] opacity-100" : "mt-[-8vw] opacity-0"} `}>
                {experianceData.map((dataRow, index) => (
                    <p key={index} className='text-[#c7c7c7ff] text-[1.7vw] mt-[20px] text-justify'>
                        {dataRow}
                    </p>
                ))}
            </div>
        )}
        </>
    );
}