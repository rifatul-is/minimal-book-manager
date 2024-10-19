export const findBookById = (bookID, bookArray) => {
    if (bookArray) {
        return bookArray.find((item) => item.id === bookID);
    } else {
        return false;
    }
};
