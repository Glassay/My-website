/**
 * 2017-12-26
 */

import React from 'react';
import { Pagination, Row } from 'antd';
import { connect } from 'dva';
import Card from './Card';
import styles from './Main.less';

class Main extends React.Component {
  state = {
    current: 1,
  }
  componentWillMount() {
    this.props.dispatch({
      type: 'main/getallArticle',
      payload: 1,
    });
  }

  onChange = (page) => {
    this.props.dispatch({
      type: 'main/changecurrent',
      payload: page,
    });
  }
  render() {
    return (
      <div>
        {
        this.props.Article.map((article, index) => {
          return (<Card key={index} article={article} />);
        })
      }
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

export default connect(state => ({
  Article: state.main.Article,
}))(Main);
