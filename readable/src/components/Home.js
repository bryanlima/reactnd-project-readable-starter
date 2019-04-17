import React from 'react'
import Categories from './Categories'
import PostList from './PostList'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import BaseLayout from './BaseLayout'

class Home extends React.Component {

  state = {
    order: 'DateDesc'
  }

  handleOrderBy = (value) => {

    this.setState(() => ({
      order: value
    }))
  }

  render() {

    const { order } = this.state;
    const { orderBy, posts } = this.props;
    const postsIds = orderBy(posts, this.state.order);

    return (<BaseLayout orderBy={this.handleOrderBy} postsIds={postsIds} order={order} />
    )
  }
}

function mapStateToProps({posts}) {
  return {
    postsIds: Object.keys(posts),
    posts,
    orderBy: (posts, by) => {

      const postsKeys = Object.keys(posts);

      switch (by) {
        case 'DateAsc':
        {
          const p = postsKeys.sort((a, b) => new Date(posts[a].timestamp) - new Date(posts[b].timestamp));
          return p;
        }
        case 'DateDesc':
        {
          const p = postsKeys.sort((a, b) => new Date(posts[b].timestamp) - new Date(posts[a].timestamp));
          return p;
        }
        case 'VoteScoreAsc':
        {
          const p = postsKeys.sort((a, b) => posts[a].voteScore - posts[b].voteScore);
          return p;
        }

        case 'VoteScoreDesc':
          const p = postsKeys.sort((a, b) => posts[b].voteScore - posts[a].voteScore);
          return p;
        default:
          return posts;
      }
    }
  }
}

export default connect(mapStateToProps)(Home);