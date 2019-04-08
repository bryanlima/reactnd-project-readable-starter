import {
  RECEIVE_DATA,
  UP_VOTE,
  DOWN_VOTE,
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
    case UP_VOTE:
      return {
        ...state,
        [action.post.id]: action.post
      }
    case DOWN_VOTE:
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