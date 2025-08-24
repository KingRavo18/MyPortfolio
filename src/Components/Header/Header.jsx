import {useLanguage} from '../../App.jsx';
import lv_translations from '../../languages/lv_translations.json';
import en_translations from '../../languages/en_translations.json';

export default function Header(){

    const { language, setLanguage } = useLanguage();
    const { contact, projects, experience, introduction, hoverEN, hoverLV } = language.header;

    const navItems = [
        {href: "#contact", label: contact},
        {href: "#projects", label: projects},
        {href: "#experience", label: experience},
        {href: "#introduction", label: introduction},
    ]

    const translationButtons = [
        {languageSelected: lv_translations, title: "LV", hover: hoverLV},
        {languageSelected: en_translations, title: "EN", hover: hoverEN},
    ]

    return(
        <header className="fixed flex items-center justify-between px-[1.65vw] py-[0] w-full h-[5vw] [animation-name:headerSlidingDown] [animation-duration:0.5s] 
                           bg-[#242323ff] text-[#c7c7c7ff] [box-shadow:0_10px_10px_rgb(38,36,36)] z-1000"
        >
            <nav className="language">
                <ul>
                    {translationButtons.map(({ languageSelected, title, hover }) => (
                    <li className="float-right text-[1.35vw]" key={title}>
                        <button className="cursor-pointer p-[0.4vw] rounded-[5px] [transition:0.5s] text-[2vw]
                                           hover:text-[#8527dd] hover:bg-[#35333380] hover:text-[2.1vw]
                                           active:text-[#8433cf] active:bg-[#4745456b] active:text-[2.2vw]" 
                                           onClick={() => setLanguage(languageSelected)}
                                           title={hover}
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
                                               hover:text-[#8527dd] hover:bg-[#35333380] hover:text-[1.4vw]
                                               active:text-[#8433cf] active:bg-[#4745456b] active:text-[1.45vw]"
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