import style from "./LandingPage.module.scss";
import { Link } from "react-router-dom";

export function LandingPage() {

    return (
        <div className={style.container}>
            <h1>Bienvenue sur Pep's Design</h1>
            <h5>Routes disponibles</h5>
            <div className={style.routes}>
                <Link to="/">Landing page</Link>
                <Link to="/accueil">Accueil</Link>
                <Link to="/series">Séries</Link>
            </div>
        </div>
    );
}