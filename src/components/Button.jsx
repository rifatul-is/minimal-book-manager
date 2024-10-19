import React from 'react';

const Button = ({
    label,
    width,
    height,
    padding,
    fontSize,
    fontWidth,
    disabled,
    onClick
}) => {
    return (
        <button
            className={`${width && width} ${height && height}
            ${fontWidth && fontWidth}
            ${padding ? padding : 'py-1 px-2'}
            ${disabled ? 'bg-gray-400 text-primary-default' : 'bg-secondary-default text-white'}
            ${fontSize && fontSize} rounded text-white hover:bg-secondary-dark`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;
