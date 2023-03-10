import { Link } from 'react-router-dom';
import style from './SideBar.module.scss';

export function SideBar() {

    return (
        <nav className={style.sideBar}>
            <Link to="/accueil">Retour au site</Link>
            <Link to="/admin">Retour au dashboard</Link>
        </nav>
    );
}