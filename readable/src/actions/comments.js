import {
  getCommentsByPost,
  upVoteComment,
  downVoteComment,
  addComment,
  deleteComment,
  updateComment,
  getCommentById
} from '../util/api'

import {
  decrementCommentCount,
  incrementCommentCount
} from './posts'

export const GET_COMMENT = 'GET_COMMENT'
export const GET_COMMENTS = 'GET_COMMENTS'
export const COMMENT_UP_VOTE = 'COMMENT_UP_VOTE'
export const COMMENT_DOWN_VOTE = 'COMMENT_DOWN_VOTE'
export const NEW_COMMENT = 'NEW_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'

export function getComments(comments) {
  return {
    type: GET_COMMENTS,
    comments
  }
}

export function handleGetComments(postId) {
  return (dispatch) => getCommentsByPost(postId).then(comments => dispatch(getComments(comments)));
}

export function upVote(id, voteScore) {
  return {
    type: COMMENT_UP_VOTE,
    id,
    voteScore
  }
}

export function handleUpVote(id) {
  return (dispatch) => upVoteComment(id).then(comment => dispatch(upVote(comment.id, comment.voteScore)));
}

export function downVote(id, voteScore) {
  return {
    type: COMMENT_DOWN_VOTE,
    id,
    voteScore
  }
}

export function handleDownVote(id) {
  return (dispatch) => downVoteComment(id).then(comment => dispatch(downVote(comment.id, comment.voteScore)));
}


export function newComment(comment) {
  return {
    type: NEW_COMMENT,
    comment
  }
}

export function handleAddComment(postId, author, body) {
  return (dispatch) =>
    addComment(postId, body, author)
    .then(comment => {
      dispatch(newComment(comment))
      dispatch(incrementCommentCount(comment.parentId))
    })
}

export function editComment(id, body, timestamp) {
  return {
    type: UPDATE_COMMENT,
    id,
    body,
    timestamp
  }
}

export function handleUpdateComment(id, body) {
  return (dispatch) =>
    updateComment(id, body)
    .then(comment => dispatch(editComment(comment.id, comment.body, comment.timestamp)))
}

export function delComment(id) {
  return {
    type: DELETE_COMMENT,
    id
  }
}

export function handleDelete(id) {
  return (dispatch) => deleteComment(id).then(comment => {
    dispatch(delComment(comment.id))
    dispatch(decrementCommentCount(comment.parentId))
  })
}

export function getComment(comment) {
  return {
    type: GET_COMMENT,
    comment
  }
}

export function handleGetComment(id) {
  return (dispatch) => getCommentById(id).then(comment => dispatch(getComment(comment)))
}