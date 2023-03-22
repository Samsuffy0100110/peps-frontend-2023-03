import { Link } from 'react-router-dom';

const links = [
    { name: 'landing page', path: '/' },
    { name: 'accueil', path: '/accueil' },
    { name: 'login', path: '/login' },
    { name: 'logout', path: '/logout' },
    { name: 'admin', path: '/admin' },
    { name: '404', path: '/*' },
    { name: '403', path: '/no-way'}
];

export const Footer = () => {
    return (
        <footer className="bg-primary fixed bottom-0 w-full">
            <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
                    {links.map((link) => (
                        <div key={link.name} className="px-5 py-2">
                            <Link to={link.path} className="text-base text-white hover:text-primary">
                                {link.name}
                            </Link>
                        </div>
                    ))}
                </nav>
                <p className="mt-8 text-center text-base text-white">
                    &copy; 2021 . All rights reserved.
                </p>
            </div>
        </footer>
    );
}