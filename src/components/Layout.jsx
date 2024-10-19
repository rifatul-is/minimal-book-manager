import React from 'react';
import Navbar from './Navbar.jsx';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';

const Layout = () => {
    return (
        <div>
            <Navbar />
            <div className="flex pt-6">
                <div className="w-[300px] h-screen sticky top-4 overflow-hidden">
                    <Sidebar />
                </div>
                <div className="w-full px-10 overflow-y-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;
