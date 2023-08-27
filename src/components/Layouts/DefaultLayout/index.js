import classNames from "classnames/bind";
import styles from './DefaultLayout.module.scss'
import Header from "~/components/Layouts/components/Header";
import Sidebar from "./Sidebar";

const cx = classNames.bind(styles)

const DefaultLayout = ({children}) => {
    return ( 
        <>
            <div className={cx('wrapper', 'd-flex')}>
                <Header />
                <div className={cx('container', 'd-flex')}>
                    <Sidebar />
                    <div className={cx('content')}>
                        {children}
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default DefaultLayout;