import './profile.css';
import React from 'react';
import Feed from '../../components/feed/Feed';
import Layout from '../../components/layout/Layout';
import Rightbar from '../../rightbar/Rightbar';

type Props = {};

const Profile = (props: Props) => {
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
                        <h4 className="profileInfoName">Safak Kocaoglu</h4>
                        <span className="profileInfoDesc">
                            Hello my friends!
                        </span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed />
                    <Rightbar profile />
                </div>
            </div>
        </Layout>
    );
};

export default Profile;
