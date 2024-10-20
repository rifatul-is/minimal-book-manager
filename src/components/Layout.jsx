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
            <div className="min-h-screen flex flex-col justify-between">
                <div className="w-full lg:w-[1200px] mx-auto">
                    <Navbar />
                </div>

                <div className="flex flex-col lg:flex-row lg:space-x-6 p-6 w-full lg:w-[1200px] mx-auto">
                    <div className="hidden lg:block w-full lg:w-[300px] lg:sticky lg:top-4 lg:h-screen overflow-hidden">
                        <Sidebar />
                    </div>

                    <div className="w-full px-4 lg:px-10 overflow-y-auto">
                        <Outlet />
                    </div>
                </div>

                <div className="lg:hidden m-6">
                    <Sidebar />
                </div>

                <Footer />
            </div>
        </LayoutContext.Provider>
    );
};

export default Layout;
