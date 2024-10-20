import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';
import Footer from './Footer.jsx';
import { LayoutContext } from '../context/layout_context.js';

const Layout = () => {
    const [selectedGenre, setSelectedGenre] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState([]);
    const [bookSearch, setBookSearch] = useState('');

    const location = useLocation();

    const contextValue = {
        selectedGenre,
        setSelectedGenre,
        selectedLanguage,
        setSelectedLanguage,
        bookSearch,
        setBookSearch
    };

    return (
        <LayoutContext.Provider value={contextValue}>
            <div>
                <div className="w-full lg:w-[1200px] mx-auto">
                    <Navbar />
                </div>

                {location.pathname.startsWith('/book-details') ? (
                    <div className="pt-6 w-full lg:w-[1200px] mx-auto">
                        <Outlet />
                    </div>
                ) : (
                    <div className="flex pt-6 w-full lg:w-[1200px] mx-auto">
                        <div className="w-[300px] h-screen sticky top-4 overflow-hidden">
                            <Sidebar />
                        </div>
                        <div className="w-full px-10 overflow-y-auto">
                            <Outlet />
                        </div>
                    </div>
                )}

                <Footer />
            </div>
        </LayoutContext.Provider>
    );
};

export default Layout;
