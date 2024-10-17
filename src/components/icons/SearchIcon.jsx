import React from 'react';
import COLOR_PALATTE from '../../constants/color_palette.js';

const SearchIcon = ({ color, width, height, onClick, classnames }) => {
    return (
        <svg
            width={width ? width : '20'}
            height={height ? height : '20'}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke={color ? color : COLOR_PALATTE.primary.default}
            className={`size-6 ${classnames}`}
            onClick={onClick}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
        </svg>
    );
};

export default SearchIcon;
