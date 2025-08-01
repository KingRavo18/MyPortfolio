import {useLanguage} from '../../App.jsx'

export default function Footer(){

    const { language } = useLanguage();
    const { contactTitle, phone, email, finalSignature } = language.footer;
    const githubUrl = "https://github.com/KingRavo18";                                        

    return(
        <footer id="contact" className='bottom-[0] h-[16vw] text-[1.1vw] mt-[7vw] text-[#c7c7c7ff] [box-shadow:0_-10px_5px_rgb(38,36,36)] bg-[#242323ff]'>
            <div className='h-[14vw] p-[1vw]'>
                <h1 className='text-[2.5vw] text-left p-0 text-[white]'>{contactTitle}</h1>
                <p>{phone}</p>
                <p>{email}</p>
                <p>Github:{' '} 
                    <a href={githubUrl} className='[transition:0.5s] hover:text-[#8527ddff]' target="_blank" rel="noopener noreferrer">
                        github.com/KingRavo18
                    </a>
                </p>
            </div>
            <p className='text-center'>{finalSignature}</p>
        </footer>
    );
}