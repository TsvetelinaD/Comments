import React from 'react';
import './index.css';

export default function PostInputAndButton({ text, setText, setPost }) {
    return (
        <div className="postInput">
            <input type="text" name="comment" placeholder='Write post' value={text} onChange={(event) => {
                setText((text) => (event.target.value));
            }} />
            <button id="commentButton" onClick={() => {
                if (text.trim().length === 0) {
                    return;
                }
                let data = {
                    text: text,
                    date: new Date().toLocaleString(),
                }
                setPost((posts) => ([...posts, data]));
                setText((text) => (''));
            }}>
                Post
            </button>
        </div>
    )
}