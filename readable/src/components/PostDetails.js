import React from 'react'
import Post from './Post'
import Comment from './Comment'
import { connect } from 'react-redux'
import { handleGetComments } from '../actions/comments'
import NewComment from './NewComment'
import NotFound from './NotFound'

class PostDetails extends React.Component {

  componentDidMount() {
    this.props.getComments();
  }

  render() {

    const { existPost, postId, commentaryIds, comments } = this.props;

    if (!existPost) {
      return <NotFound />
    }

    return (
      <div>
        <Post id={postId} />
        <NewComment postId={postId} />
        {commentaryIds.length > 0 && (commentaryIds.map(id => <span key={id}><Comment id={id} comment={comments[id]} /></span>))}
      </div>
    );
  }
}

function mapStateToProps({ comments, posts }, props) {

  const postId = props.match.params.id;
  const existPost = posts[postId] !== undefined;

  return {
    existPost,
    postId,
    commentaryIds: Object.keys(comments),
    comments
  };
}

function mapDispatchToProps(dispatch, { match }) {
  const postId = match.params.id;
  return {
    getComments: () => dispatch(handleGetComments(postId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);