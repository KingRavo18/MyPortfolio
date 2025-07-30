import './Experience.css'

export default function Experience({func, title, ID, desc1, isOpen}) {

    return(
        <>
            <article onClick={func} 
                     className="flat-purple-background rounded-[20px] w-[70vw] flex cursor-pointer justify-center items-center h-[8vw] ml-[1vw] mr-[1vw] my-[1vw] [transition:0.5s]
                                hover:bg-[rgb(39,38,38)] hover:border-[2px] hover:border-[solid] hover:border-[rgb(122,45,194)]            
                                active:bg-[rgba(71,_69,_69,_0.418)] active:border-[2px] active:border-[solid] active:border-[rgb(126,15,230)]"
            >
                <h1 className='text-[3.5vw]'>{title || "Untitled"}</h1>
            </article>

        {isOpen && (
            <div id={ID} className='slidedown'>
                <p>{desc1 || "No description available"}</p>
            </div>
        )}
        </>
    );
}