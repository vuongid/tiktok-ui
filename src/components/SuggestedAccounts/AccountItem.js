import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

const renderPreview = (attrs) => (
    <div tabIndex="-1" {...attrs}>
        <PopperWrapper>
            <AccountPreview />
        </PopperWrapper>
    </div>
);

function AccountItem({ popper = false }) {
    const displayItem = (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1678424400&x-signature=Orn5MOjLSpINBgDtodLpTt5sdxk%3D"
                alt=""
            />
            <div className={cx('info')}>
                <p className={cx('nickname')}>
                    <strong>theanh28</strong>
                    <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>the anh 28</p>
            </div>
        </div>
    );

    return popper ? (
        <Tippy delay={[700, 0]} offset={[-40, 0]} interactive={true} placement="bottom" render={renderPreview}>
            {displayItem}
        </Tippy>
    ) : (
        displayItem
    );
}

export default AccountItem;
