import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from './icons/SearchIcon.jsx';
import colors from 'tailwindcss/colors.js';
import SearchField from './SearchField.jsx';

const Navbar = () => {
    const [searchValue, setSearchValue] = useState('');
    return (
        <div className="flex justify-between py-4">
            <ul className="flex gap-4 font-semibold text-lg text-primary-default">
                <li>
                    <Link to="/" className="hover:text-secondary-default">
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/wishlist"
                        className="hover:text-secondary-default"
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

            {/*<div className="w-fit lg:w-[300px] h-10 bg-gray-50 pl-4 flex rounded-xl shadow overflow-hidden">*/}
            {/*    <input*/}
            {/*        className="w-fit lg:w-[250px] focus:outline-none bg-transparent"*/}
            {/*        type="text"*/}
            {/*        placeholder="Search Books.."*/}
            {/*    />*/}
            {/*    <div*/}
            {/*        className="bg-primary-default w-[50px] flex items-center justify-center hover:bg-secondary-default"*/}
            {/*        role="button"*/}
            {/*    >*/}
            {/*        <SearchIcon color={colors.white} />{' '}*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default Navbar;
