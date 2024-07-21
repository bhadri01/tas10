import React, { ReactNode } from 'react';
import Navbar from './navbar';
import Footer from './Footer';

type LayoutProps = {
    children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;