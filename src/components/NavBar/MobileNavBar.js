import { useState } from 'react';
import { Routes, Route, NavLink } from "react-router-dom";

import Main from '../../Pages/Main/Main';
import AboutMe from '../../Pages/AboutMe/AboutMe';
import Projects from '../../Pages/Projects/Projects';
import Contact from '../../Pages/Contact/Contact';
import Button from '../Button/Button';

import Logo from '../../assets/images/AdrianLogo.png';
import Hamburger from '../../assets/images/Hamburger.png';
import './MobileNavBar.css';

const HamburgerImg = () => {
    return (
        <img
            className="mobile-nav-btn-img"
            src={Hamburger}
            alt="nav-menu"
        />
    )
};

const MobileNavBar = () => {
    const [menuClick, setMenuClick] = useState(false);
    const [onLoad, setOnLoad] = useState(true);

    const handleClick = () => {
        setMenuClick(!menuClick);
        setOnLoad(false);
    }

    return (
        <section className="router">
            <nav className="mobile-nav">
                <div className="mobile-nav-bar">
                    <div className="mobile-nav-logo fade-in">
                        <img
                            className="mobile-nav-logo-img"
                            src={Logo}
                            alt="Adrian Salinas"
                        />
                    </div>
                    <div className="mobile-nav-dropdown-btn fade-in">
                        <Button
                            styles="mobile-nav"
                            type="button"
                            onClick={handleClick}
                            name={<HamburgerImg />}
                        />
                    </div>
                </div>
                {menuClick ?
                    <div className="mobile-nav-dropdown">
                        <div className="mobile-nav-links">
                            <ul className="mobile-nav-link-list links-fade-in">
                                <li className="mobile-nav-link">
                                    <NavLink
                                        className={({ isActive }) => isActive ? "mobile-link active-mobile-link" : "mobile-link"}
                                        to="/"
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li className="mobile-nav-link">
                                    <NavLink
                                        className={({ isActive }) => isActive ? "mobile-link active-mobile-link" : "mobile-link"}
                                        to="/about-me"
                                    >
                                        About Me
                                    </NavLink>
                                </li>
                                <li className="mobile-nav-link">
                                    <NavLink
                                        className={({ isActive }) => isActive ? "mobile-link active-mobile-link" : "mobile-link"}
                                        to="/projects"
                                    >
                                        Projects
                                    </NavLink>
                                </li>
                                <li className="mobile-nav-link">
                                    <NavLink
                                        className={({ isActive }) => isActive ? "mobile-link active-mobile-link" : "mobile-link"}
                                        to="/contact"
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div> :
                    onLoad ?
                        null :
                        <div className="mobile-nav-close">
                            <div className="mobile-nav-links">
                                <ul className="mobile-nav-link-list links-fade-out">
                                    <li className="mobile-nav-link mobile-link">Home</li>
                                    <li className="mobile-nav-link mobile-link">About Me</li>
                                    <li className="mobile-nav-link mobile-link">Projects</li>
                                    <li className="mobile-nav-link mobile-link">Contact</li>
                                </ul>
                            </div>
                        </div>
                }
            </nav>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </section>
    );
}

export default MobileNavBar;