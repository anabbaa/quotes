import React from 'react';
import CommentItem from './CommentItem';
import classes from './CommentItem.module.css';

const CommentsList = (props) => {
  return (
    <ul className={classes.comments}>
      {props.comments.map((comment) => (
        <CommentItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
};
export default CommentsList;