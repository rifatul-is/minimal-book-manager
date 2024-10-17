import React from 'react';
import SearchIcon from './icons/SearchIcon.jsx';
import colors from 'tailwindcss/colors.js';

const SearchField = ({
    value,
    onChange,
    onSearchClick,
    onEnterPress,
    placeholder,
    width,
    height,
    isMiniField
}) => {
    return (
        <div
            className={`w-fit max-w-[400px] h-10 bg-gray-50 pl-4 flex rounded-xl shadow overflow-hidden`}
        >
            <input
                value={value}
                onChange={onChange}
                className={`${isMiniField && 'text-sm'} w-full focus:outline-none bg-transparent`}
                type="text"
                placeholder={placeholder}
                onKeyUp={onEnterPress}
            />
            <div
                className={`bg-primary-default w-[50px] flex items-center justify-center hover:bg-secondary-default`}
                role="button"
                onClick={onSearchClick}
            >
                <SearchIcon color={colors.white} />{' '}
            </div>
        </div>
    );
};

export default SearchField;
