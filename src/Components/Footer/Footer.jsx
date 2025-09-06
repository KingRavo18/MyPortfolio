import { useInView } from "react-intersection-observer";
import { useLanguage } from '../../App.jsx';

export default function Footer(){

    const { language } = useLanguage();
    const { contactTitle, phone, portfolioCode, email } = language.footer;

    const { ref: footer, inView: footerIsVisible } = useInView({
        triggerOnce: true, 
        threshold: 0.1   
    });

    return(
        <footer id="contact" ref={footer} className={`bg-[#242323ff] h-[50vw] xl:h-[16vw] p-[1vw] [box-shadow:0_-10px_5px_rgb(38,36,36)] duration-1000
                                                      text-[#c7c7c7ff] text-[4vw] xl:text-[1.1vw] 
                                                      ${footerIsVisible ? "mt-[7vw]" : "mt-[14vw]"}`}
        >
            <h1 className='text-[white] text-left p-0 text-[6vw] xl:text-[2.5vw]'>{contactTitle}</h1>
            <address>
                {phone}<br/>
                {email}<br/>
                Github:{' '} 
                <a href="https://github.com/KingRavo18" className='[transition:0.5s] hover:text-[#8527ddff]' target="_blank" rel="noopener noreferrer">
                    github.com/KingRavo18
                </a>
            </address>
            <a className="bg-[#7a2dc2ff] px-[10vw] xl:px-[2vw] py-[3vw] xl:py-[0.6vw] xl:float-right xl:mt-[-8vw] rounded-[10px] cursor-pointer [transition:0.5s]   
                          text-[white] text-[5vw] xl:text-[1.4vw] font-bold
                          hover:bg-[#8527ddff] hover:px-[2.2vw] hover:py-[0.7vw] hover:text-[1.5vw]" 
               href="https://github.com/KingRavo18/MyPortfolio" target="_blank" rel="noopener noreferrer" 
            >
                {portfolioCode}
            </a>
            
        </footer>
    );
}