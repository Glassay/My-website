/**
 * 2017-12-23 Glassay & Kidder
 * 评论列表
 */

import React from 'react';
import SingleComment from '../comment/SingleComment';

class CommentList extends React.Component {
  static defaultProps = {
    comments: [],
  }
  render() {
    return (
      <div>
        {this.props.comments.map((comment, i) => <SingleComment comment={comment} key={i} />)}
      </div>
    );
  }
}

export default CommentList;
