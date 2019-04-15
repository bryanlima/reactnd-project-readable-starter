import React from 'react'
import { connect } from 'react-redux'
import NotFound from './NotFound';
import BaseLayout from './BaseLayout';

class Category extends React.Component {

  render() {

    const { postsIds, existPost } = this.props;

    if (!existPost) {
      return <NotFound />
    }

    return <BaseLayout postsIds={postsIds} />
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
  }
}

export default connect(mapStateToProps)(Category)