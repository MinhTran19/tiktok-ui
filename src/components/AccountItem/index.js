import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const AccountItem = () => {
    return (
        <>
            <div className={cx('wrapper', 'd-flex')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/82528a36d2f3694ecfc90f291e390b78.jpeg?x-expires=1693490400&x-signature=dcpFUlYQJJc7JnKRrwMywhdNoGQ%3D"
                    alt="Khanggg"
                />
                <div className={cx('info')}>
                    <p className={cx('name', 'd-flex')}>
                        <h4>Dinh Hoang Khang</h4>
                        <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck} />
                    </p>
                    <span className={cx('username')}>HngKhanggg</span>
                </div>
            </div>
        </>
    );
};

export default AccountItem;
