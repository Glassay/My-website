/**
 * 2017-12-19 Glassay & Kidder
 * 卡片
 */
import React from 'react';
import { Avatar, Divider, Icon, Row } from 'antd';
import { Modal } from 'semantic-ui-react';
import styles from './Card.less';
import Comment from './comment/Comment';

class Card extends React.Component {
  render() {
    return (
      <div data-aos="zoom-in">
        <div className={styles.card}>
          <div className={styles.title}>
            <Row type="flex" justify="space-between" align="bottom">
              <div className={styles.topic}>{this.props.article.topic}</div>
              <Row type="flex" justify="space-between" align="middle">
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" className={styles.h} />
                <div className={styles.h}>{this.props.article.user}</div>
                <div className={styles.h}>{this.props.article.create_at}</div>
              </Row>
            </Row>
          </div>
          <Divider className={styles.divider} />
          <Modal
            trigger={
              <div className={styles.over_article}>{this.props.article.articles}</div>
            }
          >
            <Modal.Header>{this.props.article.topic}</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <div className={styles.main_article}>{this.props.article.articles}</div>
              </Modal.Description>
              <div className={styles.cardicon}>
                <Row type="flex" align="middle" style={{ width: '50px', height: '50px', marginTop: 10 }} >
                  <Icon type="like" />{this.props.article.stars}
                </Row>
              </div>
            </Modal.Content>
            <hr />
            <Comment />
          </Modal>
          <div>
            <div className={styles.cardicon}>
              <Row type="flex" align="middle" style={{ width: '14%', marginTop: 10 }} >
                <Icon type="like" />{this.props.article.stars}
              </Row>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
