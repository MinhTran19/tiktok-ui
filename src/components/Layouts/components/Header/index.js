import classNames from 'classnames/bind';
import styles from './Header.module.scss'

const cx = classNames.bind(styles)

const Header = () => {
    return ( 
        <>
            <header className={cx('wrapper', 'd-flex')}>
                <div className={cx('inner')}>
                    <h1>Header</h1>
                    {/* {logo} */}
                    {/* {search} */}
                </div>
            </header>
        </>
     );
}

export default Header;