import { React, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faCircleNotch,
    faMagnifyingGlass,
    faSignIn,
    faPlus,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const Header = () => {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    return (
        <>
            <header className={cx('wrapper', 'd-flex')}>
                <div className={cx('inner', 'd-flex')}>
                    <div className={cx('logo')}>
                        <img src={images.logo} alt="Tiktok" />
                    </div>
                    <Tippy
                        render={(attrs) => (
                            <div
                                className={cx('search-result')}
                                tabIndex={-1}
                                {...attrs}
                            >
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>
                                        <AccountItem />
                                        <AccountItem />
                                        <AccountItem />
                                        <AccountItem />
                                        <AccountItem />
                                    </h4>
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={cx('search', 'd-flex')}>
                            <input
                                placeholder="Search accounts and videos"
                                spellCheck={false}
                            />
                            <button className={cx('clear-btn')}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                            <FontAwesomeIcon
                                className={cx('loading')}
                                icon={faCircleNotch}
                            />
                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </Tippy>
                    <div className={cx('actions')}>
                        <Button
                            text
                            medium
                            iconLeft={<FontAwesomeIcon icon={faPlus} />}
                            onClick={
                                () => 
                                console.log('Button Clicked')
                            }
                        >
                            Upload
                        </Button>
                        <Button
                            primary
                            medium
                            onClick={
                                () => 
                                console.log('Button Clicked')
                            }
                        >
                            Log in
                        </Button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
