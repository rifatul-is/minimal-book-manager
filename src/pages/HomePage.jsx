import React, { useEffect, useState } from 'react';
import HeartIcon from '../components/icons/HeartIcon.jsx';
import COLOR_PALATTE from '../constants/color_palette.js';
import BookCover from '../components/BookCover.jsx';
import useFetch from '../hooks/useFetch.js';
import { base_url } from '../api/api_urls.js';
import CircularSpinner from '../components/CircularSpinner.jsx';
import Button from '../components/Button.jsx';
import {
    findBookById,
    wishlistBook
} from '../assets/utils/global_functions.js';
import BookDetail from '../components/BookDetail.jsx';

const HomePage = () => {
    const [url, setUrl] = useState(base_url);
    const [bookDetailsData, setBookDetailsData] = useState(null);
    const { isLoading, error, data } = useFetch('GET', url);
    const [wishListBooks, setWishListBooks] = useState(
        JSON.parse(localStorage.getItem('wishlist_books')) || []
    );

    useEffect(() => {
        localStorage.setItem('wishlist_books', JSON.stringify(wishListBooks));
    }, [wishListBooks]);

    return (
        <div>
            {isLoading && (
                <div className="w-full h-full flex flex-col gap-8 items-center justify-center">
                    <CircularSpinner />
                    <p className="text-center text-sm text-primary-default">
                        Still Loading... <br />
                        Blame the API, not me! I promise I’m fast!
                    </p>
                </div>
            )}

            {error && alert(error)}

            <div className="grid grid-cols-3 gap-8">
                {!isLoading &&
                    data?.results.map((book, index) => (
                        <>
                            <BookCover
                                key={index}
                                book={book}
                                isWishListed={
                                    findBookById(book.id, wishListBooks)
                                        ? true
                                        : false
                                }
                                onWishListClick={() => {
                                    wishlistBook(
                                        book,
                                        wishListBooks,
                                        setWishListBooks
                                    );
                                }}
                                onReadMoreClick={() => {
                                    setBookDetailsData(book);
                                }}
                            />
                        </>
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

            {!isLoading && (
                <div className="py-10 flex gap-4 justify-end">
                    <Button
                        width="w-36"
                        height="h-8"
                        fontSize="text-sm"
                        label="Previous Page"
                        disabled={data?.previous ? false : true}
                        onClick={() => {
                            setUrl(data?.previous);
                        }}
                    />
                    <Button
                        width="w-36"
                        height="h-8"
                        fontSize="text-sm"
                        label="Next Page"
                        disabled={data?.next ? false : true}
                        onClick={() => {
                            setUrl(data?.next);
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default HomePage;
