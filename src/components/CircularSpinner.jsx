import React from 'react';

const CircularSpinner = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="w-16 h-16 border-4 border-secondary-default border-t-transparent border-solid rounded-full animate-spin"></div>
        </div>
    );
};

export default CircularSpinner;
