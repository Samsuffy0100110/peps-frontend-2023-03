import { Routes, Route, useNavigate } from "react-router-dom";
import { AdminMain } from "@/admin/pages/AdminMain";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

export function ProtectedRoutes() {
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
            <Route path="/" element={<AdminMain />} />
        </Routes>
    );
}