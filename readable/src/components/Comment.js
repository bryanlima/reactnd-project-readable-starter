import React from 'react';
import { connect } from 'react-redux'
import {
  handleUpVote,
  handleDownVote,
  handleDelete
} from '../actions/comments'
import { Link } from 'react-router-dom'

class Comment extends React.Component {

  upVote = (e) => {
    e.preventDefault();

    this.props.upVote();
  }

  downVote = (e) => {
    e.preventDefault();

    this.props.downVote()
  }

  delete = (e) => {
    e.preventDefault();

    this.props.delete();
  }

  render() {

    const comment = this.props.comment || {};
    const { voteScore, author, body } = comment;

    return (
      <div className='comment'>
        <div className='vote'>
          <div><a href='#' onClick={this.upVote}>Up</a></div>
          <div>{voteScore}</div>
          <div><a href='#' onClick={this.downVote}>Down</a></div>
        </div>
        <div className='content'>
          <div className='author'>Posted by {author}</div>
          <div className='message'>{body}</div>
          <div className='options'>
            <ul>
              <li><Link to={`/comment/${comment.id}/update`}>Edit</Link></li>
              <li><a href='#' onClick={this.delete}>Delete</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch, { id }) {

  return {
    upVote: () => dispatch(handleUpVote(id)),
    downVote: () => dispatch(handleDownVote(id)),
    delete: () => dispatch(handleDelete(id))
  }
}

export default connect(null, mapDispatchToProps)(Comment);