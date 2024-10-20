import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchField from './SearchField.jsx';
import { useLayoutContext } from '../context/layout_context.js';

const Navbar = () => {
    const { bookSearch, setBookSearch } = useLayoutContext();
    const location = useLocation();

    return (
        <nav className="w-full flex flex-col sm:flex-row justify-between items-center p-4">
            <ul className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 font-semibold text-lg">
                <li>
                    <Link
                        to="/"
                        className={`${
                            location.pathname === '/'
                                ? 'text-secondary-default'
                                : 'text-primary-default'
                        } hover:text-secondary-default`}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/wishlist"
                        className={`${
                            location.pathname === '/wishlist'
                                ? 'text-secondary-default'
                                : 'text-primary-default'
                        } hover:text-secondary-default`}
                    >
                        Wishlist
                    </Link>
                </li>
            </ul>

            <div className="w-full sm:w-auto mt-4 sm:mt-0 flex justify-center">
                <SearchField
                    value={bookSearch}
                    onChange={(e) => setBookSearch(e.target.value)}
                    placeholder="Search Books..."
                    className="w-full sm:w-96 px-4 py-2 rounded-md border border-gray-300"
                />
            </div>
        </nav>
    );
};

export default Navbar;
