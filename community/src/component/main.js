/**
 * 2017-12-26
 */

import React from 'react';
import { Pagination, Row } from 'antd';
import Card from './Card';
import styles from './main.less';


class Main extends React.Component {
  state = {
    current: 1,
  }
  onChange = (page) => {
    this.setState({
      current: page,
    });
  }
  render() {
    return (
      <div>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Row type="flex" justify="end" className={styles.Pagination}>
          <Pagination
            current={this.state.current}
            onChange={this.onChange}
            total={50}
          />
        </Row>
      </div>
    );
  }
}
export default Main;
