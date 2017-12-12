import React from 'react';
import { Avatar, Divider, Icon, Row } from 'antd';
import styles from './Card.less';


class Card extends React.Component {
  render() {
    return (
      <div className={styles.card}>
        <div className={styles.title} >
          <Row type="flex" justify="space-between" align="bottom">
            <div className={styles.h}>标题</div>
            <Row type="flex" justify="space-between" align="middle">
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" className={styles.h} />
              <div className={styles.h}>user</div>
              <div className={styles.h}>Date</div>
            </Row>
          </Row>
        </div>
        <Divider className={styles.divider} />
        <div className={styles.text}>123</div>
        <div>
          <div className={styles.cardicon}>
            <Row type="flex" justify="space-between" align="middle" style={{ width: '14%' }} >
              <Icon type="like" />1032
              <Icon type="mail" />2332
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
