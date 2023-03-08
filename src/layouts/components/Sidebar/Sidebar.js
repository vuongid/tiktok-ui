import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import routes from '~/config/routes';
import {
    HomeActiveIcon,
    HomeIcon,
    LiveActiveIcon,
    LiveIcon,
    UserGroupActiveIcon,
    UserGroupIcon,
} from '~/components/Icons/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import AccountItem from '~/components/SuggestedAccounts/AccountItem';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu className={cx('Menu')}>
                <MenuItem title="For You" to={routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="Live" to={routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
            <SuggestedAccounts label="Suggested accounts">
                <AccountItem popper />
                <AccountItem popper />
                <AccountItem popper />
                <AccountItem popper />
            </SuggestedAccounts>
            <SuggestedAccounts label="Following accounts">
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
            </SuggestedAccounts>
        </aside>
    );
}

export default Sidebar;
