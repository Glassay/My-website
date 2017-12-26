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
          <img className={styles.head} src="http://2xtx.com/img/2017/07/f394270153.jpg" alt="" />
        </div>
        <div className={styles.head_square}>
          <div className={styles.head_name}>{this.props.comment.username}：</div>
          <p className={styles.subject_comment}>{this.props.comment.content}</p>
        </div>
      </div>
    );
  }
}

export default SingleComment;
