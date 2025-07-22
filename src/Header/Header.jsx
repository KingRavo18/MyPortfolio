import './Header.css'
import translations from '../languages/translations.json'

export default function Header(){

    const { contact, projects, experience, introduction } = translations.en.header;
    const navItems = [
        {href: "#contact", label: contact},
        {href: "#projects", label: projects},
        {href: "#experience", label: experience},
        {href: "#introduction", label: introduction},
    ]

    return(
        <header>
            <nav className="float-left">
                <ul>
                    <li>
                        <button className="text-[150%]">LV</button>
                    </li>
                    <li>
                        <button className="text-[150%]">EN</button>
                    </li>
                </ul>
            </nav>
            <nav className="Navigation ml-[60%]">
                <ul>
                    {navItems.map(({ href, label }) => (
                    <li key={href}>
                        <a href={href}>
                            <button>{label}</button>
                        </a>
                    </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}