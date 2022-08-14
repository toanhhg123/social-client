import { MenuItem } from '@mui/material';
import Menu from '@mui/material/Menu';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hook';
import { logout, session } from '../../features/auth/authSlice';

type Props = {
    anchorEl: null | HTMLElement;
    handleMenuClose: () => any;
};

const MenuPC = ({ anchorEl, handleMenuClose }: Props) => {
    const sessionAuth = useAppSelector(session);
    const dispatch = useAppDispatch();
    const menuId = 'primary-search-account-menu';
    const isMenuOpen = Boolean(anchorEl);

    return (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>
                <Link to={'/profile'}>profile</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
            <MenuItem
                onClick={() => sessionAuth && dispatch(logout(sessionAuth))}
            >
                logout
            </MenuItem>
        </Menu>
    );
};

export default MenuPC;
