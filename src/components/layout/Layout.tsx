import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import Header from '../header/Header';
import { DrawerHeader } from '../sidebar/SideBar';

type Props = {
    children?: React.ReactNode;
};

const Layout = (props: Props) => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);
    return (
        <Box sx={{ display: 'flex' }}>
            <Header />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                {props.children}
            </Box>
        </Box>
    );
};

export default Layout;
