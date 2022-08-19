import './post.css';
import { MoreVert } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { Post } from '../../models/Post.modle';
import { User } from '../../models/user.model';
import { getUserById } from '../../api/userApi';
import dateFormat from 'dateformat';
import { changeLike } from '../../api/postApi';
import { useAppDispatch } from './../../app/hook';
import { postLikeReuquest } from '../../features/post/postSlice';

interface Props {
    post: Post;
}
export default function PostCard({ post }: Props) {
    const dispatch = useAppDispatch();
    const [user, setUser] = useState<User | null>(null);
    useEffect(() => {
        getUserById(post.userId)
            .then((user) => setUser(user))
            .catch(() => setUser(null));
    }, [post]);

    const handleLike = (postId: string) => {
        console.log(postId);

        dispatch(postLikeReuquest(postId));
    };

    return user ? (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img
                            className="postProfileImg"
                            src={'assets/person/2.jpeg'}
                            alt=""
                        />
                        <span className="postUsername">{user.userName}</span>
                        <span className="postDate">
                            {dateFormat(post.createdAt, 'fullDate')}
                        </span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src={post.image} alt="" />
                </div>
                <div className="postBottom">
                    <div
                        className="postBottomLeft"
                        onClick={() => handleLike(post.id)}
                    >
                        <img
                            className="likeIcon"
                            src="assets/like.png"
                            alt=""
                        />
                        <img
                            className="likeIcon"
                            src="assets/heart.png"
                            alt=""
                        />
                        <span className="postLikeCounter">
                            {post.likes.length && post.likes[0] !== ''
                                ? post.likes.length
                                : 0}{' '}
                            people like it
                        </span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">
                            {post.likes.length} comments
                        </span>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <></>
    );
}
