import { Routes, Route, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";

// Définition de l'interface de notre token
interface Token {
    roles: string[];
    exp: number;
}

export const ProtectedRoutes = ({ children }: { children: JSX.Element }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem("token");

        if (!token) {
            navigate("/no-way");
            return;
        }

        // Décode le token et vérifie la validité du token
        const decodedToken = jwt_decode<Token>(token);

        if (decodedToken.exp < Date.now() / 1000) {
            navigate("/no-way");
            return;
        }

        // Vérifie le rôle de l'utilisateur
        if (decodedToken.roles.includes("ROLE_ADMIN")) {
            window.location.href =
                `${import.meta.env.VITE_BACKEND_URL}/admin`;
        } else {
            navigate("/no-way");
        }
    }, [navigate]);

    // Affiche la route protégée
    return (
        <Routes>
            <Route path="/" element={children} />
        </Routes>
    );
};