import React from 'react'
import { connect } from 'react-redux'
import { handleUpdatePost } from '../actions/posts'
import { Redirect } from 'react-router-dom'
import { handleDeletePost } from '../actions/posts'
import NotFound from './NotFound'

class UpdatePost extends React.Component {

  state = {
    title: this.props.post.title,
    body: this.props.post.body,
    toDetails: false,
    toHome: false
  }

  defaultState(state, props) {

    const { post } = props;

    return {
      ...state,
      title: post.title || '',
      body: post.body || '',
      toDetails: false,
      toHome: false
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

  handleDeletePost = (e) => {
    e.preventDefault();

    this.props.delete();
    this.setState(() => ({ toHome: true }));
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title, body } = this.state;

    this.props.update(title, body);
    this.setState((s) => ({
      title: '',
      body: '',
      toDetails: true,
      toHome: false
    }));
  }

  render() {

    const { post, existPost } = this.props;

    if (!existPost) {
      return <NotFound />
    }

    if (this.state.toHome === true) {
      return <Redirect to={'/'} />
    }

    if (this.state.toDetails === true) {
      return <Redirect to={`/${post.category}/${post.id}`} />
    }


    const { title, body, author, voteScore, commentCount } = post;

    return (
      <form onSubmit={this.onSubmit}>
        <div style={ { width: 500, float: 'left' } }>
          <div className='post'>
            <div className='vote'>
              <div>Score</div>
              <div>{voteScore}</div>
            </div>
            <div className='content'>
              <div className='author'>Posted by {author}</div>
              <input type='text' id='title' placeholder='Title' onChange={this.handleTitleChange} defaultValue={title} />
              <br />
              <input type='text' id='body' placeholder='Body' onChange={this.handleBodyChange} defaultValue={body} />
              <div className='options'>
                <ul>
                  <li>{commentCount} Comments</li>
                  <li><a href='#' onClick={this.handleDeletePost}>Delete</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{ float: 'left', width: '100%' }}>
            <button>Save</button>
          </div>
        </div>

      </form>
    )
  }
}

function mapStateToProps({ posts }, props) {

  const id = props.match.params.id;
  let post = posts[id];
  const existPost = post !== undefined;
  post = post || {};

  return {
    post,
    id,
    existPost
  }
}

function mapDispatchToProps(dispatch, { match }) {

  const id = match.params.id;
  return {
    delete: () => dispatch(handleDeletePost(id)),
    update: (title, body) => dispatch(handleUpdatePost(id, title, body))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePost);