import React, { useState, useEffect } from 'react';

function Navbar() {
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
            <a href="home.html">
                <img src="images/esquadria_logos_restaurados/esquadria-logo_1.png" className={`logo ${isScrolled ? 'active' : ''}`} alt="Esquadria Logo" />
            </a>

            <div className="menu-btn" onClick={toggleMenu}>
                <i className={`fa fa-bars ${isMenuOpen ? 'active' : 'fa-bars'} ${isScrolled ? 'fa-active' : ''}`}></i>
                <i className={`fa fa-times ${isMenuOpen ? 'active' : 'fa-times'} ${isScrolled ? 'fa-active' : ''}`}></i>
            </div>

            <nav className={`navigation ${isMenuOpen ? 'active' : ''}`} id="navigation">
                <div className="navigation-items">
                    <ul>
                        <li><a href="#top" className={`nav-link ${isScrolled ? 'active' : ''}`} onClick={toggleMenu}>Home</a></li>
                        <li><a href="#about" className={`nav-link ${isScrolled ? 'active' : ''}`} onClick={toggleMenu}>Quem Somos</a></li>
                        <li><a href="#services" className={`nav-link ${isScrolled ? 'active' : ''}`} onClick={toggleMenu}>Serviços</a></li>
                        <li><a href="#gallery" className={`nav-link ${isScrolled ? 'active' : ''}`} onClick={toggleMenu}>Galeria</a></li>
                        <li><a href="#contact" className={`nav-link ${isScrolled ? 'active' : ''}`} onClick={toggleMenu}>Contacto</a></li>
                        <li><a href="/" className={`nav-link ${isScrolled ? 'active' : ''}`} onClick={toggleMenu}>Intro</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
