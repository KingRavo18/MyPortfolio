import './Header.css'
import translations from '../Languages/translations.json';

function Header(){

    const t = translations.en.header;

    return(
        <header>
            <nav className="float-left">
                <ul>
                    <li><button className="text-[150%]">LV</button></li>
                    <li><button className="text-[150%]">EN</button></li>
                </ul>
            </nav>
            <nav className="Navigation ml-[60%]">
                <ul>
                    <li><a href="#contact"><button>{t.contact}</button></a></li>
                    <li><a href="#projects"><button>{t.projects}</button></a></li>
                    <li><a href="#experiance"><button>{t.experience}</button></a></li>
                    <li><a href="#introduction"><button>{t.introduction}</button></a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header