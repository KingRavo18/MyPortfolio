import {useInView} from "react-intersection-observer";
import {useLanguage} from '../../App.jsx';

export default function Footer(){

    const { language } = useLanguage();
    const { contactTitle, phone, portfolioCode, email } = language.footer;

    const { ref: footer, inView: footerIsVisible } = useInView({
        triggerOnce: true, 
        threshold: 0.1   
    });

    return(
        <footer id="contact" ref={footer} className={`h-[50vw] xl:h-[16vw] text-[4vw] xl:text-[1.1vw] p-[1vw] text-[#c7c7c7ff] 
                                                      [box-shadow:0_-10px_5px_rgb(38,36,36)] bg-[#242323ff] duration-1000
                                                      ${footerIsVisible ? "mt-[7vw]" : "mt-[14vw]"}`}
        >
            <h1 className='text-[6vw] xl:text-[2.5vw] text-left p-0 text-[white]'>{contactTitle}</h1>
            <address>
                {phone}<br/>
                {email}<br/>
                Github:{' '} 
                <a href="https://github.com/KingRavo18" className='[transition:0.5s] hover:text-[#8527ddff]' target="_blank" rel="noopener noreferrer">
                    github.com/KingRavo18
                </a>
            </address>
            <a className="px-[10vw] xl:float-right py-[3vw] xl:px-[2vw] xl:py-[0.6vw] bg-[#7a2dc2ff] cursor-pointer mt-[5vw] xl:mt-[-8vw] 
                          [transition:0.5s] font-bold text-[5vw] xl:text-[1.4vw] rounded-[10px] text-[white]
                          hover:px-[2.2vw] hover:py-[0.7vw] hover:bg-[#8527ddff] hover:text-[1.5vw]" 
               href="https://github.com/KingRavo18/MyPortfolio" target="_blank" rel="noopener noreferrer" 
            >
                {portfolioCode}
            </a>
            
        </footer>
    );
}