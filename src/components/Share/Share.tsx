import './share.css';
import PermMedia from '@mui/icons-material/PermMedia';
import Label from '@mui/icons-material/Label';
import Room from '@mui/icons-material/Room';
import EmojiEmotions from '@mui/icons-material/EmojiEmotions';

import { useState } from 'react';
import { postStatus } from '../../api/postApi';

export default function Share() {
    const [img, setImg] = useState<string>('');
    const [selectedFile, setSelectedFile] = useState<File>();
    const [postContent, setPostContent] = useState('');

    const handleImageChange = function (
        e: React.ChangeEvent<HTMLInputElement>
    ) {
        const fileList = e.target.files;

        if (!fileList) return;
        console.log(fileList);
        const src = URL.createObjectURL(fileList[0]);
        setImg(src);

        setSelectedFile(fileList[0]);
    };

    const handleUploadFile = () => {
        const formData = new FormData();

        selectedFile &&
            formData.append('postImg', selectedFile, selectedFile.name);
        formData.append('desc', postContent);

        postStatus(formData).then((data) => console.log(data));
    };

    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img
                        className="shareProfileImg"
                        src="/assets/person/1.jpeg"
                        alt=""
                    />
                    <input
                        placeholder="What's in your mind Safak?"
                        className="shareInput"
                        onChange={(e) => setPostContent(e.target.value)}
                    />
                </div>
                {img && (
                    <div className="share-img">
                        <img src={img} alt="" />
                    </div>
                )}
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia
                                htmlColor="tomato"
                                className="shareIcon"
                            />
                            <label
                                htmlFor="file-img"
                                className="shareOptionText"
                                style={{ cursor: 'pointer' }}
                            >
                                Photo or Video
                                <input
                                    type="file"
                                    id="file-img"
                                    style={{ display: 'none' }}
                                    onChange={handleImageChange}
                                />
                            </label>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon" />
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shareIcon" />
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions
                                htmlColor="goldenrod"
                                className="shareIcon"
                            />
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton" onClick={handleUploadFile}>
                        Share
                    </button>
                </div>
            </div>
        </div>
    );
}
