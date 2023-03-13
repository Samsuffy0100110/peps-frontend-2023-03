import { ConnectedUserContext } from "@/contexts/ConnectedUserContext";
import { useState, useContext, FormEvent } from "react";
import { Link, useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import axios from "axios";

export function Login() {
    const { setConnectedUser } = useContext<any>(ConnectedUserContext);
    const navigate = useNavigate();

    const [formDatas, setFormDatas] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState<string | null>(null);

    const handleChange = (event : FormEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget;
        setFormDatas({...formDatas, [name]: value});
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try{
            const response = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/login`,
                formDatas
            );
            sessionStorage.setItem("token", response.data.token);

            const decodedToken = jwt_decode<{roles: string[]}>(response.data.token);
            setConnectedUser();
            if (decodedToken.roles.includes("ROLE_ADMIN")) {
                navigate("/admin");
            } else {
                navigate("/accueil");
            }
        } catch (error) {
            setError("Identifiants incorrects");
        }
    };

    return (
        <div>
            <h1>Connexion</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" name="password" id="password" onChange={handleChange} />
                </div>
                <div>
                    <button type="submit">Se connecter</button>
                </div>
                <div>
                    <Link to="/register">Pas encore inscrit ?</Link>
                </div>
                {error && <div>{error}</div>}
            </form>
        </div>
    );
}