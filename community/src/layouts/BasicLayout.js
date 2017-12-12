/**
 * 2017-12-11 Glassay & Kidder
 * 主界面
 */

import React from 'react';
// import 'semantic-ui-css/semantic.min.css';
import { Layout, Avatar, Row } from 'antd';
import styles from './BasicLayout.less';
import Card from '../comtens/Card';

const { Header, Content, Footer } = Layout;


class MainLayout extends React.Component {
  render() {
    return (
      <div>
        <Layout className={styles.color}>
          <Header className={styles.header}>
            <Row type="flex" justify="space-between" align="middle">
              <div className={styles.title}>Todpole‘Community</div>
              <Row type="flex" justify="space-between" align="middle" style={{ width: '10%', marginRight: '10%' }} >
                <div className={styles.fatie}>发帖</div>
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size="large" className={styles.icon} />
              </Row>
            </Row>
          </Header>
          <Content style={{ width: '60%', margin: 'auto' }} >
            <div style={{ padding: 24, minHeight: 280 }} className={styles.color}>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }} className={styles.color}>
            华北电力大学科技学院论坛
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default MainLayout;
