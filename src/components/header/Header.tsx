import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import './header.css';

import { Container } from '@mui/system';
import Search from './Search';
import MenuPC from './Menu';
import Acount from './Acount';
import MenuMobile from './MenuMobile';
import { Button } from '@mui/material';
import SideBar, { AppBar } from '../sidebar/SideBar';
import { Link } from 'react-router-dom';

export default function PrimarySearchAppBar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);
    const [open, setOpen] = React.useState(false);

    const menuId = 'primary-search-account-menu';
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const isLogin = true;
    const handleDrawerOpen = () => {
        setOpen(!open);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        console.log(event.currentTarget);

        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    return (
        <>
            <AppBar position="fixed" open={open}>
                <Container>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 2 }}
                            onClick={handleDrawerOpen}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' } }}
                        >
                            <Link className="link-logo" to={'/home'}>
                                Socical App
                            </Link>
                        </Typography>

                        <Search />

                        <Box sx={{ flexGrow: 1 }} />
                        {!isLogin ? (
                            <Button color="inherit">Login</Button>
                        ) : (
                            <Acount
                                handleProfileMenuOpen={handleProfileMenuOpen}
                                handleMobileMenuOpen={handleMobileMenuOpen}
                                menuId={menuId}
                                mobileMenuId={mobileMenuId}
                            />
                        )}
                    </Toolbar>
                    <MenuMobile
                        mobileMoreAnchorEl={mobileMoreAnchorEl}
                        mobileMenuId={mobileMenuId}
                        handleMobileMenuClose={handleMobileMenuClose}
                        handleProfileMenuOpen={handleProfileMenuOpen}
                    />
                    <MenuPC
                        handleMenuClose={handleMenuClose}
                        anchorEl={anchorEl}
                    />
                </Container>
            </AppBar>
            <SideBar
                open={open}
                handleDrawerClose={handleDrawerClose}
                handleDrawerOpen={handleDrawerOpen}
            />
        </>
    );
}
