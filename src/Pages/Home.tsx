import { Box } from '@mui/material';
import React from 'react';
import Feed from '../components/feed/Feed';
import Layout from '../components/layout/Layout';
import MessageList from '../components/Message/MessageList';

type Props = {};

const Home = (props: Props) => {
    return (
        <>
            <Layout>
                <Box sx={{ display: 'grid', gridTemplateColumns: '3fr 1fr' }}>
                    <Box
                        sx={{
                            margin: '0 auto',
                            width: '800px',
                            maxWidth: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '2rem',
                        }}
                    >
                        <Feed />
                    </Box>
                    <MessageList />
                </Box>
            </Layout>
        </>
    );
};

export default Home;
