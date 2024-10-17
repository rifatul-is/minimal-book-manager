import React from 'react';
import HeartIcon from '../components/icons/HeartIcon.jsx';
import COLOR_PALATTE from '../constants/color_palette.js';
import BookCover from '../components/BookCover.jsx';

const HomePage = () => {
    return (
        <div className="grid grid-cols-4 gap-8">
            <BookCover />
            <BookCover />
            <BookCover />
            <BookCover />
            <BookCover />
            <BookCover />
        </div>
    );
};

export default HomePage;
