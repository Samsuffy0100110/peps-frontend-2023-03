import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__logo">
                        <Link to="/">Logo</Link>
                    </div>
                    <nav className="footer__nav">
                        <ul className="footer__nav-list">
                            <li className="footer__nav-item">
                                <Link to="/about">About</Link>
                            </li>
                            <li className="footer__nav-item">
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li className="footer__nav-item">
                                <Link to="/login">Login</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
}