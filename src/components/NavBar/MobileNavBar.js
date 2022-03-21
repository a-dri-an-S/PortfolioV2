import { useState } from 'react';
import { Routes, Route, NavLink } from "react-router-dom";

import Main from '../../Pages/Main/Main';
import AboutMe from '../../Pages/AboutMe/AboutMe';
import Projects from '../../Pages/Projects/Projects';
import Contact from '../../Pages/Contact/Contact';
import Button from '../Button/Button';

import Logo from '../../assets/images/AdrianLogo.png';
import './MobileNavBar.css';


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
                    <div className="mobile-nav-logo mobile-fade-in">
                        <img 
                            className="mobile-nav-logo-img"
                            src={Logo}
                            alt="Adrian Salinas"
                        />
                    </div>
                    <div className="mobile-nav-dropdown-btn">
                        <Button 
                            styles="mobile-nav"
                            type="button"
                            onClick={handleClick}
                            name="X"
                        />
                    </div>
                </div>
                { menuClick ? 
                    <div className="nav-dropdown">
                        <h1>Hello</h1>
                    </div> :
                    onLoad ? 
                    null :
                    <div className="nav-close" /> 
                }
            </nav>
        </section>
    );
}

export default MobileNavBar;