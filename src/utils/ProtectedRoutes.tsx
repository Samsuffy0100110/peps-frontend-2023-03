import { Routes, Route, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";

export const ProtectedRoutes = ({ children }: { children: JSX.Element }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem("token");

        if (!token) {
            navigate("/no-way");
            return;
        }
        const decodedToken = jwt_decode<{roles: string[]}>(token!);
        
        if (decodedToken.roles.includes("ROLE_ADMIN")) {
            window.location.href = `${import.meta.env.VITE_BACKEND_URL}/admin`;
        } else {
            navigate("/no-way");
        }
    }, []);

    return (
        <Routes>
            <Route path="/" element={children} />
        </Routes>
    );
}