import React from 'react';
import './index.css';

export default function DeleteButton(props) {
    return (
        <button className="button" onClick={() => {
            const comments = [...props.allComments];
            comments.splice(props.index, 1);
            props.setComments(comments);
        }}>
            x
        </button>
    )
}