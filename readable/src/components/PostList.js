import React from 'react'
import Post from './Post'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class PostList extends React.Component {
  render() {
    const { posts } = this.props;

    return (
      <div style={{ marginLeft: '25%', width: 500 }}>
        {posts.length > 0 && (posts.map(obj => (
          <Link to={obj.category + '/' + obj.id}><Post id={obj.id} /></Link>
        )))}
      </div>
    )
  }
}

function mapStateToProps({ posts }, { postsIds }) {

  const newPosts = postsIds.map(id => { return { id, category: posts[id].category } });

  return {
    posts: newPosts
  }
}

export default connect(mapStateToProps)(PostList);