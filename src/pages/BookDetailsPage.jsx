import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BookDetailsPage = () => {
    const location = useLocation();
    const { book } = location.state || null;

    return <div></div>;
};

export default BookDetailsPage;
