/**
 * 2017-12-11 Glassay & Kidder
 * 论坛登录界面
 * CSS By Semantic
 */

import React from 'react';
import axios from 'axios';
import { Button, Form, Grid, Header, Segment, Modal } from 'semantic-ui-react';
import { message } from 'antd';
import 'semantic-ui-css/semantic.min.css';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styles from './LoginLayout.less';

// const { browserHistory } = Router;
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      passward: '',
      registerUsername: '',
      registerPassward: '',
    };
    // this.onLogin = this.onLogin.bind(this);
  }

  onLogin = async () => {
    // axios.post('http://127.0.0.1:7001/getuserid', {
    //   user: this.state.username,
    //   password: this.state.passward,
    // })
    // .then((response) => {
    //   if (response.data) {
    //     this.props.history.push('/main');
    //   }
    // });
    const resp = await axios.post('http://127.0.0.1:7001/getuserid', {
      user: this.state.username,
      password: this.state.passward,
    });
    if (resp.data) {
      this.props.history.push('/main');
    }
  }
  onRegister = () => {
    axios.post('http://127.0.0.1:7001/register', {
      user: this.state.registerUsername,
      password: this.state.registerPassward,
    })
    .then((response) => {
      if (response.data) {
        message.success('注册成功！');
        this.setState({
          registerUsername: '',
          registerPassward: '',
        });
      } else {
        message.error('注册失败,请更改用户名重新注册');
      }
    });
  }
  handleUsernameChange(event) {
    this.setState({
      username: event.target.value,
    });
  }

  handlePasswardChange(event) {
    this.setState({
      passward: event.target.value,
    });
  }

  handleRegisterName(e) {
    this.setState({
      registerUsername: e.target.value,
    });
  }

  handleRegisterPassward(e) {
    this.setState({
      registerPassward: e.target.value,
    });
  }

  render() {
    return (
      <div className="login-form">
        <link rel="stylesheet" href="assets/css/animate.css" />
        <Grid
          textAlign="center"
          style={{ minHeight: '103vh' }}
          verticalAlign="middle"
          className={styles.container}
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h1" color="teal" textAlign="center">
              Todpole’Community
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="username"
                  value={this.state.username}
                  onChange={this.handleUsernameChange.bind(this)}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  value={this.state.passward}
                  onChange={this.handlePasswardChange.bind(this)}
                />
                <div className={styles.button}>
                  <Button animated="fade" color="teal" fluid size="large" onClick={this.onLogin}>
                    <Button.Content hidden>Login</Button.Content>
                    <Button.Content visible>登录</Button.Content>
                  </Button>
                </div>
                <Modal
                  trigger={
                    <Button animated="fade" color="teal" fluid size="large">
                      <Button.Content hidden>Register</Button.Content>
                      <Button.Content visible>注册</Button.Content>
                    </Button>
                  }
                >
                  <Header as="h1" color="teal" textAlign="center">
                    注册/Register
                  </Header>
                  <Modal.Content>
                    <Modal.Description>
                      <Form>
                        <Form.Field>
                          <Header as="h5" color="teal">Username</Header>
                          <div>
                            <Form.Input
                              color="teal"
                              fluid
                              icon="user"
                              iconPosition="left"
                              placeholder="username"
                              value={this.state.registerUsername}
                              onChange={this.handleRegisterName.bind(this)}
                            />
                          </div>
                          <Header as="h5" color="teal">Password</Header>
                          <div>
                            <Form.Input
                              color="teal"
                              fluid
                              icon="lock"
                              iconPosition="left"
                              placeholder="Password"
                              type="password"
                              value={this.state.registerPassward}
                              onChange={this.handleRegisterPassward.bind(this)}
                            />
                          </div>
                          <div className={styles.register}>
                            <Button animated="fade" color="teal" fluid size="large" onClick={this.onRegister}>
                              <Button.Content hidden>Register</Button.Content>
                              <Button.Content visible>注册</Button.Content>
                            </Button>
                          </div>
                        </Form.Field>
                      </Form>
                    </Modal.Description>
                  </Modal.Content>
                </Modal>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Login;
