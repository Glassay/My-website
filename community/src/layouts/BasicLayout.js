/**
 * 2017-12-11 Glassay & Kidder
 * 主界面
 */

import React from 'react';
// import 'semantic-ui-css/semantic.min.css';
import { Layout, Menu } from 'antd';
import styles from './BasicLayout.less';

const { Header, Content, Footer } = Layout;


class MainLayout extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Header>
            <div className={styles.logo}><div>123</div></div>
            <Menu
              theme="dark"
              mode="horizontal"
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ width: '80%', margin: 'auto' }}>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            华北电力大学科技学院论坛
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default MainLayout;
