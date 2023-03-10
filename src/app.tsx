import { ConnectedUserContextProvider } from "@/contexts/ConnectedUserContext";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LandingPage } from "@/pages/landingPage/LandingPage";
import { AdminMain } from "@/admin/pages/adminMain/AdminMain";
import { Login } from "@/pages/login/Login";
import { Home } from "@/pages/home/Home";
import './main.scss';

export function App() {
    return (
        <Router>
            <ConnectedUserContextProvider>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/accueil" element={<Home />} />
                    <Route path="*" element={<h1>404</h1>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/admin/*" element={<AdminMain />} />
                </Routes>
            </ConnectedUserContextProvider>
        </Router>
    );
}