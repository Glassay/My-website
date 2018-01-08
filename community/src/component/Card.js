/**
 * 2017-12-19 Glassay & Kidder
 * 卡片
 */
import React from 'react';
import { Avatar, Divider, Icon, Row, Button } from 'antd';
import { Modal } from 'semantic-ui-react';
import moment from 'moment';
import { connect } from 'dva';
import styles from './Card.less';
import Comment from './comment/Comment';

class Card extends React.Component {
  addstar = (id) => {
    this.props.dispatch({
      type: 'main/star',
      payload: id,
    });
  }
  render() {
    const { article } = this.props;
    return (
      <div data-aos="zoom-in">
        <div className={styles.card}>
          <div className={styles.title}>
            <Row type="flex" justify="space-between" align="bottom">
              <div className={styles.topic}>{article.topic}</div>
              <Row type="flex" justify="space-between" align="middle">
                <Avatar src={article.header} className={styles.h} />
                <div className={styles.h}>{article.user}</div>
                <div className={styles.h}>{moment(article.create_at).format('MMMM Do YYYY, h:mm:ss a')}</div>
              </Row>
            </Row>
          </div>
          <Divider className={styles.divider} />
          <Modal
            trigger={
              <div className={styles.over_article}>{article.articles}</div>
            }
          >
            <Modal.Header>{article.topic}</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <div className={styles.main_article}>{article.articles}</div>
              </Modal.Description>
              <div className={styles.cardicon}>
                <Row type="flex" align="middle" justify="end" style={{ width: '100px', height: '50px', marginTop: 10 }}>
                  <Button icon="star-o" className={styles.up} onClick={() => this.addstar(article.id)}>{article.stars}</Button>
                </Row>
              </div>
            </Modal.Content>
            <hr />
            <Comment />
          </Modal>
          <div>
            <div className={styles.cardicon}>
              <Row type="flex" align="middle" style={{ width: '8%', marginTop: 10, marginRight: 5 }} >
                <Icon type="like" />{article.stars}
              </Row>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Card);
