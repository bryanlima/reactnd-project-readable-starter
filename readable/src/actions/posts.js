import {
  upVotePost,
  downVotePost,
  updatePost,
  addPost,
  deletePost
} from '../util/api'

export const RECEIVE_DATA = 'RECEIVE_DATA'
export const POST_UP_VOTE = 'POST_UP_VOTE'
export const POST_DOWN_VOTE = 'POST_DOWN_VOTE'
export const DELETE_POST = 'DELETE_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const ADD_POST = 'ADD_POST'

export function receivePosts (posts) {
  return {
    type: RECEIVE_DATA,
    posts
  }
}

export function upVote (post) {
  return {
    type: POST_UP_VOTE,
    post
  }
}

export function downVote (post) {
  return {
    type: POST_DOWN_VOTE,
    post
  }
}

export function handleUpVote(id) {
  return (dispatch) => upVotePost(id).then(post => dispatch(upVote(post)))
}

export function handleDownVote(id) {
  return (dispatch) => downVotePost(id).then(post => dispatch(downVote(post)))
}

export function removePost (id) {
  return {
    type: DELETE_POST,
    id
  }
}

export function handleDeletePost(id) {
  return (dispatch) => deletePost(id).then(post => dispatch(removePost(post.id)))
}

export function updatePostDetails (id, title, body) {
  return {
    type: UPDATE_POST,
    id,
    title,
    body
  }
}

export function newPost (post) {
  return {
    type: ADD_POST,
    post
  }
}

export function handleUpdatePost (id, title, body) {
  return (dispatch) =>
    updatePost(id, title, body)
    .then(post => dispatch(updatePostDetails(post.id, post.title, post.body)));
}

export function handleAddPost(title, body, author, category) {
  return (dispatch) =>
    addPost(title, body, author, category)
    .then(post => dispatch(newPost(post)));
}