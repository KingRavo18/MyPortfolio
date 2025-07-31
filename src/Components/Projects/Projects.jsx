
export default function Projects({image, alt, title, explanation, location, buttonName}){

    return(
        <article className="h-[32vw] w-[42vw] bg-[rgb(39,_38,_38)] border-[2px] border-[solid] border-[rgb(122,45,194)] rounded-[20px] [transition:0.5s]
                            hover:border-[2px] hover:border-[solid] hover:border-[rgb(133,39,221)] hover:ml-[0] hover:mr-[0] hover:-my-[1.5vw]"
        >
            <div className="h-[16.5vw] rounded-tr-[20px] rounded-tl-[20px] overflow-hidden">
                <img className="w-full h-full object-cover block" src={image} alt={alt || "Project image"} loading="lazy"/>
            </div>

            <h2 className="text-center text-[1.8vw] text-[white]">{title || "Project title"}</h2>

            <div className="m-[0.7vw] h-[6.5vw]">
                <p className="text-[rgb(199,_199,_199)] text-[1.4vw]">{explanation || "Very good website"}</p>
            </div>

            {location && (
                <div className="flex justify-center h-auto w-full">
                    <a className="px-[2vw] py-[0.6vw] bg-[rgb(122,_45,_194)] cursor-pointer [transition:0.5s] font-bold text-[1.4vw] rounded-[10px] text-[white]
                                  hover:px-[2.2vw] hover:py-[0.7vw] hover:bg-[rgb(133,_39,_221)] hover:text-[1.5vw]" 
                       href={location} target="_blank" rel="noopener noreferrer"
                    >
                        {buttonName || "Visit"}
                    </a>
                </div>
            )}
        </article>
    );
}