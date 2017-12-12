import React from 'react';
import { Avatar, Divider, Icon, Row } from 'antd';
import styles from './Card.less';


class Card extends React.Component {
  render() {
    return (
      <div className={styles.card}>
        <div className={styles.title} >
          <Row type="flex" justify="space-between" align="bottom">
            <div className={styles.topic}>突然想起你，我笑了笑自己</div>
            <Row type="flex" justify="space-between" align="middle">
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" className={styles.h} />
              <div className={styles.h}>Kidder</div>
              <div className={styles.h}>2017-10-09</div>
            </Row>
          </Row>
        </div>
        <Divider className={styles.divider} />
        <div className={styles.text}>夜色微凉，皎洁的月光缓缓地倾泻下来，与昏黄的路灯融为一体。

时隔多年，我再次从这里经过。街角的路边摊早已换了人家，空气中弥漫着的，还是记忆中炸串的味道。

穿过这条小巷，高楼林立的大厦在暗夜里深沉地伫立着，好似这座城市的守卫兵，一切都是最初的模样。

此刻，我走在路的转角，突然想起她。按照记忆里再熟悉不过的路线，摸索到那条走了无数次的路。
</div>
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
