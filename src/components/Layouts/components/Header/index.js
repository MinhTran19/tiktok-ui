import { React, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faCircleNotch,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const Header = () => {
    const [searchResult, setSearchResult] = useState([]);

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
                                Kết quả
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
                    <div className={cx('actions')}></div>
                </div>
            </header>
        </>
    );
};

export default Header;
