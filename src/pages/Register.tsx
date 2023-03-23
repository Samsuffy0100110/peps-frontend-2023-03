import { ConnectedUserContext } from "@/contexts/ConnectedUserContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

type FormValues = {
    email: string;
    password: string;
    passwordConfirm: string;
};

export const Register = (): JSX.Element => {
    const navigate = useNavigate();
    const { connectedUser, setConnectedUser } = useContext(ConnectedUserContext);

    const [htmlFormDatas, setHtmlFormDatas] = useState<FormValues>({
        email: "",
        password: "",
        passwordConfirm: "",
    });

    const [error, setError] = useState<string | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setHtmlFormDatas((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await axios.post<{ id: string }>(
                `${import.meta.env.VITE_BACKEND_URL}/api/register`,
                htmlFormDatas
            );
            const connectingUser = await axios.get(
                `${import.meta.env.VITE_BACKEND_URL}/api/user/${response.data.id}`
            );
            setConnectedUser(connectingUser.data);
            sessionStorage.setItem("user", JSON.stringify(connectingUser.data));
            navigate("/accueil");
        } catch (error) {
            setError("Identifiants incorrects");
        }
    };

    useEffect(() => {
        if (connectedUser) {
            navigate("/accueil");
        }
    }, [connectedUser, navigate]);

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
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Mot de passe"
                            name="password"
                            value={htmlFormDatas.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="passwordConfirm"
                        >
                            Confirmation du mot de passe
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="passwordConfirm"
                            type="password"
                            placeholder="Confirmation du mot de passe"
                            name="passwordConfirm"
                            value={htmlFormDatas.passwordConfirm}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            S'inscrire
                        </button>
                    </div>
                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4" role="alert">
                            <strong className="font-bold">Erreur !</strong>
                            <span className="block sm:inline">{error}</span>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};