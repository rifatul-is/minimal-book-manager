export const findBookById = (bookID, bookArray) => {
    if (bookArray) {
        return bookArray.find((item) => item.id === bookID);
    } else {
        return false;
    }
};

export const wishlistBook = (book, wishListBooks, setWishListBooks) => {
    if (typeof setWishListBooks !== 'function') {
        return;
    }
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
