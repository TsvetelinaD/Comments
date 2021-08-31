import React from 'react';
import './index.css';

export default function CommentInput(props) {
    return (
        <input type="text" name="comment" value={props.text} onChange={(event) => {
            props.setText(event.target.value);
        }} />
    )
}