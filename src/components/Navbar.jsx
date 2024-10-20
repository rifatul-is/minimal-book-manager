import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchIcon from './icons/SearchIcon.jsx';
import colors from 'tailwindcss/colors.js';
import SearchField from './SearchField.jsx';
import { useLayoutContext } from '../context/layout_context.js';

const Navbar = () => {
    const { bookSearch, setBookSearch } = useLayoutContext();
    const location = useLocation();

    return (
        <div className="flex justify-between py-4">
            <ul className="flex gap-4 font-semibold text-lg">
                <li>
                    <Link
                        to="/"
                        className={`${location.pathname === '/' ? 'text-secondary-default' : 'text-primary-default'}
                        hover:text-secondary-default`}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/wishlist"
                        className={`${location.pathname === '/wishlist' ? 'text-secondary-default' : 'text-primary-default'}
                        hover:text-secondary-default`}
                    >
                        Wishlist
                    </Link>
                </li>
            </ul>

            <SearchField
                value={bookSearch}
                onChange={(e) => setBookSearch(e.target.value)}
                placeholder="Search Books..."
            />
        </div>
    );
};

export default Navbar;
