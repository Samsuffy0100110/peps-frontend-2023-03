import { Link } from "react-router-dom";

export const LandingPage = () => {
    return (
        <div>
            <Link to="/accueil" className="btn btn-primary">Accueil</Link>
        </div>
    );
}