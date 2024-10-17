import React from 'react';
import HeartIcon from './icons/HeartIcon.jsx';
import COLOR_PALATTE from '../constants/color_palette.js';

const BookCover = () => {
    return (
        <div className="shadow rounded">
            <div
                className="w-48 h-48 bg-no-repeat bg-cover relative rounded-t"
                style={{
                    backgroundImage: `url(${'/sample_book_cover.jpg'})`
                }}
            >
                <div className="absolute bottom-2 right-2 bg-white rounded-full p-1">
                    <HeartIcon
                        fill={false}
                        color={COLOR_PALATTE.secondary.default}
                    />
                </div>
            </div>
            <div className="text-sm text-primary-default p-3">
                <p className="flex justify-between">
                    Book Name <span>$10</span>
                </p>
                <p>Book Author</p>
                <p>Rating</p>
            </div>
        </div>
    );
};

export default BookCover;
