import './rightbar.css';

export default function Rightbar({ profile }: any) {
    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbarTitle">User information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">New York</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">Madrid</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">Single</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img
                            src="assets/person/1.jpeg"
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">
                            John Carter
                        </span>
                    </div>
                    <div className="rightbarFollowing">
                        <img
                            src="assets/person/2.jpeg"
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">
                            John Carter
                        </span>
                    </div>
                    <div className="rightbarFollowing">
                        <img
                            src="assets/person/3.jpeg"
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">
                            John Carter
                        </span>
                    </div>
                    <div className="rightbarFollowing">
                        <img
                            src="assets/person/4.jpeg"
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">
                            John Carter
                        </span>
                    </div>
                    <div className="rightbarFollowing">
                        <img
                            src="assets/person/5.jpeg"
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">
                            John Carter
                        </span>
                    </div>
                    <div className="rightbarFollowing">
                        <img
                            src="assets/person/6.jpeg"
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">
                            John Carter
                        </span>
                    </div>
                </div>
            </>
        );
    };
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <ProfileRightbar />
            </div>
        </div>
    );
}
