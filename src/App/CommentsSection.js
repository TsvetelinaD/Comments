import React, { useState } from 'react';
import './index.css';
import CommentInputAndButton from './CommentInputAndButton';
import CommentAndDate from './CommentAndDate';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import UpdateField from './UpdateField';

export default function Comments() {
    const [text, setText] = useState('');
    const [allComments, setComments] = useState([]);
    const [commentIndex, setCommentIndex] = useState(null);

    return (
        <div>
            <div>
                {allComments.map((comment, index) => {
                    return (
                        <div key={index}>
                            <div className="commentsSection">
                                <CommentAndDate comment={comment} />
                                <EditButton text={text} index={index} setCommentIndex={setCommentIndex} />
                                <DeleteButton allComments={allComments} setComments={setComments} index={index} />

                                {commentIndex === index &&
                                    <UpdateField allComments={allComments} index={index} text={text} setComments={setComments} setCommentIndex={setCommentIndex} />
                                }
                            </div>
                        </div>
                    )
                }
                )}
            </div>

            <CommentInputAndButton text={text} setText={setText} allComments={allComments} setComments={setComments} />
        </div>
    )
}