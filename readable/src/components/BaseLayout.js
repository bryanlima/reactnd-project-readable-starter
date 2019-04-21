import React from 'react'
import PostList from './PostList'
import { Link } from 'react-router-dom'
import PostListOrderBy from './PostListOrderBy';

export default class BaseLayout extends React.Component {

  handleOrderBy = (orderBy) => {
    this.props.orderBy(orderBy);
  }

  render() {

    return (
    <span>
      <PostList postsIds={this.props.postsIds} />
      <Link to='/post/new'>New Post</Link>
      <PostListOrderBy orderBy={this.handleOrderBy} order={this.props.order} />
    </span>
    )
  }
}