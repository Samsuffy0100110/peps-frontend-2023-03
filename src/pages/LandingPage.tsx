import { Link } from "react-router-dom";

export function LandingPage() {
    return (
        <div>
            <h1>Bienvenue sur Pep's Design</h1>
            <h5>Routes disponibles</h5>
            <div>
                <Link to="/">Landing page</Link>
                <Link to="/accueil">Accueil</Link>
                <Link to="/series">Séries</Link>
                <Link to="/login">Connexion</Link>
                <Link to="/register">Inscription</Link>
            </div>
        </div>
    );
}