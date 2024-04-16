import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from "prop-types";

function Navbar( {showFullMenu} ) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 120) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`header ${isScrolled ? 'active' : ''}`}>
            <RouterLink to="/página-principal">
                <img src="images/logos/esquadria-logo_1.png" className={`logo ${isScrolled ? 'active' : ''}`} alt="Esquadria Logo" />
            </RouterLink>

            <div className="menu-btn" onClick={toggleMenu}>
                <i className={`fa fa-bars ${isMenuOpen ? 'active' : 'fa-bars'} ${isScrolled ? 'fa-active' : ''}`}></i>
                <i className={`fa fa-times ${isMenuOpen ? 'active' : 'fa-times'} ${isScrolled ? 'fa-active' : ''}`}></i>
            </div>

            <nav className={`navigation ${isMenuOpen ? 'active' : ''}`} id="navigation">
                <div className="navigation-items">
                    <ul>
                        {showFullMenu ? (
                            <>
                                <li><Link to="top" spy={true} smooth={true} offset={50} duration={500} className={`nav-link ${isScrolled ? 'active' : ''}`} onClick={toggleMenu}>Início</Link></li>
                                <li><Link to="about" spy={true} smooth={true} offset={50} duration={500} className={`nav-link ${isScrolled ? 'active' : ''}`} onClick={toggleMenu}>Quem Somos</Link></li>
                                <li><Link to="services" spy={true} smooth={true} offset={50} duration={500} className={`nav-link ${isScrolled ? 'active' : ''}`} onClick={toggleMenu}>Serviços</Link></li>
                                <li><Link to="contact" spy={true} smooth={true} offset={50} duration={500} className={`nav-link ${isScrolled ? 'active' : ''}`} onClick={toggleMenu}>Contacto</Link></li>
                                <li><a href="/" className={`nav-link ${isScrolled ? 'active' : ''}`} onClick={toggleMenu}>Intro</a></li>
                            </>
                        ) : (
                            <>
                                <li><RouterLink to="/página-principal" className={`nav-link ${isScrolled ? 'active' : ''} ${showFullMenu ? '' : 'color-dark'}`} onClick={toggleMenu}>Início</RouterLink></li>
                                <li><RouterLink to="/" className={`nav-link ${isScrolled ? 'active' : ''} ${showFullMenu ? '' : 'color-dark'}`} onClick={toggleMenu}>Intro</RouterLink></li>
                            </>
                        )}
                    </ul>
                </div>
            </nav>
        </header>
    );
}

Navbar.propTypes = {
    showFullMenu: PropTypes.string.isRequired,
  };

export default Navbar;
