import axios from 'axios';
// import main from '../models/main';
// import request from '../utils/request';

export async function loginfunc(payload) {
  const resp = await axios.post('http://127.0.0.1:7001/getuserid', {
    user: payload.username,
    password: payload.passward,
  });
  // const header = await axios.post('http://127.0.0.1:7001/getuserheader', {
  //   user: payload.username,
  // });

  return resp.data;
  // console.log('123');
  // return request('http://127.0.0.1:7001/getuserid', {
  //   method: 'post',
  //   // mode: 'cors',
  //   // credentials: 'include',
  //   body: {
  //     user: payload.username,
  //     password: payload.passward,
  //   },
  // });
}

export async function getuserheader(payload) {
  const resp = await axios.post('http://127.0.0.1:7001/getuserheader', {
    user: payload.username,
  });
  return resp.data[0].header;
}

export async function registerfunc(payload) {
  const resp = await axios.post('http://127.0.0.1:7001/register', {
    user: payload.registerUsername,
    password: payload.registerPassward,
  });
  return resp.data;
}
