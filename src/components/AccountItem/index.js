import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/3a94326876590fe5c356b595f5da12b6~c5_300x300.webp?x-expires=1677988800&x-signature=Hxa4tfEtPRnrevkgsIq8MPwyn4U%3D"
                alt="duong"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Le Duong</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>duong99</span>
            </div>
        </div>
    );
}

export default AccountItem;
