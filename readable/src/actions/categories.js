import {
  getCategories as categoriesApi
} from '../util/api'

export const GET_CATEGORIES = 'GET_CATEGORIES'

export function getCategories(categories) {
  return {
    type: GET_CATEGORIES,
    categories
  }
}

export function handleGetCategories() {
  return (dispatch) => categoriesApi().then(categories => dispatch(getCategories(categories)))
}