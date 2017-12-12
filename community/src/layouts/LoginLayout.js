/**
 * 2017-12-11 Glassay & Kidder
 * 论坛登录界面
 * CSS By Grommet
 */

import React from 'react';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import styles from './LoginLayout.less';

const Login = () => (
  <div className="login-form">
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%
      }
    `}</style>
    <Grid
      textAlign="center"
      style={{ minHeight: '103vh' }}
      verticalAlign="middle"
      className={styles.container}
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          <link rel="stylesheet" href="animate.min.css" />
          {/* <Image src="/logo.png" /> */}
          {' '}Todpole’ Community
        </Header>
        <h3 className="animated infinite bounce">Example</h3>
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

            <Button color="teal" fluid size="large">登录</Button>
          </Segment>
        </Form>
        {/* <Message>
          Welcome！
        </Message> */}
      </Grid.Column>
    </Grid>
  </div>
);

export default Login;

