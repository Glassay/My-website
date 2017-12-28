import axios from 'axios';


export async function loginunc(payload) {
  console.log('service');
  const resp = await axios.post('http://127.0.0.1:7001/getuserid', {
    user: payload.username,
    password: payload.passward,
  });
  console.log(resp);
  // if (resp.data) {
  //   this.props.history.push('/main');
  // }
}
