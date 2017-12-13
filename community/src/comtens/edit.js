import React from 'react';
import { Divider, Input, Button, Row } from 'antd';
import styles from './edit.less';

const { TextArea } = Input;
class Edit extends React.Component {
  render() {
    return (
      <div>
        <Input placeholder="题目" className={styles.tip} />
        <Divider />
        <TextArea placeholder="内容" rows={22} />
        <Divider />
        <Row type="flex" justify="end">
          <Button icon="rocket" type="primary" className={styles.up}>发布</Button>
        </Row>
      </div>
    );
  }
}

export default Edit;
