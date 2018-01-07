import axios from 'axios';

export async function getArticles(payload) {
  const resp = await axios.post('http://127.0.0.1:7001/pagex', {
    page: payload.current,
  });
  return resp.data;
}
