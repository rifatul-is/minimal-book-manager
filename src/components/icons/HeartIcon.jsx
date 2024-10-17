import React from 'react';
import COLOR_PALATTE from '../../constants/color_palette.js';

const HeartIcon = ({ color, fill, width, height, onClick, classnames }) => {
    return (
        <svg
            width={width ? width : '18'}
            height={height ? height : '18'}
            xmlns="http://www.w3.org/2000/svg"
            fill={fill ? color : 'none'}
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke={color ? color : COLOR_PALATTE.primary.default}
            className={`size-5 ${classnames}`}
            onClick={onClick}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
        </svg>
    );
};

export default HeartIcon;
