import React, { useState } from 'react';
import './index.css';
import PostInputAndButton from './PostInputAndButton';
import PostAndDate from './PostAndDate.js';
import CommentsSection from './CommentsSection.js';

export default function Post() {
    const [text, setText] = useState('');
    const [posts, setPost] = useState([]);

    return (
        <div className="app">
            <PostInputAndButton text={text} setText={setText} setPost={setPost} />
            <div>
                {posts.map((post, index) =>
                (
                    <div className="postSection" key={index}>
                        <PostAndDate post={post} />
                        <CommentsSection />
                    </div>
                )
                )}
            </div>
        </div>
    )
}