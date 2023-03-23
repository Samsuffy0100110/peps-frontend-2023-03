import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const Logout = () => {
    const navigate = useNavigate();
    const [Loading , setLoading] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            sessionStorage.clear();
            navigate("/accueil", {replace: true});
            window.location.reload();
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (   
        <>
            {Loading ? (
                <div className="flex justify-center items-center h-screen">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
                </div>
            ) : (
                <>
                    <h2 className="text-3xl font-bold underline text-primary">
                        Pep's Design
                    </h2>
                </>
            )}
        </>
    );
}