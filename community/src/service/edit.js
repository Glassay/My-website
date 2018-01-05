import axios from 'axios';

export async function editupup(payload) {
  console.log('editup');
  const resp = await axios.post('http://127.0.0.1:7001/editup', {
    article_title: payload.article_title,
    article_content: payload.article_content,
    user: payload.user,
  });
  return resp.data;
}
