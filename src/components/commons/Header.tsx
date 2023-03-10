import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [user, setUser] = useState({ name: 'John Doe', avatar: 'https://i.pravatar.cc/300' });

    return (
        <nav className="bg-primary shadow">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-primary hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Icon when menu is closed. */}
                            {/* Menu open: "hidden", Menu closed: "block" */}
                            <svg
                                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            {/* Icon when menu is open. */}
                            {/* Menu open: "block", Menu closed: "hidden" */}
                            <svg
                                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <img
                                className="block lg:hidden h-8 w-auto"
                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                alt="Workflow"
                            />
                            <img
                                className="hidden lg:block h-8 w-auto"
                                src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                                alt="Workflow"
                            />
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <Link
                                    to="/"
                                    className="bg-white text-primary px-3 py-2 rounded-md text-sm font-medium"
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/about"
                                    className="text-white hover:bg-white hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    About
                                </Link>
                                <Link
                                    to="/contact"
                                    className="text-white hover:bg-white hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Avatar alt={user.name} src={user.avatar} />
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile menu, show/hide based on menu state. */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <Link
                        to="/"
                        className="bg-white text-primary block px-3 py-2 rounded-md text-base font-medium"
                        aria-current="page"
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="text-white hover:bg-white hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                    >
                        About
                    </Link>
                    <Link
                        to="/contact"
                        className="text-white hover:bg-white hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}
