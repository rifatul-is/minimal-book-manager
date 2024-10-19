import React, { useEffect, useState } from 'react';
import BookCover from '../components/BookCover.jsx';
import { findBookById } from '../assets/utils/global_functions.js';

const WishlistPage = () => {
    const [wishListBooks, setWishListBooks] = useState(
        JSON.parse(localStorage.getItem('wishlist_books')) || []
    );

    const wishlistBook = (book) => {
        if (findBookById(book.id, wishListBooks)) {
            const newWishlistedBookIds = wishListBooks?.filter(
                (item) => item.id !== book.id
            );
            setWishListBooks(newWishlistedBookIds);
        } else {
            if (wishListBooks) {
                const newWishlistedBookIds = [book, ...wishListBooks];
                setWishListBooks(newWishlistedBookIds);
            } else {
                setWishListBooks([book]);
            }
        }
    };

    useEffect(() => {
        localStorage.setItem('wishlist_books', JSON.stringify(wishListBooks));
    }, [wishListBooks]);

    return (
        <div className="grid grid-cols-3 gap-8">
            {wishListBooks?.map((book, index) => (
                <BookCover
                    key={index}
                    book={book}
                    isWishListed={
                        findBookById(book.id, wishListBooks) ? true : false
                    }
                    onWishListClick={() => wishlistBook(book)}
                />
            ))}
        </div>
    );
};

export default WishlistPage;
