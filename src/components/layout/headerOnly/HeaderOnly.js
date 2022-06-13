import React from 'react';
import classNames from 'classnames/bind';
import Header from '../components/header/Header';
import styles from './headerOnly.module.scss';
const cx = classNames.bind(styles);
const HeaderOnly = ({ children }) => {
    return (
        <div className={cx('wrapper')}>
            <Header></Header>
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
};

export default HeaderOnly;
