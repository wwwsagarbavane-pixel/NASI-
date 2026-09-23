import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
    const location = useLocation();

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    // Apply specific classes to body based on route (e.g. home-page)
    useEffect(() => {
        if (location.pathname === '/') {
            document.body.classList.add('home-page');
        } else {
            document.body.classList.remove('home-page');
        }
    }, [location.pathname]);

    return (
        <div className="app-container">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
