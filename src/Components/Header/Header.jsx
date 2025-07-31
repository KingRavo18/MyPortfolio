import {useLanguage} from '../../App.jsx'
import lv_translations from '../../languages/lv_translations.json'
import en_translations from '../../languages/en_translations.json'

export default function Header(){

    const { language, setLanguage } = useLanguage();
    const { contact, projects, experience, introduction } = language.header;

    const navItems = [
        {href: "#contact", label: contact},
        {href: "#projects", label: projects},
        {href: "#experience", label: experience},
        {href: "#introduction", label: introduction},
    ]

    const translationButtons = [
        {languageSelected: en_translations, title: "EN"},
        {languageSelected: lv_translations, title: "LV"},
    ]

    return(
        <header className="fixed flex items-center justify-between px-[1.65vw] py-[0] w-full h-[5vw] 
                           bg-[rgb(36,_35,_35)] text-[rgb(199,_199,_199)] [box-shadow:0_10px_10px_rgb(38,_36,_36)] z-1000"
        >
            <nav className="language">
                <ul>
                    {translationButtons.map(({ languageSelected, title }) => (
                    <li className="float-right text-[1.35vw]" key={title}>
                        <button className="cursor-pointer p-[0.4vw] rounded-[5px] [transition:0.5s] text-[2vw]
                                           header-text-onHover hover:text-[2.1vw]
                                           header-text-onActive active:text-[2.2vw]" 
                                           onClick={() => setLanguage(languageSelected)}
                        >
                            {title}
                        </button>
                    </li>
                    ))}
                </ul>
            </nav>
            <nav className="navigation">
                <ul>
                    {navItems.map(({ href, label }) => (
                    <li className="float-right text-[1.35vw]" key={href}>
                        <a href={href}>
                            <button className="cursor-pointer p-[0.4vw] rounded-[5px] [transition:0.5s] 
                                               header-text-onHover hover:text-[1.4vw]
                                               header-text-onActive active:text-[1.45vw]"
                            >
                                {label}
                            </button>
                        </a>
                    </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}