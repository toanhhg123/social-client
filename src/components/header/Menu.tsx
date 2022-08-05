import { MenuItem } from '@mui/material';
import Menu from '@mui/material/Menu';

import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
    anchorEl: null | HTMLElement;
    handleMenuClose: () => any;
};

const MenuPC = ({ anchorEl, handleMenuClose }: Props) => {
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
        </Menu>
    );
};

export default MenuPC;
