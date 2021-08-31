import React from 'react';
import './index.css';

export default function PostAndDate({post}) {
    return (
        <div className="post">
            <div >{post.text}</div>
            <div id="date" >{post.date.toString()}</div>
        </div>
    )
}
