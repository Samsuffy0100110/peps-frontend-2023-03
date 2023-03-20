import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export function Logout() {
    const navigate = useNavigate();
    const [Loading , setLoading] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!Loading) {
            sessionStorage.removeItem('token');
            navigate('/accueil');
        }
    }
    , [Loading, navigate]);
    return (
        <>
        {Loading ? (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
                <h2 className="text-3xl font-bold underline text-primary">
                    Deconnexion.....
                </h2>
            </div>
        ) : (
            <>
                <h2 className="text-3xl font-bold underline text-primary">
                    Deconnexion....
                </h2>
            </>
        )}
        </>
    );
}