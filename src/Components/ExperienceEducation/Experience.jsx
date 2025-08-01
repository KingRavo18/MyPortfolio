
export default function Experience({func, title, ID, desc1, desc2, desc3, desc4, desc5, isOpen}) {

    return(
        <>
            <article onClick={func} 
                     className="bg-[#7a2dc2ff] rounded-[20px] w-[70vw] flex cursor-pointer justify-center items-center h-[8vw] ml-[1vw] mr-[1vw] my-[1vw] [transition:0.5s] z-5
                                flat-main-background-onHover flat-purple-border-onHover            
                                flat-main-background-onActive flat-purple-border-onActive"
            >
                <h1 className='text-[3.5vw] text-[white]'>{title || "Untitled"}</h1>
            </article>

        {isOpen && (
            <div id={ID} className='w-[70vw] h-auto mt-[-2.5vw] p-[1.8vw] bg-[#272626ff] border-[2px] border-[solid] border-[#7a2dc2ff] rounded-br-[20px] rounded-bl-[20px]'>
                <p className='text-[#c7c7c7ff] text-[1.4vw] mt-[10px]'>{desc1 || "No description available"}</p>
                <p className='text-[#c7c7c7ff] text-[1.4vw] mt-[10px]'>{desc2 || "No description available"}</p>
                <p className='text-[#c7c7c7ff] text-[1.4vw] mt-[10px]'>{desc3 || "No description available"}</p>
                <p className='text-[#c7c7c7ff] text-[1.4vw] mt-[10px]'>{desc4 || "No description available"}</p>
                <p className='text-[#c7c7c7ff] text-[1.4vw] mt-[10px]'>{desc5 || "No description available"}</p>
            </div>
        )}
        </>
    );
}