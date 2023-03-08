import { Link } from "react-router-dom";

export function Header() {

    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__logo">
                        <Link to="/">Logo</Link>
                    </div>
                    <nav className="header__nav">
                        <ul className="header__nav-list">
                            <li className="header__nav-item">
                                <Link to="/about">About</Link>
                            </li>
                            <li className="header__nav-item">
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li className="header__nav-item">
                                <Link to="/login">Login</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}