import React from 'react'
import { connect } from 'react-redux'
import { handleUpdatePost } from '../actions/posts'
import { Redirect } from 'react-router-dom'

class UpdatePost extends React.Component {

  state = {
    title: this.props.post.title,
    body: this.props.post.body,
    toDetails: false
  }

  defaultState(state, props) {

    const { post } = props;

    return {
      ...state,
      title: post.title || '',
      body: post.body || '',
      toDetails: false
    }
  }

  handleTitleChange = (e) => {
    const title = e.target.value;

    this.setState(() => ({ title }));
  }

  handleBodyChange = (e) => {
    const body = e.target.value;

    this.setState(() => ({ body }));
  }

  onSubmit = (e) => {
    e.preventDefault();

    const id = this.props.post.id;
    const { title, body } = this.state;

    this.props.dispatch(handleUpdatePost(id, title, body));
    this.setState((s) => ({
      // ...this.defaultState(s, this.props),
      title: '',
      body: '',
      toDetails: true
    }));
  }

  render() {

    const { post } = this.props;

    if (this.state.toDetails === true) {
      return <Redirect to={`/${post.category}/${post.id}`} />
    }


    const { title, body, author, voteScore, commentCount } = post;

    return (
      <form onSubmit={this.onSubmit}>
        <div className='post'>
          <div className='vote'>
            <div>Score</div>
            <div>{voteScore}</div>
          </div>
          <div className='content'>
            <div className='author'>Posted by {author}</div>
            <input type='text' id='title' placeholder='Title' onChange={this.handleTitleChange} defaultValue={title} />
            <input type='text' id='body' placeholder='Body' onChange={this.handleBodyChange} defaultValue={body} />
            <div className='options'>
              <ul>
                <li>{commentCount} Comments</li>
                <li><a href='#' onClick={this.deletePost}>Delete</a></li>
              </ul>
            </div>
          </div>
        </div>

        <button>Save</button>
      </form>
    )
  }
}

function mapStateToProps({posts}, props) {

  const post = posts[props.match.params.id] || {};

  return { post }
}

export default connect(mapStateToProps)(UpdatePost);