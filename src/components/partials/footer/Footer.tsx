import { Link } from "react-router-dom";

export function Footer() {
    return (
        // add a responsive footer with tailwindcss
        <footer className="bg-primary text-white text-center text-xs p-3 absolute bottom-0 w-full">
            <p>
                <Link to="/mentions-legales" className="text-white hover:text-gray-300">
                    Mentions légales
                </Link>
            </p>
            <p>
                <Link to="/cgv" className="text-white hover:text-gray-300">
                    Conditions générales de vente
                </Link>
            </p>
            <p>
                <Link to="/cgu" className="text-white hover:text-gray-300">
                    Conditions générales d'utilisation
                </Link>
            </p>
            <p>
                <Link to="/politique-de-confidentialite" className="text-white hover:text-gray-300">
                    Politique de confidentialité
                </Link>
            </p>
            <p>
                <Link to="/cookies" className="text-white hover:text-gray-300">
                    Cookies
                </Link>
            </p>
            <p>
                <Link to="/plan-du-site" className="text-white hover:text-gray-300">
                    Plan du site
                </Link>
            </p>
        </footer>
    );
}