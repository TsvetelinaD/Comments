import React from 'react';
import './index.css';

export default function CommentInputAndButton(props) {
    return (
        <div>
            <input type="text" name="comment" placeholder='Comment post' value={props.text} onChange={(event) => {
                props.setText(event.target.value);
            }} />
            <button id="commentButton" onClick={() => {
                if (props.text.trim().length === 0) {
                    return;
                }
                let info = {
                    text: props.text,
                    date: new Date().toLocaleString(),
                }
                props.setComments([...props.allComments, info]);
                props.setText('');
            }}>Comment</button>
        </div>

    )
}