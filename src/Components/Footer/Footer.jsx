import {useLanguage} from '../../App.jsx'

export default function Footer(){

    const { language } = useLanguage();
    const { contactTitle, phone, email, finalSignature } = language.footer;
    const githubUrl = "https://github.com/KingRavo18";                                        

    return(
        <footer id="contact" className='bottom-[0] h-[16vw] text-[1.1vw] mt-[7vw] text-[rgb(199,_199,_199)] [box-shadow:0_-10px_5px_rgb(38,_36,_36)] bg-[rgb(36,_35,_35)]'>
            <div className='h-[14vw] p-[1vw]'>
                <h1 className='text-[2.5vw] text-left p-0 text-[white]'>{contactTitle}</h1>
                <p>{phone}</p>
                <p>{email}</p>
                <p>Github:{' '} 
                    <a href={githubUrl} className='[transition:0.5s] hover:text-[rgb(133,_39,_221)]' target="_blank" rel="noopener noreferrer">
                        github.com/KingRavo18
                    </a>
                </p>
            </div>
            <p className='text-center'>{new Date().getFullYear()} {finalSignature}</p>
        </footer>
    );
}