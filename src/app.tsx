import { ConnectedUserContextProvider } from "@/contexts/ConnectedUserContext";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from "@/utils/ProtectedRoute";
import { LandingPage } from "@/pages/LandingPage";
import { Admin } from "@/pages/admin/Admin";
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
                    <Route path="/login" element={<Login />} />
                    {/* <Route path="/admin/*" element={<Admin />} /> */}
                    {/* <Route path="/admin/*" element={<ProtectedRoute />} /> */}
                    <Route
                        path="/admin/*"
                        element={
                            <ProtectedRoute>
                                <Admin />
                            </ProtectedRoute>
                        } />
                </Routes>
            </ConnectedUserContextProvider>
        </Router>
    );
}