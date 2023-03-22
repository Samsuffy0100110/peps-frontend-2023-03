import { Link } from 'react-router-dom';

export const Error403 = () => {
    return (
        <div>
            <h1>403 - Accés interdit</h1>
            <Link to="/accueil">Retour à l'accueil</Link>
        </div>
    );
};