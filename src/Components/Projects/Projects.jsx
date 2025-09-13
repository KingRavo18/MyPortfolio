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
        <article ref={project} className={`bg-[#272626ff] xl:w-[42vw] w-[90vw] xl:h-[32vw] h-[120vw] border-[#7a2dc2ff] border-[2px] 
                                           rounded-[20px] [transition:0.5s] duration-2000 [box-shadow:10px_10px_5px_black]
                                           hover:border-[#8527ddff] hover:border-[2px] hover:ml-[0] hover:mr-[0] hover:-my-[1.5vw] 
                                           ${projectIsVisible ? "mt-0 opacity-100" : "mt-[5vw] opacity-0"}`}
        >
            <div className="xl:h-[16.5vw] h-[40vw] rounded-tr-[20px] rounded-tl-[20px] overflow-hidden">
                <img className="w-full h-full block object-cover" src={image} alt={alt || "Project image"} loading="lazy"/>
            </div>

            <h2 className="text-[white] text-[7vw] xl:text-[1.8vw] text-center">{title || "Project title"}</h2>

            <div className="h-[48vw] xl:h-[6.5vw] padding-[0.2vw] m-[0.7vw]">
                <p className="text-[#c7c7c7ff] text-[5vw] xl:text-[1.4vw]">{explanation || "Very good website"}</p>
            </div>

            {location && (
                <div className="w-full h-auto flex justify-center gap-5">
                    {buttons.map(({button, link}) => 
                        <a className="bg-[#7a2dc2ff] px-[10vw] xl:px-[2vw] py-[3vw] xl:py-[0.6vw] rounded-[10px]  cursor-pointer [transition:0.5s] 
                                      text-[white] text-[5vw] xl:text-[1.4vw] font-bold  
                                      hover:bg-[#8527ddff] hover:px-[2.2vw] hover:py-[0.7vw] hover:text-[1.5vw]" 
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