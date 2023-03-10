import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export function Logout() {
    const navigate = useNavigate();
    const [Loading , setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!Loading) {
            localStorage.removeItem('token');
            navigate('/accueil');
        }
    }
    , [Loading, navigate]);
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold text-primary">Déconnexion en cours...</h1>
        </div>
    );
}