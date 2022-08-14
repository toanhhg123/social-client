import Post from '../post/Post';
import Share from '../Share/Share';
import './feed.css';
import { useAppDispatch, useAppSelector } from '../../app/hook';

import { Post as IPost } from './../../models/Post.modle';
interface Props {
    postList: IPost[];
}

export default function Feed({ postList }: Props) {
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {postList.map((p) => (
                    <Post key={p.id} post={p} />
                ))}
            </div>
        </div>
    );
}
