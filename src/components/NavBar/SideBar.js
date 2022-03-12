import { Routes, Route, Link } from "react-router-dom";
import Main from '../../Pages/Main/Main';
import AboutMe from '../../Pages/About Me/AboutMe';
import Portfolio from '../../Pages/Portfolio/Portfolio';
import Contact from '../../Pages/Contact/Contact';


const SideBar = () => {
    return (
        <aside className="sideBar">
            <div className="sideBarLogo">
                <img className="sideBarLogoImg" src={{}} alt={`AdrianSalinas`} />
            </div>
            <nav className="sideBarLinks">
                <ul className="sideBarLinkList">
                    <li className="sideBarLink">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="sideBarLink">
                        <Link to="/about-me">About Me</Link>
                    </li>
                    <li className="sideBarLink">
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li className="sideBarLink">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />

            </Routes>
        </aside>
    );
}

export default SideBar;