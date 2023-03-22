import { ConnectedUserContext } from "@/contexts/ConnectedUserContext";
import { useState, useContext, FormEvent } from "react";
import { Link, useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import axios from "axios";

export const Login = () => {
    const { connectedUser, setConnectedUser } = useContext<any>(ConnectedUserContext);
    const navigate = useNavigate();

    const [htmlFormDatas, sethtmlFormDatas] = useState<{ email: string, password: string }>({
        email: "",
        password: "",
    });

    const [error, setError] = useState<string | null>(null);

    const handleChange = (event : FormEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget;
        sethtmlFormDatas({ ...htmlFormDatas, [name]: value });
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/login`,
                htmlFormDatas
            );
            sessionStorage.setItem("token", response.data.token);

            const decodedToken = jwt_decode<{ id: number, roles: string[] }>(response.data.token);

            const connectingUser = await axios.get(
                `${import.meta.env.VITE_BACKEND_URL}/api/user/${decodedToken.id}`
            );

            setConnectedUser(connectingUser.data);
            sessionStorage.setItem("user", JSON.stringify(connectingUser.data));

            if (decodedToken.roles.includes("ROLE_ADMIN")) {
                navigate("/admin");
            } else {
                navigate("/accueil");
            }
            
        } catch (error) {
            setError("Identifiants incorrects");
        }
    };

    // tailwindcss dynamic login form
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-full max-w-xs">
                <form
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                    onSubmit={handleSubmit}
                >
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={htmlFormDatas.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="password"
                        >
                            Mot de passe
                        </label>
                        <input
                            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="******************"
                            name="password"
                            value={htmlFormDatas.password}
                            onChange={handleChange}
                        />
                        {error && (
                            <p className="text-red-500 text-xs italic">
                                {error}
                            </p>
                        )}
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Se connecter
                        </button>
                        <Link
                            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                            to="/register"
                        >
                            S'inscrire
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};