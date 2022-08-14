import './profile.css';
import React, { useEffect } from 'react';
import Feed from '../../components/feed/Feed';
import Layout from '../../components/layout/Layout';
import Rightbar from '../../components/rightbar/Rightbar';
import { useAppSelector } from '../../app/hook';
import { userState } from '../../features/auth/userSlice';
import { useAppDispatch } from './../../app/hook';
import { posts, postsRequestMyPost } from '../../features/post/postSlice';

type Props = {};

const Profile = (props: Props) => {
    const userInfo = useAppSelector(userState);
    const dispatch = useAppDispatch();
    const postList = useAppSelector(posts);
    useEffect(() => {
        if (userInfo?.id) {
            dispatch(postsRequestMyPost(userInfo.id));
        }
    }, [dispatch, userInfo]);
    return (
        <Layout>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img
                            className="profileCoverImg"
                            src="assets/post/3.jpeg"
                            alt=""
                        />
                        <img
                            className="profileUserImg"
                            src="assets/person/7.jpeg"
                            alt=""
                        />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">
                            {userInfo?.userName}
                        </h4>
                        <span className="profileInfoDesc">
                            {userInfo?.about || 'no about'}
                        </span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed postList={postList} />
                    <Rightbar profile />
                </div>
            </div>
        </Layout>
    );
};

export default Profile;
