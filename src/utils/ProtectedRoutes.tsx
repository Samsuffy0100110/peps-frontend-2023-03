import { Routes, Route, useNavigate } from "react-router-dom";
import { Categories } from "@/admin/pages/category/Categories";
import { Products } from "@/admin/pages/product/Products";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";

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
            <Route path="/produits" element={<Products />} />
            <Route path="/categories" element={<Categories />} />
        </Routes>
    );
}