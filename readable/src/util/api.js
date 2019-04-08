const api = 'http://localhost:3001'

let token = localStorage.token
if (!token)
  token = '8524671390'
  // token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

const contentTypeJSON = {
  'Content-Type': 'application/json'
}

export const getPosts = () =>
  fetch(`${api}/posts`, { headers })
  .then(res => res.json())
  .then(data => data);

export const upVotePost = (id) =>
  handleVotePost(id, 'upVote')
  .then(res => res.json())
  .then(data => data);

export const downVotePost = (id) =>
  handleVotePost(id, 'downVote')
  .then(res => res.json())
  .then(data => data);

function handleVotePost(id, vote) {
  return fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      ...contentTypeJSON
    },
    body: JSON.stringify({ "option": vote })
  })
}

export const updatePost = (id, title, body) =>
  fetch(`${api}/posts/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      ...contentTypeJSON
    },
    body: JSON.stringify({ title, body })
  })
  .then(res => res.json())
  .then(data => data);

export const addPost = (title, body, author, category) =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      ...contentTypeJSON
    },
    body: JSON.stringify({
      id: generateUID(),
      timestamp: Date.now(),
      title,
      body,
      author,
      category
    })
  })
  .then(res => res.json())
  .then(data => data);

export const deletePost = (id) =>
  fetch(`${api}/posts/${id}`, {
    method: 'DELETE',
    headers: {
      ...headers,
    }
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    return data;
  });

function generateUID() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}