import React from 'react';
import {
    findBookById,
    wishlistBook
} from '../assets/utils/global_functions.js';
import HeartIcon from './icons/HeartIcon.jsx';
import COLOR_PALATTE from '../constants/color_palette.js';
import languageIcon from '../assets/svgs/language.svg';
import downloadIcon from '../assets/svgs/download.svg';

const BookDetails = ({ book, setBook, wishListBooks, setWishListBooks }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-full max-w-4xl p-8 rounded-lg relative z-10">
                <button
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-xl hover:text-red-500"
                    onClick={() => setBook(null)}
                >
                    &times;
                </button>

                <div className="flex gap-8 p-6">
                    <img
                        src={book?.formats['image/jpeg']}
                        className="w-[550px] h-fit rounded overflow-hidden"
                    />
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-start">
                            <h2 className="text-2xl font-bold font-roboto-slab">
                                {book?.title}
                            </h2>
                            <button
                                onClick={() => {
                                    wishlistBook(
                                        book,
                                        wishListBooks,
                                        setWishListBooks
                                    );
                                }}
                            >
                                <HeartIcon
                                    fill={
                                        !!findBookById(book?.id, wishListBooks)
                                    }
                                    color={COLOR_PALATTE.secondary.default}
                                />
                            </button>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-secondary-default text-sm">
                                <p className="text-primary-default text-xs font-semibold">
                                    Author
                                </p>
                                {book?.authors[0]?.name}
                            </span>
                            <span className="text-secondary-default text-sm">
                                <p className="text-primary-default text-xs font-semibold">
                                    Birth
                                </p>
                                {book?.authors[0]?.birth_year}
                            </span>
                            <span className="text-secondary-default text-sm">
                                <p className="text-primary-default text-xs font-semibold">
                                    Death
                                </p>
                                {book?.authors[0]?.death_year}
                            </span>
                        </div>

                        <div>
                            <p className="text-primary-default text-xs font-semibold mb-0.5">
                                Genre Tags
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {book.subjects
                                    .sort((a, b) => a.length - b.length)
                                    .map((book) => (
                                        <p className="bg-gray-200 rounded-sm text-sm py-1 px-2">
                                            {book}
                                        </p>
                                    ))}
                            </div>
                        </div>

                        <div>
                            <p className="text-primary-default text-xs font-semibold mb-0.5">
                                Bookshelf
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {book.bookshelves
                                    .filter((shelf) =>
                                        shelf.startsWith('Browsing:')
                                    )
                                    .map((shelf) =>
                                        shelf.split('Browsing:')[1].trim()
                                    )
                                    .sort((a, b) => a.length - b.length)
                                    .map((book) => (
                                        <p
                                            className="bg-gray-200 rounded-sm text-sm py-1 px-2"
                                            key={book}
                                        >
                                            {book}
                                        </p>
                                    ))}
                            </div>
                        </div>

                        <div className="flex gap-2 mt-4">
                            <p className="flex items-center gap-1 text-sm font-medium">
                                <img src={languageIcon} className="w-4 h-4" />
                                {book.languages.map((language, index) => {
                                    return language?.toUpperCase();
                                })}
                            </p>
                            <p className="flex items-center gap-1 text-sm font-medium">
                                <img src={downloadIcon} className="w-4 h-4" />{' '}
                                {book.download_count}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
