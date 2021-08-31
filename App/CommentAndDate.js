import React from 'react';
import './index.css';

export default function CommentAndDate(props) {
    return (
        <div>
            <div>{props.comment.text}</div>
            <div id="date" >{props.comment.date.toString()}</div>
        </div>
    )
}