import React from 'react';
import Header from './header';
import Sidebar from './sidebar';

const DefaultLayout = ({ children }) => {
    return (
        <div className="default-layout">
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
};

export default DefaultLayout;
