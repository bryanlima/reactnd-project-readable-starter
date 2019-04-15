import React from 'react'
import Post from './Post'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class PostList extends React.Component {
  render() {
    return (
      <div style={{ marginLeft: '25%', width: 500 }}>
        {this.props.postsIds.map(id => (
          <Link to={'/post/' + id}><Post id={id} /></Link>
        ))}
      </div>
    )
  }
}

// function mapStateToProps({posts}) {
//   return {
//     postsIds: Object.keys(posts)
//   }
// }

export default PostList;