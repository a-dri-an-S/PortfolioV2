import { Routes, Route, Link } from "react-router-dom";
import Main from '../../Pages/Main/Main';
import AboutMe from '../../Pages/About Me/AboutMe';
import Portfolio from '../../Pages/Portfolio/Portfolio';
import Contact from '../../Pages/Contact/Contact';


const SideBar = () => {
    return (
        <aside className="side-bar">
            <div className="side-bar-logo">
                <img className="side-bar-logo-img" src={{}} alt={`AdrianSalinas`} />
            </div>
            <nav className="side-bar-links">
                <ul className="side-bar-link-list">
                    <li className="side-bar-link">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="side-bar-link">
                        <Link to="/about-me">About Me</Link>
                    </li>
                    <li className="side-bar-link">
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li className="side-bar-link">
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