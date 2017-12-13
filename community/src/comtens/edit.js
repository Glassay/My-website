import React from 'react';
import { Divider, Input } from 'antd';
import styles from './edit.less';

const { TextArea } = Input;
class Edit extends React.Component {
  render() {
    return (
      <div>
        <Input placeholder="题目" className={styles.tip} />
        <Divider className={styles.divider} />
        <TextArea placeholder="内容" rows={28} />
      </div>
    );
  }
}

export default Edit;
