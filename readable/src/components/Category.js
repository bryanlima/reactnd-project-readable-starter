import React from 'react'
import { connect } from 'react-redux'
import NotFound from './NotFound';
import BaseLayout from './BaseLayout';

class Category extends React.Component {

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
    const { postsIds, existPost } = this.props;

    if (!existPost) {
      return <NotFound />
    }

    return <BaseLayout orderBy={this.handleOrderBy} postsIds={postsIds} order={order} />
  }
}

function mapStateToProps({ posts }, props) {

  const category = props.match.params.category;
  const postsIds = Object.keys(posts).filter(id => posts[id].category === category);
  const existPost = postsIds.length > 0;

  return {
    existPost,
    category,
    postsIds,
    orderBy: (posts, by) => {

      const postsKeys = postsIds;

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

export default connect(mapStateToProps)(Category)