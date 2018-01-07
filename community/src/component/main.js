/**
 * 2017-12-26
 */

import React from 'react';
import { Pagination, Row } from 'antd';
import { connect } from 'dva';
import Card from './Card';
import styles from './Main.less';

class Main extends React.Component {
  componentWillMount() {
    this.props.dispatch({
      type: 'main/getallArticle',
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
            current={this.props.current}
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
  current: state.main.current,
}))(Main);
