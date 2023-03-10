import {  useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export function Logout() {
;
    const navigate = useNavigate();

    useEffect(() => {
        try {
            axios.post(
                "https://127.0.0.1:8000/api/logout",
            );
            localStorage.removeItem("token");
            navigate("/accueil");
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <></>
    );
}