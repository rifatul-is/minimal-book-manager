import React, { useEffect, useRef, useState } from 'react';
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
import { useLayoutContext } from '../context/layout_context.js';
import { fetchBooks } from '../api/books.js';

const HomePage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [bookDetailsData, setBookDetailsData] = useState(null);
    // const [resetFetchData, setResetFetchData] = useState(false);
    const [bookData, setBookData] = useState(null);
    const [error, setError] = useState(null);
    const controllerRef = useRef(null);
    const [wishListBooks, setWishListBooks] = useState(
        JSON.parse(localStorage.getItem('wishlist_books')) || []
    );
    const {
        selectedGenre,
        setSelectedGenre,
        selectedLanguage,
        setSelectedLanguage,
        bookSearch,
        setBookSearch
    } = useLayoutContext();

    const getBooks = async (signal, url) => {
        try {
            setIsLoading(true);
            const result = await fetchBooks(
                signal,
                url,
                bookSearch,
                selectedGenre,
                selectedLanguage
            );
            console.log(result);
            setBookData(result.data);
        } catch (e) {
            setError(e.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        localStorage.setItem('wishlist_books', JSON.stringify(wishListBooks));
    }, [wishListBooks]);

    useEffect(() => {
        if (controllerRef.current) {
            controllerRef.current.abort();
        }

        controllerRef.current = new AbortController();
        const signal = controllerRef.current.signal;

        getBooks(signal).then((r) => {});
    }, [bookSearch, selectedGenre, selectedLanguage]);

    return (
        <div>
            {error && alert(error)}

            {isLoading || bookData === null ? (
                <div className="w-full h-full flex flex-col gap-8 items-center justify-center">
                    <CircularSpinner />
                    <p className="text-center text-sm text-primary-default">
                        Still Loading... <br />
                        Blame the API, not me! I promise I’m fast!
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-3 gap-8">
                    {bookData?.results.map((book, index) => (
                        <>
                            <BookCover
                                key={index}
                                book={book}
                                isWishListed={
                                    !!findBookById(book.id, wishListBooks)
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
            )}

            {bookDetailsData && (
                <BookDetail
                    book={bookDetailsData}
                    setBook={setBookDetailsData}
                    wishListBooks={wishListBooks}
                    setWishListBooks={setWishListBooks}
                />
            )}

            {!isLoading && bookData !== null && (
                <div className="py-10 flex gap-4 justify-end">
                    <Button
                        width="w-36"
                        height="h-8"
                        fontSize="text-sm"
                        label="Previous Page"
                        disabled={bookData?.previous ? false : true}
                        onClick={() => {
                            getBooks(null, bookData?.next).then((r) => {});
                        }}
                    />
                    <Button
                        width="w-36"
                        height="h-8"
                        fontSize="text-sm"
                        label="Next Page"
                        disabled={bookData?.next ? false : true}
                        onClick={() => {
                            getBooks(null, bookData?.next).then((r) => {});
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default HomePage;
