import React from 'react';
import Header from '../defaultLayout/header';

const HeaderOnly = ({ children }) => {
    return (
        <div>
            <Header></Header>
            <div>{children}</div>
        </div>
    );
};

export default HeaderOnly;
