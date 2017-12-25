/**
 * 2017-12-19 Glassay & Kidder
 * 发帖
 */

import React from 'react';
import { Divider, Input, Button, Row } from 'antd';
import styles from './edit.less';


const { TextArea } = Input;
class Edit extends React.Component {
  constructor() {
    super();
    this.state = {
      article_title: '',
      article_content: '',
    };
  }

  componentDidMount() {
    this.title.focus();
  }

  handleTitleChange(event) {
    this.setState({
      article_title: event.target.value,
    });
  }

  handleContentChange(event) {
    this.setState({
      article_content: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <Input
          placeholder="题目"
          className={styles.tip}
          value={this.state.article_title}
          onChange={this.handleTitleChange.bind(this)}
          ref={(title) => { this.title = title; }}
        />
        <Divider />
        <TextArea
          placeholder="内容"
          rows={23}
          value={this.state.article_content}
          onChange={this.handleContentChange.bind(this)}
        />
        <Divider />
        <Row type="flex" justify="end">
          <Button icon="rocket" type="primary" className={styles.up}>发布</Button>
        </Row>
      </div>
    );
  }
}

export default Edit;
