import React from 'react'
import Categories from './Categories'
import PostList from './PostList'
import { Link } from 'react-router-dom'

export default class BaseLayout extends React.Component {

  render() {

    return (
    <span>
      <Categories />
      <PostList postsIds={this.props.postsIds} />
      <Link to='/post/new'>New Post</Link>
    </span>
    )
  }
}