import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import Feed from '../components/feed/Feed';
import Layout from '../components/layout/Layout';
import MessageList from '../components/Message/MessageList';
import { posts, postsRequest } from '../features/post/postSlice';
import { useAppDispatch, useAppSelector } from './../app/hook';

type Props = {};

const Home = (props: Props) => {
    const dispatch = useAppDispatch();
    const postList = useAppSelector(posts);

    useEffect(() => {
        dispatch(postsRequest());
    }, [dispatch]);
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
                        <Feed postList={postList} />
                    </Box>
                    <MessageList />
                </Box>
            </Layout>
        </>
    );
};

export default Home;
