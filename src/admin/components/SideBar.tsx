import { Link } from 'react-router-dom';

export function SideBar() {

    return (
        <nav>
            <Link to="/accueil">Retour au site</Link>
            <Link to="/admin">Retour au dashboard</Link>
        </nav>
    );
}