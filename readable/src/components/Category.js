import React from 'react'
import { connect } from 'react-redux'
import NotFound from './NotFound';
import BaseLayout from './BaseLayout';
import { orderBy as postsOrderBy } from '../util/postsOrderBy'

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
    const { existPost, orderBy } = this.props;
    const postsIds = orderBy(this.state.order);

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
  const newPosts = {};
  postsIds.forEach(id => newPosts[id] = posts[id]);

  return {
    existPost,
    category,
    postsIds,
    orderBy: (order) => postsOrderBy(newPosts, order)
  }
}

export default connect(mapStateToProps)(Category)