import axios from 'axios';

export async function getArticles(payload) {
  const resp = await axios.post('http://127.0.0.1:7001/pagex', {
    page: payload.current,
  });
  return resp.data;
}

export async function star(payload) {
  const resp = await axios.post('http://127.0.0.1:7001/star', {
    id: payload,
  });
  await axios.post('http://127.0.0.1:7001/staradd', {
    stars: resp.data[0].stars,
    id: payload,
  });
  return true;
}

