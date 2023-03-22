import { Link } from "react-router-dom";

export const LandingPage = () => {
    return (
        <div className="bg-primary h-screen flex flex-col justify-center items-center">
            <h1 className="text-6xl font-bold text-white">Bienvenue sur Peps</h1>
            <div className="flex flex-col justify-center items-center">
                <Link to="/inscription" className="text-2xl font-bold text-white underline">Inscription</Link>  
                <Link to="/connexion" className="text-2xl font-bold text-white underline">Connexion</Link>
                <Link to="/accueil" className="text-2xl font-bold text-white underline">Accueil</Link>
            </div>
        </div>
    );
};