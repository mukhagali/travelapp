import React, { useState } from 'react'
import { Link } from "react-router-dom";

function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)
    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <a href="/"><i className="fab fa-typo3"></i> Travel App</a>
                </div>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMenu}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/services" className="nav-links" onClick={closeMenu}>Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/products" className="nav-links" onClick={closeMenu}>Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/signup" className="nav-links mobile" onClick={closeMenu}>Sign Up</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
