import { Routes, Route, NavLink } from "react-router-dom";
import Main from '../../Pages/Main/Main';
import AboutMe from '../../Pages/AboutMe/AboutMe';
import Projects from '../../Pages/Projects/Projects';
import Contact from '../../Pages/Contact/Contact';
import './SideBar.css';
import Logo from '../../assets/images/AdrianLogo.png';


const SideBar = () => {
    return (
        <aside className="router">
            <nav className="side-bar">
                <div className="side-bar-hover">
                    <div className="side-bar-logo fade-in">
                        <img 
                            className="side-bar-logo-img" 
                            src={Logo} 
                            alt="Adrian Salinas" 
                        />
                    </div>
                    <div className="side-bar-links fade-in">
                        <ul className="side-bar-link-list">
                            <li className="side-bar-link">
                                <NavLink 
                                    className={({ isActive }) => isActive ? 'link active-link' : 'link'} 
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="side-bar-link">
                                <NavLink 
                                    className={({ isActive }) => isActive ? 'link active-link' : 'link'} 
                                    to="/about-me"
                                >
                                    About Me
                                </NavLink>
                            </li>
                            <li className="side-bar-link">
                                <NavLink 
                                    className={({ isActive }) => isActive ? 'link active-link' : 'link'}  
                                    to="/projects"
                                >
                                    Projects
                                </NavLink>
                            </li>
                            <li className="side-bar-link">
                                <NavLink 
                                    className={({ isActive }) => isActive ? 'link active-link' : 'link'} 
                                    to="/contact"
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </aside>
    );
}

export default SideBar;