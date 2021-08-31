import React, { useState } from 'react';
import './index.css';

export default function UpdateField(props) {
    const [newComment, setNewComment] = useState('');

    return (
        <div>
            <input type="text" onChange={(e) => {
                setNewComment(e.target.value)
            }} />
            <button className='button' onClick={() => {
                let comments = [...props.allComments];
                comments[props.index].text = newComment;
                props.setComments(comments);
                props.setCommentIndex(null);
            }}>Update</button>
        </div>
    )
}