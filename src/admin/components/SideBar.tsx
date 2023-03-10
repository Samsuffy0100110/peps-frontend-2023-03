import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function SideBar() {
    // const [toggle, setToggle] = useState(false);
    const location = useLocation();
    const links = [
        {
            name: 'Dashboard',
            path: '/admin',
            icon: 'fas fa-tachometer-alt',
        },
        {
            name: 'Produits',
            path: '/admin/produits',
            icon: 'fas fa-shopping-cart',
        },
        {
            name: 'Categories',
            path: '/admin/categories',
            icon: 'fas fa-list',
        },
        {
            name: 'Commandes',
            path: '/admin/commandes',
            icon: 'fas fa-clipboard-list',
        },
        {
            name: 'Utilisateurs',
            path: '/admin/utilisateurs',
            icon: 'fas fa-users',
        },
    ];
    return (
        <nav className="bg-primary w-64 h-screen fixed top-0 left-0">
            <div className="flex flex-col items-center justify-center h-20">
                <i className="fas fa-store-alt text-3xl text-secondary"></i>
                <h1 className="text-2xl text-secondary">Admin</h1>
            </div>
            <ul className="flex flex-col items-center justify-center">
                {links.map((link) => (
                    <li
                        key={link.name}
                        className={`${location.pathname === link.path ? 'bg-secondary' : ''
                            } w-full h-16 flex items-center justify-center`}
                    >
                        <Link
                            to={link.path}
                            className={`${location.pathname === link.path ? 'text-primary' : 'text-secondary'
                                } w-full h-full flex items-center justify-center`}
                        >
                            <i className={`${link.icon} text-xl`}></i>
                            <span className="ml-4">{link.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}