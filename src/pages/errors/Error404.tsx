import { Link } from 'react-router-dom';

export const Error404 = () => {
    return (
        <div>
            <h1>404 - Page introuvable</h1>
            <Link to="/accueil">Retour à l'accueil</Link>
        </div>
    );
};