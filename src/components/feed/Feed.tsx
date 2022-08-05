import Post from '../post/Post';
import Share from '../Share/Share';
import './feed.css';
import { Posts } from '../../myData';

export default function Feed() {
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {Posts.map((p) => (
                    <Post key={p.id} post={p} />
                ))}
            </div>
        </div>
    );
}
