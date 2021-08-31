import React from 'react';
import './index.css';

export default function EditButton(props) {
    return (
        <button className="button" value={props.text} onClick={() => {
            props.setCommentIndex(props.index);
        }}>
            Edit
        </button>
    )
}