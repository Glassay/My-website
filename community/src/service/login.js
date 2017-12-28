import axios from 'axios';
// import request from '../utils/request';

export async function loginfunc(payload) {
  console.log('service');
  const resp = await axios.post('http://127.0.0.1:7001/getuserid', {
    user: payload.username,
    password: payload.passward,
  });
  return resp.data;
  // return request('http://127.0.0.1:7001/getuserid', {
  //   method: 'post',
  //   mode: 'cors',
  //   // credentials: 'include',
  //   body: {
  //     user: payload.username,
  //     password: payload.passward,
  //   },
  // });
  // if (resp.data) {
  //   this.props.history.push('/main');
  // }
}
