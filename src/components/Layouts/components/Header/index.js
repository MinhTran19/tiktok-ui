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
    faEllipsisVertical,
    faLanguage,
    faCircleQuestion,
    faKeyboard,
    faMoon,
    faLightbulb,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Menu from '~/components/Popper/Menu';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLightbulb} />,
        title: 'LIVE Creator Hub',
    },
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Dark mode',
    },
];

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
                        interactive
                        visible={searchResult.length > 0}
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
                            onClick={() => console.log('Button Clicked')}
                        >
                            Upload
                        </Button>
                        <Button
                            primary
                            medium
                            onClick={() => console.log('Button Clicked')}
                        >
                            Log in
                        </Button>

                        <Menu items={MENU_ITEMS}>
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        </Menu>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
