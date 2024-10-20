import React, { useEffect, useState } from 'react';
import BookCover from '../components/BookCover.jsx';
import {
    findBookById,
    wishlistBook
} from '../assets/utils/global_functions.js';
import HeartIcon from '../components/icons/HeartIcon.jsx';
import COLOR_PALATTE from '../constants/color_palette.js';
import downloadIcon from '../assets/svgs/download.svg';
import languageIcon from '../assets/svgs/language.svg';
import BookDetail from '../components/BookDetail.jsx';

const WishlistPage = () => {
    const [bookDetailsData, setBookDetailsData] = useState(null);
    const [wishListBooks, setWishListBooks] = useState(
        JSON.parse(localStorage.getItem('wishlist_books')) || []
    );

    useEffect(() => {
        localStorage.setItem('wishlist_books', JSON.stringify(wishListBooks));
    }, [wishListBooks]);

    return (
        <div className="w-full">
            {wishListBooks.length === 0 && (
                <div className="text-sm text-primary-default flex justify-center text-center">
                    Seems like you didn't wishlist any books. <br />
                    Try Pressing the Heart Icon in the homepage on the books.
                </div>
            )}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
                {wishListBooks?.map((book, index) => (
                    <BookCover
                        key={index}
                        book={book}
                        isWishListed={
                            findBookById(book.id, wishListBooks) ? true : false
                        }
                        onWishListClick={() =>
                            wishlistBook(book, wishListBooks, setWishListBooks)
                        }
                        onReadMoreClick={() => {
                            setBookDetailsData(book);
                        }}
                    />
                ))}
            </div>

            {bookDetailsData && (
                <BookDetail
                    book={bookDetailsData}
                    setBook={setBookDetailsData}
                    wishListedBooks={wishListBooks}
                    setWishListedBooks={setWishListBooks}
                />
            )}
        </div>
    );
};

export default WishlistPage;
