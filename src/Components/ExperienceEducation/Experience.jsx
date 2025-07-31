
export default function Experience({func, title, ID, desc1, isOpen}) {

    return(
        <>
            <article onClick={func} 
                     className="bg-[rgb(122,_45,_194)] rounded-[20px] w-[70vw] flex cursor-pointer justify-center items-center h-[8vw] ml-[1vw] mr-[1vw] my-[1vw] [transition:0.5s] z-5
                                flat-main-background-onHover flat-purple-border-onHover            
                                flat-main-background-onActive flat-purple-border-onActive"
            >
                <h1 className='text-[3.5vw] text-[white]'>{title || "Untitled"}</h1>
            </article>

        {isOpen && (
            <div id={ID} className='w-[70vw] h-auto mt-[-2.5vw] p-[1.8vw] bg-[rgb(39,_38,_38)] border-[2px] border-[solid] border-[rgb(122,45,194)] rounded-br-[20px] rounded-bl-[20px]'>
                <p className='text-[rgb(199,_199,_199)] text-[1.4vw]'>{desc1 || "No description available"}</p>
            </div>
        )}
        </>
    );
}