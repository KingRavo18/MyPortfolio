import './Header.css'

function Header(){

    return(
        <header>
            <nav className="float-left">
                <ul>
                    <li><button className="text-[150%]">LV</button></li>
                    <li><button className="text-[150%]">EN</button></li>
                </ul>
            </nav>
            <nav className="Navigation ml-[720px]">
                <ul>
                    <li><a href="#contact"><button>Contact</button></a></li>
                    <li><a href="#projects"><button>Projects</button></a></li>
                    <li><a href="#experiance"><button>Experiance and Education</button></a></li>
                    <li><a href="#introduction"><button>Introduction</button></a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header