import React from 'react';
import Navbar from './Navbar.jsx';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';
import Footer from './Footer.jsx';

const Layout = () => {
    const location = useLocation();

    return (
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
    );
};

export default Layout;
