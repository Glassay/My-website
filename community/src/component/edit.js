/**
 * 2017-12-19 Glassay & Kidder
 * 发帖
 */

import React from 'react';
import { connect } from 'dva';
import { Divider, Input, Button, Row } from 'antd';
import styles from './edit.less';

const { TextArea } = Input;

const Edit = ({ edit, dispatch }) => {
  return (
    <div>
      <Input
        placeholder="题目"
        className={styles.tip}
        value={edit.article_title}
        onChange={e => dispatch({ type: 'edit/writeTitle', payload: e })}
        ref={(title) => { this.title = title; }}
      />
      <Divider />
      <TextArea
        placeholder="内容"
        rows={23}
        value={edit.article_content}
        onChange={e => dispatch({ type: 'edit/writeContent', payload: e })}
      />
      <Divider />
      <Row type="flex" justify="end">
        <Button icon="rocket" type="primary" className={styles.up}>发布</Button>
      </Row>
    </div>
  );
};

export default connect(({ edit }) => ({ edit }))(Edit);
