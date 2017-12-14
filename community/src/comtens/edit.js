import React from 'react';
import { Divider, Input, Button, Row, Col } from 'antd';
import styles from './edit.less';

const { TextArea } = Input;
class Edit extends React.Component {
  render() {
    return (
      <div>
        <Input placeholder="题目" className={styles.tip} />
        <Divider />
        <Row>
          <Col span={23}>
            <TextArea placeholder="内容" rows={22} />
          </Col>
          <Col span={1}>
            <div>123</div>
          </Col>
        </Row>
        <Divider />
        <Row type="flex" justify="end">
          <Button icon="rocket" type="primary" className={styles.up}>发布</Button>
        </Row>
      </div>
    );
  }
}

export default Edit;
