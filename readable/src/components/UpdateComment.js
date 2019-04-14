import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {
  handleUpdateComment,
  handleDelete,
  handleGetComment
} from '../actions/comments'
import NotFound from './NotFound'

class UpdateComment extends React.Component {

  state = {
    body: this.props.comment.body,
    toPost: false
  }

  componentDidMount() {
    this.props.get();
  }

  handleBodyChange = (e) => {
    const body = e.target.value;

    this.setState(() => ({ body }));
  }

  handleDelete = (e) => {
    e.preventDefault();

    this.props.delete();
    this.setState(() => ({
      toPost: true
    }));
  }


  onSubmit = (e) => {
    e.preventDefault();

    const { body } = this.state;

    this.props.update(body);
    this.setState((s) => ({
      body: '',
      toPost: true
    }));
  }

  render() {

    const { comment } = this.props;

    if (this.state.toPost === true) {
      const postId = comment.parentId;
      return <Redirect to={`/post/${postId}`} />
    }

    if (comment.id === undefined) {
      return <NotFound />
    }
    const { body, author, voteScore } = comment;

    return (
      <form onSubmit={this.onSubmit}>
        <div className='post'>
          <div className='vote'>
            <div>Score</div>
            <div>{voteScore}</div>
          </div>
          <div className='content'>
            <div className='author'>Posted by {author}</div>
            <input type='text' id='body' placeholder='Body' onChange={this.handleBodyChange} defaultValue={body} />
            <div className='options'>
              <ul>
                <li><a href='#' onClick={this.handleDelete}>Delete</a></li>
              </ul>
            </div>
          </div>
        </div>

        <button>Save</button>
      </form>
    )
  }
}

function mapStateToProps({ comments }, props) {

  const id = props.match.params.id;
  const comment = comments[id] || {};

  return {
    id,
    comment
  }
}

function mapDispatchToProps(dispatch, { match }) {

  const id = match.params.id;
  return {
    get: () => dispatch(handleGetComment(id)).then(action => action.comment),
    update: (body) => dispatch(handleUpdateComment(id, body)),
    delete: () => dispatch(handleDelete(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateComment);