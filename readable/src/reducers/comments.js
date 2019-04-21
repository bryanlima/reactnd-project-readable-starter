import {
  GET_COMMENTS,
  COMMENT_UP_VOTE,
  COMMENT_DOWN_VOTE,
  NEW_COMMENT,
  DELETE_COMMENT,
  UPDATE_COMMENT,
  GET_COMMENT
} from '../actions/comments'

export function comments(state = {}, action) {
  switch (action.type) {
    case GET_COMMENTS:
      const c = {};
      action.comments.forEach(comment => c[comment.id] = comment);

      return {
        ...state,
        ...c
      };

    case COMMENT_UP_VOTE:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          voteScore: action.voteScore
        }
      }
    case COMMENT_DOWN_VOTE:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          voteScore: action.voteScore
        }
      }
    case NEW_COMMENT:

      return {
        ...state,
        [action.comment.id]: action.comment
      }
    case DELETE_COMMENT:

      const newState = { ...state };
      delete newState[action.id];

      return {
        ...newState
      }
    case UPDATE_COMMENT:

      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          body: action.body,
          timestamp: action.timestamp
        }
      }
    case GET_COMMENT:
      return {
        [action.comment.id]: action.comment
      }
    default:
      return state;
  }
}