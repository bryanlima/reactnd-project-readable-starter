import React from 'react'
import { handleAddComment } from '../actions/comments'
import { connect } from 'react-redux'

class NewComment extends React.Component {

  state = {
    ...this.defaultState(this.state)
  }

  defaultState(state) {
    return {
      ...state,
      body: '',
    }
  }

  handleBodyChange = (e) => {
    const body = e.target.value;

    this.setState(() => ({ body }));
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { body } = this.state;

    this.props.sendComment(body);
    document.getElementById('body').value = '';
    this.setState((s) => ({
      ...this.defaultState(s),
    }));
  }

  render() {

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type='text' id='body' placeholder='Body' onChange={this.handleBodyChange} />

          <button>Send comment</button>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch, { postId }) {

  return {
    sendComment: (body) => dispatch(handleAddComment(postId, 'pessoa 1', body))
  }
}

export default connect(null, mapDispatchToProps)(NewComment)