/**
 * 2017-12-23 Glasay & Kidder
 * 单个评论
 */

import React from 'react';
import styles from './comment.less';

class SingleComment extends React.Component {
  render() {
    return (
      <div className={styles.comment}>
        <div className={styles.comment_user}>
          <span>{this.props.comment.username}：</span>
        </div>
        <p>{this.props.comment.content}</p>
      </div>
    );
  }
}

export default SingleComment;
