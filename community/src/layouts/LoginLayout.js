/**
 * 2017-12-11 Glassay & Kidder
 * 论坛登录界面
 * CSS By Grommet
 */

import React from 'react';
import { Button, Form, Grid, Header, Segment, Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styles from './LoginLayout.less';

class Login extends React.Component {
  render() {
    return (
      <div className="login-form">
        <link rel="stylesheet" href="assets/css/animate.css" />
        {/* <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%
          }
        `}</style> */}
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
                  placeholder="E-mail address"
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                />
                <div className={styles.button}>
                  <Button animated="fade" color="teal" fluid size="large">
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
                              placeholder="E-mail address"
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
                            />
                          </div>
                          <div className={styles.register}>
                            <Button animated="fade" color="teal" fluid size="large">
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

