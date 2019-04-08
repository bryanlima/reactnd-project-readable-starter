import React from 'react';
import { connect } from 'react-redux'
import {
  handleUpVote,
  handleDownVote,
  handleDeletePost
} from '../actions/posts'
import { Link } from 'react-router-dom'

class Post extends React.Component {

  upVote = (e) => {
    e.preventDefault();

    this.props.dispatch(handleUpVote(this.props.post.id));
  }

  downVote = (e) => {
    e.preventDefault();

    this.props.dispatch(handleDownVote(this.props.post.id));
  }

  deletePost = (e) => {
    e.preventDefault();

    this.props.dispatch(handleDeletePost(this.props.post.id));
  }

  render() {
    const { post } = this.props;

    const { title, body, author, voteScore, commentCount } = post;
    return (
      <div>
        <div className='post'>
          <div className='vote'>
            <div><a href='#' onClick={this.upVote}>Up</a></div>
            <div>{voteScore}</div>
            <div><a href='#' onClick={this.downVote}>Down</a></div>
          </div>
          <div className='content'>
            <div className='author'>Posted by {author}</div>
            <h2 className='title'>{title}</h2>
            <div className='message'>{body}</div>
            <div className='options'>
              <ul>
                <li>{commentCount} Comments</li>
                <li><Link to={'/post/' + post.id}>Edit</Link></li>
                <li><a href='#' onClick={this.deletePost}>Delete</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* <div style={{float: 'none', width: 450}}>
          <Comment />
          <Comment />
        </div> */}
        {/* <Comment /> */}
      </div>
    )
  }
}

function mapStateToProps({posts}, {id}) {
  const post = posts[id];

  return { post };
}

export default connect(mapStateToProps)(Post);