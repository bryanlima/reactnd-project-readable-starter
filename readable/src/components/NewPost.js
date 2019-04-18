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
      toHome: false,
      category: ''
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

  handleCategoryChange = (e) => {
    e.preventDefault();

    const category = e.target.value;

    this.setState(() => ({
      category
    }));
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title, body, category } = this.state;

    this.props.addPost(title, body, category);
    this.setState((s) => ({
      ...this.defaultState(s),
      toHome: true
    }));
  }

  render() {

    if (this.state.toHome === true) {
      return <Redirect to='/' />
    }

    const { categories } = this.props;
    console.log('categories', categories);

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <p>Title</p>
          <input type='text' id='title' placeholder='Title' onChange={this.handleTitleChange} />
          <p>Body</p>
          <input type='text' id='body' placeholder='Body' onChange={this.handleBodyChange} />
          <p>Category</p>
          <select onChange={this.handleCategoryChange}>
            {categories.map(category => <option value={category.name}>{category.name}</option>)}
          </select>

          <p><button>Send</button></p>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ categories }) {

  const newCategories = categories.length > 0 ? categories : [];
  return {
    categories: newCategories
  }
}

function mapDispatchToProps(dispatch) {

  return {
    addPost: (title, body, category) => dispatch(handleAddPost(title, body, 'pessoa 1', category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost)