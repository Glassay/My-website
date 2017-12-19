/**
 * 2017-12-19 Glassay & Kidder
 * 发帖
 */
import React from 'react';
import { Divider, Input, Button, Row, Col, Icon } from 'antd';
// import ReactMarkdown from 'react-markdown';
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
            <TextArea placeholder="内容" rows={23} />
          </Col>
          <Col span={1} className={styles.markicon}>
            <div className={styles.icon}>H1</div>
            <div className={styles.icon}>H2</div>
            <div className={styles.icon}>H3</div>
            <div className={styles.icon}>H4</div>
            <div className={styles.icon}>H5</div>
            <div className={styles.icon}>H6</div>
            <div className={styles.icon}>B</div>
            <div className={styles.italic}>I</div>
            <div className={styles.icon}><Icon type="picture" /></div>
            <div className={styles.icon}><Icon type="link" /></div>
            <div className={styles.icon}><Icon type="eye-o" /></div>
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
