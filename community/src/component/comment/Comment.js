/**
 * 2017-12-20  Glassay & Kidder
 * 评论区
 */

import React from 'react';
import CommentInput from '../comment/CommentInput.js';
import CommentList from '../comment/CommentList.js';
import styles from './comment.less';

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: [],
    };
  }

  handleSubmitComment(comment) {
    this.state.comments.push(comment);
    this.setState({
      comments: this.state.comments,
    });
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <CommentInput
          onSubmit={this.handleSubmitComment.bind(this)}
        />
        <CommentList
          comments={this.state.comments}
        />
      </div>
    );
  }
}

export default Comment;

