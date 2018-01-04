/**
 * 2017-12-11 Glassay & Kidder
 * 论坛登录界面
 * CSS By Semantic
 */

import React from 'react';
import { connect } from 'dva';
import { Button, Form, Grid, Header, Segment, Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import styles from './LoginLayout.less';

const Login = ({ login, dispatch }) => {
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
          <div data-aos="zoom-in">
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
                  value={login.username}
                  onChange={e => dispatch({ type: 'login/writeUsername', payload: e })}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  value={login.passward}
                  onChange={e => dispatch({ type: 'login/writePassward', payload: e })}
                />
                <div className={styles.button}>
                  <Button animated="fade" color="teal" fluid size="large" onClick={() => dispatch({ type: 'login/login' })}>
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
                              value={login.registerUsername}
                              onChange={e => dispatch({ type: 'login/writeRegisterUsername', payload: e })}
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
                              value={login.registerPassward}
                              onChange={e => dispatch({ type: 'login/writeRegisterPassward', payload: e })}
                            />
                          </div>
                          <div className={styles.register}>
                            <Button animated="fade" color="teal" fluid size="large" onClick={() => dispatch({ type: 'login/register' })}>
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
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
};


export default connect(({ login }) => ({ login }))(Login);
