import React from 'react';
import checkMarkIcon from '../assets/svgs/check_mark.svg';

const Checkbox = ({ isChecked, onCLick, label }) => {
    return (
        <span
            className="flex gap-2 text-primary-default text-sm w-fit"
            role="button"
            onClick={onCLick}
        >
            {isChecked ? (
                <div className="w-4 h-4 bg-primary-default rounded flex justify-center items-center">
                    <img src={checkMarkIcon} className="w-3 h-3" />
                </div>
            ) : (
                <div className="w-4 h-4 border-2 border-primary-default rounded" />
            )}

            <span>{label}</span>
        </span>
    );
};

export default Checkbox;
