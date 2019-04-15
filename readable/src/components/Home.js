import React from 'react'
import Categories from './Categories'
import PostList from './PostList'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import BaseLayout from './BaseLayout'

class Home extends React.Component {

  render() {

    const { postsIds } = this.props;
    return (<BaseLayout postsIds={postsIds} />
      // <span>
      //   <Categories />
      //   <PostList postsIds={postsIds} />
      //   <Link to='/post/new'>New Post</Link>
      // </span>
    )
  }
}

function mapStateToProps({posts}) {
  return {
    postsIds: Object.keys(posts)
  }
}

export default connect(mapStateToProps)(Home);