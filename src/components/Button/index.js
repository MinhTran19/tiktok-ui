import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = ({
    to,
    href,
    children,
    text = false,
    primary = false,
    outline = false,
    rounded = false,
    small = false,
    medium = false,
    large = false,
    disabled = false,
    iconLeft,
    iconRight,
    className,
    onClick,
    ...passProps
}) => {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    // Remove events listener when component has tag disabled
    if (disabled) {
        Object.keys(props).forEach(key => {
            if (key.startsWith('on') && props[key] === 'function') {
                delete props[key]
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        text,
        primary,
        outline,
        rounded,
        small,
        medium,
        large,
        disabled,
    });
    return (
        <>
            <Comp className={classes} {...props}>
                {iconLeft && <span className={cx('iconLeft-btn')}>{iconLeft}</span>}
                <span className={cx('title-btn')}>{children}</span>
                {iconRight && <span className={cx('iconRight-btn')}>{iconRight}</span>}
            </Comp>
        </>
    );
};

export default Button;
