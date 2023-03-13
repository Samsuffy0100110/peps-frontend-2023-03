import { ConnectedUserContextProvider } from "@/contexts/ConnectedUserContext";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AdminRedirect } from "@/components/AdminRedirect";
import { ProtectedRoutes } from "@/utils/ProtectedRoutes";
import { LandingPage } from "@/pages/LandingPage";
import { Logout } from "@/pages/Logout";
import { Login } from "@/pages/Login";
import { Home } from "@/pages/Home";
import './main.scss';

export function App() {
    return (
        <Router>
            <ConnectedUserContextProvider>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/accueil" element={<Home />} />
                    <Route path="*" element={<h1>404</h1>} />
                    <Route path="/no-way" element={<h1>403</h1>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route
                        path="/admin/*"
                        element={
                            <ProtectedRoutes>
                                <AdminRedirect />
                            </ProtectedRoutes>
                        } />
                </Routes>
            </ConnectedUserContextProvider>
        </Router>
    );
}