import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const links = [
    { name: 'landing page', path: '/' },
    { name: 'accueil', path: '/accueil' },
    { name: 'login', path: '/login' },
    { name: 'logout', path: '/logout' },
    { name: 'admin', path: '/admin' },
    { name: '404', path: '/*' },
    { name: '403', path: '/no-way' },
    { name: 'Produits', path: '/admin/products' },
];

export function SideBar() {
    const location = useLocation();
    return (
        <aside className="bg-primary fixed top-0 left-0 h-full w-64 px-8 py-4">
            <nav className="flex flex-col h-full justify-between">
                <ul>
                    {links.map((link) => (
                        <li key={link.name} className="mb-4">
                            <Link
                                to={link.path}
                                className={`text-white text-lg hover:text-secondary ${
                                    location.pathname === link.path ? 'text-primary' : ''
                                }`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div>
                    <p className="text-white text-lg">© 2021 . All rights reserved.</p>
                </div>
            </nav>
        </aside>
    );
}