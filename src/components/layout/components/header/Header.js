import React, { useState } from 'react';
import className from 'classnames/bind';
import styles from './header.module.scss';

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faEllipsisVertical,
    faMagnifyingGlass,
    faPlus,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import Button from '../../button';

const cx = className.bind(styles);
const Header = () => {
    const [isLogged, setIsLogged] = useState(true);
    return (
        <header className={cx('header')}>
            <div className={cx('container')}>
                <NavLink to="/" className={cx('logo')}>
                    <img
                        src="images/logo.svg"
                        alt=""
                        className={cx('logo-img')}
                    />
                </NavLink>
                <div className={cx('search')}>
                    <input
                        className={cx('search-input')}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                    />
                    <button className={cx('search-clear')}>
                        {/* <FontAwesomeIcon
                            className={cx('loading')}
                            icon={faSpinner}
                        /> */}
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <span className={cx('spliter')}></span>
                    <button className={cx('search-submit')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                    <div className="search-menu"></div>
                </div>
                <div className={cx('right')}>
                    <Button
                        leftIcon={<FontAwesomeIcon icon={faPlus} />}
                        className={cx('btn-upload')}
                    >
                        Upload
                    </Button>

                    {isLogged ? (
                        <>
                            <Button className={cx('btn-login')}>
                                <span>Login</span>
                            </Button>
                            <Button
                                className={cx('action')}
                                leftIcon={
                                    <FontAwesomeIcon
                                        icon={faEllipsisVertical}
                                    />
                                }
                            ></Button>
                        </>
                    ) : (
                        <div className={cx('user-info')}>
                            <img
                                className={cx('avatar')}
                                src="images/avatar.jpg"
                                alt="avatar"
                            />
                            <div className={cx('menu')}></div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
