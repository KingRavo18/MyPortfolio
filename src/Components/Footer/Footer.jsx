import {useInView} from "react-intersection-observer";
import {useLanguage} from '../../App.jsx';

export default function Footer(){

    const { language } = useLanguage();
    const { contactTitle, phone, email, finalSignature } = language.footer;

    const { ref: footer, inView: footerIsVisible } = useInView({
        triggerOnce: true, 
        threshold: 0.1   
    });

    return(
        <footer id="contact" ref={footer} className={`h-[16vw] text-[1.1vw] p-[1vw] text-[#c7c7c7ff] 
                                                      [box-shadow:0_-10px_5px_rgb(38,36,36)] bg-[#242323ff] duration-1000
                                                      ${footerIsVisible ? "mt-[7vw]" : "mt-[14vw]"}`}
        >
            <h1 className='text-[2.5vw] text-left p-0 text-[white]'>{contactTitle}</h1>
            <address>
                {phone}<br/>
                {email}<br/>
                Github:{' '} 
                <a href="https://github.com/KingRavo18" className='[transition:0.5s] hover:text-[#8527ddff]' target="_blank" rel="noopener noreferrer">
                    github.com/KingRavo18
                </a>
            </address>
            <p className='text-center mt-[4vw]'>{finalSignature}</p>
        </footer>
    );
}