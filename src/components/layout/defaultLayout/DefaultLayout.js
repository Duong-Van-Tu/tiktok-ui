import React from 'react';
import classnames from 'classnames/bind';
import Sidebar from './sidebar';
import Header from '../components/header';
import styles from './defaultLayout.module.scss';
const cx = classnames.bind(styles);
const DefaultLayout = ({ children }) => {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
};

export default DefaultLayout;
