import { useInView } from "react-intersection-observer";

export default function Projects({image, alt, title, explanation, location, location2, buttonName, button2Name}){

    const { ref: project, inView: projectIsVisible } = useInView({
        triggerOnce: true, 
        threshold: 0.1   
    });

    const buttons = [
        { button: buttonName, link: location },
        { button: button2Name, link: location2 },
    ]

    return(
        <article ref={project} className={`xl:h-[32vw] h-[110vw] xl:w-[42vw] w-[90vw] bg-[#272626ff] border-[2px] border-[#7a2dc2ff] 
                                           rounded-[20px] [transition:0.5s]
                                           hover:border-[2px] hover:border-[#8527ddff] hover:ml-[0] hover:mr-[0] hover:-my-[1.5vw] duration-2000
                                           ${projectIsVisible ? "mt-0 opacity-100" : "mt-[5vw] opacity-0"}`}
        >
            <div className="xl:h-[16.5vw] h-[40vw] rounded-tr-[20px] rounded-tl-[20px] overflow-hidden">
                <img className="w-full h-full object-cover block" src={image} alt={alt || "Project image"} loading="lazy"/>
            </div>

            <h2 className="text-center text-[7vw] xl:text-[1.8vw] text-[white]">{title || "Project title"}</h2>

            <div className="m-[0.7vw] h-[40vw] xl:h-[6.5vw] padding-[0.2vw]">
                <p className="text-[#c7c7c7ff] text-[5vw] xl:text-[1.4vw]">{explanation || "Very good website"}</p>
            </div>

            {location && (
                <div className="flex justify-center h-auto w-full gap-5">
                    {buttons.map(({button, link}) => 
                        <a className="px-[10vw] py-[3vw] xl:px-[2vw] xl:py-[0.6vw] bg-[#7a2dc2ff] cursor-pointer [transition:0.5s] font-bold 
                                      text-[5vw] xl:text-[1.4vw] rounded-[10px] text-[white]
                                      hover:px-[2.2vw] hover:py-[0.7vw] hover:bg-[#8527ddff] hover:text-[1.5vw]" 
                           href={link} target="_blank" rel="noopener noreferrer" key={button}
                        >
                            {button || "Visit"}
                        </a>
                    )}
                </div>
            )}
        </article>
    );
}