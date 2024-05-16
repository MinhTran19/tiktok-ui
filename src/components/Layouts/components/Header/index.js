import { React, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
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
    faShareNodes,
    faPaperPlane,
    faBell,
    faUpload,
    faCloudUpload,
    faMessage,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Menu from '~/components/Popper/Menu';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import { type } from '@testing-library/user-event/dist/type';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLightbulb} />,
        title: 'LIVE Creator Hub',
    },
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    type: 'language',
                    code: 'jp',
                    title: 'Japanese',
                },
                {
                    type: 'language',
                    code: 'ko',
                    title: 'Korean',
                },
                {
                    type: 'language',
                    code: 'ch',
                    title: 'Chinese',
                },
                {
                    type: 'language',
                    code: 'th',
                    title: 'Thai',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
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
    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //Handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hikki',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/',
            separate: true
        }
    ];

    return (
        <>
            <header className={cx('wrapper', 'd-flex')}>
                <div className={cx('inner', 'd-flex')}>
                    <div className={cx('logo')}>
                        <img src={images.logo} alt="Tiktok" />
                    </div>
                    <HeadlessTippy
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
                    </HeadlessTippy>
                    <div className={cx('actions')}>
                        {currentUser ? (
                            <>
                                <Tippy
                                    delay={[0, 200]}
                                    content="Upload video"
                                    placement="bottom"
                                >
                                    <button className={cx('action-btn')}>
                                        <FontAwesomeIcon icon={faCloudUpload} />
                                    </button>
                                </Tippy>
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </button>
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faBell} />
                                </button>
                            </>
                        ) : (
                            <>
                                <Button
                                    text
                                    medium
                                    iconLeft={<FontAwesomeIcon icon={faPlus} />}
                                    onClick={() =>
                                        console.log('Button Clicked')
                                    }
                                >
                                    Upload
                                </Button>
                                <Button
                                    primary
                                    medium
                                    onClick={() =>
                                        console.log('Button Clicked')
                                    }
                                >
                                    Log in
                                </Button>
                            </>
                        )}

                        <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                            {currentUser ? (
                                <img
                                    className={cx('user-avatar')}
                                    src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/432764689_122102918354253630_7957193755618503800_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFl7cJ6QFmd2uymIUD4vyR0sCIJDHDJNQawIgkMcMk1BuNqzRWyAjOcwaBWUdYIRrDCxc9p9vl43Cz8pqnm9HK3&_nc_ohc=MQtCcc_TjAQQ7kNvgGnBhaY&_nc_ht=scontent.fsgn5-8.fna&oh=00_AYDM92FfDDyva0NKf_O7p0shdvyuCDcxRVWAO0x4QwVkvw&oe=66490A60"
                                    alt="Sasori Hikki"
                                />
                            ) : (
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon
                                        icon={faEllipsisVertical}
                                    />
                                </button>
                            )}
                        </Menu>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
