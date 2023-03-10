import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";

export function ProtectedRoutes({ children }: { children: JSX.Element }) {
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem("token");
        const decodedToken = jwt_decode<{roles: string[]}>(token!);
        if (decodedToken.roles.includes("ROLE_ADMIN")) {
            navigate("/admin");
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