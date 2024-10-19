import React, { useEffect, useState } from 'react';
import HeartIcon from './icons/HeartIcon.jsx';
import starIcon from '../assets/svgs/star.svg';
import downloadIcon from '../assets/svgs/download.svg';
import COLOR_PALATTE from '../constants/color_palette.js';
import Button from './Button.jsx';

const BookCover = ({ book, isWishListed, onWishListClick }) => {
    // const [wishlistedBooks, setWishlistedBooks] = useState(['bitch 111']);
    //
    // const findBookById = (id) => {
    //     console.log('finding by id');
    //     console.log(id);
    //     if (wishlistedBooks) {
    //         return wishlistedBooks.find((item) => item.id === id);
    //     } else {
    //         return false;
    //     }
    // };
    //
    // const wishlistBook = () => {
    //     console.log(wishlistedBooks);
    //     console.log(JSON.parse(localStorage.getItem('wishlisted_book')));
    //     if (findBookById(book.id)) {
    //         console.log('id found');
    //         const newWishlistedBooks = wishlistedBooks?.filter(
    //             (item) => item.id !== book.id
    //         );
    //         setWishlistedBooks(newWishlistedBooks);
    //         console.log(newWishlistedBooks);
    //     } else {
    //         console.log('id not found');
    //         if (wishlistedBooks) {
    //             console.log('wishlisted book found');
    //             const newWishlistedBooks = [book, ...wishlistedBooks];
    //             setWishlistedBooks(newWishlistedBooks);
    //             console.log(newWishlistedBooks);
    //         } else {
    //             console.log('wishlisted book not found');
    //             setWishlistedBooks([book]);
    //             console.log(book);
    //         }
    //     }
    // };
    //
    // useEffect(() => {
    //     console.log('use effect of wishlist books');
    //     console.log(JSON.stringify(wishlistedBooks));
    //     localStorage.setItem('wishlist_books', JSON.stringify(wishlistedBooks));
    // }, [wishlistedBooks]);
    //
    // useEffect(() => {
    //     console.log('getting books');
    //     const storedBooks = JSON.parse(localStorage.getItem('wishlist_books'));
    //     setWishlistedBooks(storedBooks || []);
    // }, []);

    return (
        <div className="shadow rounded-lg w-64">
            <div
                className="w-full h-56 bg-no-repeat bg-cover relative rounded-t-lg"
                style={{
                    backgroundImage: `url(${book.formats['image/jpeg']})`
                }}
            >
                <button
                    className="absolute bottom-2 right-2 bg-white rounded-full p-1"
                    onClick={onWishListClick}
                >
                    <HeartIcon
                        fill={isWishListed}
                        color={COLOR_PALATTE.secondary.default}
                    />
                </button>
            </div>
            <div className="w-full text-sm text-primary-default p-3">
                <p className="flex justify-between font-semibold">
                    {book.title.slice(0, 25)}
                    {book.title.length > 25 && '...'}
                </p>
                <p className="text-xs text-secondary-dark">
                    {book.authors && book.authors.length > 0
                        ? book?.authors[0].name
                        : 'Author Not Available'}
                </p>
                <div className="flex justify-between items-center pt-4">
                    <p className="flex items-center gap-1 text-xs">
                        <img src={downloadIcon} className="w-3 h-3" />{' '}
                        {book.download_count}
                    </p>
                    <Button
                        label="Read More..."
                        fontSize="text-xs"
                        fontWidth="font-semibold"
                    />
                </div>
            </div>
        </div>
    );
};

export default BookCover;
