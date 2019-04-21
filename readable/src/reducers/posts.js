import {
  RECEIVE_DATA,
  POST_UP_VOTE,
  POST_DOWN_VOTE,
  UPDATE_POST,
  ADD_POST,
  DELETE_POST,
  DECREMENT_POST_COMMENT,
  INCREMENT_POST_COMMENT
} from '../actions/posts'

export function posts (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DATA:
      const p = {};
      action.posts.forEach(post => p[post.id] = post);

      return {
        ...state,
        ...p
      }
    case POST_UP_VOTE:
      return {
        ...state,
        [action.post.id]: action.post
      }
    case POST_DOWN_VOTE:
      return {
        ...state,
        [action.post.id]: action.post
      }
    case UPDATE_POST:
    {
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          title: action.title,
          body: action.body
        }
      }
    }
    case ADD_POST:
      return {
        ...state,
        [action.post.id]: action.post
      };
    case DELETE_POST:
      const newState =  { ...state };
      delete newState[action.id];

      return {
        ...newState
      };
    case DECREMENT_POST_COMMENT:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          commentCount: state[action.id].commentCount - 1
        }
      };
    case INCREMENT_POST_COMMENT:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          commentCount: state[action.id].commentCount + 1
        }
      };
    default:
      return state;
  }
}