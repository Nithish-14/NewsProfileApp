import React, {useState, useContext} from 'react'
import { IoMdSunny, IoMdMoon } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';
import ThemeContext from '../../ThemeContext';
import './index.css'

const Navbar = () => {
    const location = useLocation();

    const path = location.pathname;

    const currentPage = path === "/" ? "home" : "profile";

    const [activeNav, changeActiveNav] = useState(currentPage);
    const {darkMode, toggleTheme} = useContext(ThemeContext);

    return (
        <nav className={`nav-container w-100 p-4 ${!darkMode ? "light-mode-nav-container" : ""}`}>
            <Link to="/" className="link-element" onClick={() => changeActiveNav("home")}>
                <h1 className={`logo-heading ${!darkMode ? "light-mode-logo-heading" : ""}`}>NewsNest</h1>
            </Link>
            <div className="nav-link-container d-flex flex-row justify-content-between align-items-center">
                <Link to="/" className="link-element" onClick={() => changeActiveNav("home")}>
                    <p className={`nav-link-para ${!darkMode ? "light-mode-nav-link" : ""} ${activeNav === "home" ? "active-nav" : ""} ${!darkMode && activeNav==="home" ? "light-mode-active" : ""}`}>Home</p>
                </Link>
                <Link to="/profile" className="link-element" onClick={() => changeActiveNav("profile")}>
                    <p className={`nav-link-para ${!darkMode ? "light-mode-nav-link" : ""} ${activeNav === "profile" ? "active-nav" : ""} ${!darkMode && activeNav==="profile" ? "light-mode-active" : ""}`}>Profile</p>
                </Link>
            </div>
            <div className="nav-icon-container d-flex flex-row align-items-center">
                {darkMode ? 
                    <IoMdMoon color="#f1f1f1" className="nav-icons" size={23} onClick={toggleTheme} /> : <IoMdSunny color="#000000" className="nav-icons" size={23} onClick={toggleTheme} />
                }
                <Link to="/settings" onClick={() => changeActiveNav("")}><IoSettingsSharp color={darkMode ? "#f1f1f1" : "#000000"} className="setting-icon" size={23} /></Link>
            </div>
        </nav>
    )
}

export default Navbar;