import style from './Header.module.scss';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const body = document.querySelector('body');
        if (isMenuOpen) {
            body?.classList.add('no-scroll');
        } else {
            body?.classList.remove('no-scroll');
        }
    }, [isMenuOpen]);

    return (
        <header className={style.header}>
            <Link to="/" className={style.logo}>
                <img src="/images/logo.png" alt="Logo" />
            </Link>
            <nav className={style.nav}>
                <ul className={style.navList}>
                    <li className={style.navItem}>
                        <Link to="/about" className={style.navLink}>
                            About
                        </Link>
                    </li>
                    <li className={style.navItem}>
                        <Link to="/contact" className={style.navLink}>
                            Contact
                        </Link>
                    </li>
                    <li className={style.navItem}>
                        <Link to="/admin" className={style.navLink}>
                            Admin
                        </Link>
                    </li>
                </ul>
            </nav>
            <button
                className={style.menuButton}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <img src="/images/menu.png" alt="Menu" />
            </button>
            <div
                className={`${style.menu} ${isMenuOpen ? style.menuOpen : ''}`}
            >
                <ul className={style.menuList}>
                    <li className={style.menuItem}>
                        <Link to="/about" className={style.menuLink}>
                            About
                        </Link>
                    </li>
                    <li className={style.menuItem}>
                        <Link to="/contact" className={style.menuLink}>
                            Contact
                        </Link>
                    </li>
                    <li className={style.menuItem}>
                        <Link to="/admin" className={style.menuLink}>
                            Admin
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}