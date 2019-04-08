import React from 'react'
import { handleAddPost } from '../actions/posts'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class NewPost extends React.Component {

  state = {
    ...this.defaultState(this.state)
  }

  defaultState(state) {
    return {
      ...state,
      title: '',
      body: '',
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

  onSubmit = (e) => {
    e.preventDefault();

    const { title, body } = this.state;

    this.props.dispatch(handleAddPost(title, body, 'pessoa 1', 'redux'));
    this.setState((s) => ({
      ...this.defaultState(s),
      toHome: true
    }));
  }

  render() {

    if (this.state.toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type='text' id='title' placeholder='Title' onChange={this.handleTitleChange} />
          <input type='text' id='body' placeholder='Body' onChange={this.handleBodyChange} />

          <button>Send</button>
        </form>
      </div>
    )
  }
}

export default connect()(NewPost)