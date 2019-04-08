import React from 'react'
import Post from './Post'
import { connect } from 'react-redux'

class Dashboard extends React.Component {
  render() {
    return (
      <div style={{ marginLeft: '25%', width: 500 }}>
        {this.props.postsIds.map(id => (
          <Post id={id} />
        ))}
      </div>
    )
  }
}

function mapStateToProps({posts}) {
  return {
    postsIds: Object.keys(posts)
  }
}

export default connect(mapStateToProps)(Dashboard);