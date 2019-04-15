import { receivePosts } from './posts';
import { getCategories } from './categories'
import {
  getPosts,
  getCategories as getCategoriesApi
} from '../util/api';

export function handleInitialData() {
  return (dispatch) => {
    return Promise.all([
      getPosts(),
      getCategoriesApi()
    ])
    .then(([posts, categories]) => {
      dispatch(receivePosts(posts));
      dispatch(getCategories(categories.categories));
    })
  }
}