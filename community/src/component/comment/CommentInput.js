/**
 * 2017-12-23 Glassay & Kidder
 * 评论输入区
 */

import React, { PropTypes } from 'react';
import styles from './comment.less';

class CommentInput extends React.Component {
  static propsTypes = {
    onSubmit: PropTypes.func,
  }
  constructor() {
    super();
    this.state = {
      username: '',
      content: '',
    };
  }

  componentDidMount() {
    this.textarea.focus();
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value,
    });
  }

  handleContentChange(event) {
    this.setState({
      content: event.target.value,
    });
  }

  handleSubmit() {
    if (this.props.onSubmit) {
      this.props.onSubmit({
        username: this.state.username,
        content: this.state.content,
      });
    }
    this.setState({ content: '' });
  }

  render() {
    return (
      <div className={styles.comment_input}>
        <div className={styles.comment_field}>
          <span className={styles.comment_field_name}>用户名：</span>
          <div className={styles.comment_field_input}>
            <input
              value={this.state.username}
              onChange={this.handleUsernameChange.bind(this)}
            />
          </div>
        </div>
        <div className={styles.comment_field}>
          <span className={styles.comment_field_name}>评论内容：</span>
          <div className={styles.comment_field_input}>
            <textarea
              ref={(textarea) => { this.textarea = textarea; }}
              value={this.state.content}
              onChange={this.handleContentChange.bind(this)}
            />
          </div>
        </div>
        <div className={styles.comment_field_button}>
          <button
            onClick={this.handleSubmit.bind(this)}
          >
            发布
          </button>
        </div>
      </div>
    );
  }
}

export default CommentInput;
