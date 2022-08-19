import './profile.css';
import React, { useEffect } from 'react';
import Feed from '../../components/feed/Feed';
import Layout from '../../components/layout/Layout';
import Rightbar from '../../components/rightbar/Rightbar';
import { useAppSelector } from '../../app/hook';
import {
    updateCoverRequest,
    updateProfileRequest,
    userState,
} from '../../features/auth/userSlice';
import { useAppDispatch } from './../../app/hook';
import { posts, postsRequestMyPost } from '../../features/post/postSlice';

type Props = {};

const Profile = (props: Props) => {
    const user = useAppSelector(userState);

    const userInfo = useAppSelector(userState);
    const dispatch = useAppDispatch();
    const postList = useAppSelector(posts);

    useEffect(() => {
        if (userInfo?.id) {
            dispatch(postsRequestMyPost(userInfo.id));
        }
    }, [dispatch, userInfo]);
    const handleChangeCoverPicture = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const form = new FormData();
        if (e.target.files && e.target.files.length) {
            form.append('coverPicture', e.target.files[0]);
            dispatch(updateCoverRequest(form));
        }
    };
    const handleChangeProflePicture = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const form = new FormData();
        if (e.target.files && e.target.files.length) {
            console.log(form);

            form.append('profilePicture', e.target.files[0]);
            dispatch(updateProfileRequest(form));
        }
    };
    return (
        <Layout>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <label
                            htmlFor="coverPicture"
                            style={{ height: 'max-content', display: 'block' }}
                        >
                            <img
                                className="profileCoverImg"
                                src={user?.coverPicture || 'assets/post/3.jpeg'}
                                alt=""
                            />
                            <input
                                id="coverPicture"
                                type="file"
                                onChange={handleChangeCoverPicture}
                                style={{ display: 'none' }}
                            />
                        </label>

                        <label
                            htmlFor="profilePicture"
                            className="profileUserImg"
                        >
                            <input
                                id="profilePicture"
                                type="file"
                                style={{ display: 'none' }}
                                onChange={handleChangeProflePicture}
                            />

                            <img
                                src={
                                    user?.profilePicture ||
                                    'assets/person/7.jpeg'
                                }
                                alt=""
                                style={{ width: '100%', height: '100%' }}
                            />
                        </label>
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
