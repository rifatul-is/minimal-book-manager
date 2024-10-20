import React from 'react';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from 'react-router-dom';
import App from '../App.jsx';
import WishlistPage from '../pages/WishlistPage.jsx';
import homePage from '../pages/HomePage.jsx';
import HomePage from '../pages/HomePage.jsx';
import Layout from './Layout.jsx';
import BookDetailsPage from '../pages/BookDetailsPage.jsx';

const routes = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route path="/book-details" element={<BookDetailsPage />} />
            </Route>
        </>
    )
);
export default routes;
