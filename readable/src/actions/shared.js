import { receivePosts } from './posts';
import { getPosts } from '../util/api';

export function handleInitialData() {
  return (dispatch) => {
    return getPosts().then(posts => dispatch(receivePosts(posts)));
  }
}

// export function handleInitialData() {
//   return (dispatch) => {
//     dispatch(showLoading())
//     return getInitialData()
//       .then(({ users, tweets }) => {
//         dispatch(receiveUsers(users))
//         dispatch(receiveTweets(tweets))
//         dispatch(setAuthedUser(AUTHED_ID))
//         dispatch(hideLoading())
//       })
//   }
// }