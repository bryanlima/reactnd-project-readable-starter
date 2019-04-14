import {
  RECEIVE_DATA,
  POST_UP_VOTE,
  POST_DOWN_VOTE,
  UPDATE_POST,
  ADD_POST,
  DELETE_POST
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
      const newState = state;
      delete newState[action.id];

      return {
        ...newState
      };
    default:
      return state;
  }
}