import { Routes, Route, Link } from "react-router-dom";
import Main from '../../Pages/Main/Main';
import AboutMe from '../../Pages/About Me/AboutMe';
import Portfolio from '../../Pages/Portfolio/Portfolio';
import Contact from '../../Pages/Contact/Contact';
import './SideBar.css';
import Logo from '../../assets/AdrianLogo.png';


const SideBar = () => {
    return (
        <aside className="router">
            <div className="side-bar">
                <div className="side-bar-hover">
                    <div className="side-bar-logo fade-in">
                        <img className="side-bar-logo-img" src={Logo} alt={`AdrianSalinas`} />
                    </div>
                    <nav className="side-bar-links fade-in">
                        <ul className="side-bar-link-list">
                            <li className="side-bar-link">
                                <Link className="side-bar-link link" to="/">Home</Link>
                            </li>
                            <li className="side-bar-link">
                                <Link className="side-bar-link link" to="/about-me">About Me</Link>
                            </li>
                            <li className="side-bar-link">
                                <Link className="side-bar-link link" to="/portfolio">Portfolio</Link>
                            </li>
                            <li className="side-bar-link">
                                <Link className="side-bar-link link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

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