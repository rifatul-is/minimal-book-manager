import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchIcon from './icons/SearchIcon.jsx';
import colors from 'tailwindcss/colors.js';
import SearchField from './SearchField.jsx';

const Navbar = () => {
    const [searchValue, setSearchValue] = useState('');
    const location = useLocation();

    console.log('location', location.pathname);

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
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search Books..."
            />
        </div>
    );
};

export default Navbar;
