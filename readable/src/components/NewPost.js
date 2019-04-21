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
      title: {
        value: '',
        valid: false
      },
      body: {
        value: '',
        valid: false
      },
      toHome: false,
      category: {
        value: this.props.categories[0].name,
        valid: true
      }
    }
  }

  handleTitleChange = (e) => {
    const value = e.target.value.trim();
    const title = {
      value,
      valid: value !== ''
    }

    this.setState(() => ({ title }));
  }

  handleBodyChange = (e) => {
    const value = e.target.value.trim();
    const body = {
      value,
      valid: value !== ''
    }


    this.setState(() => ({ body }));
  }

  handleCategoryChange = (e) => {
    e.preventDefault();

    const value = e.target.value.trim();
    const category = {
      value,
      valid: value !== ''
    }

    this.setState(() => ({
      category
    }));
  }

  onSubmit = (e) => {
    e.preventDefault();

    if (this.isValid(this.state)) {

      const { title, body, category, } = this.state;

      this.props.addPost(title.value, body.value, category.value);
      this.setState((s) => ({
        ...this.defaultState(s),
        toHome: true
      }));
    }
  }

  isValid(state) {
    const { title, body, category } = state;

    return title.valid && body.valid && category.valid;
  }

  render() {

    if (this.state.toHome === true) {
      return <Redirect to='/' />
    }

    const { categories } = this.props;

    return (
      <div class='newPost'>
        <form onSubmit={this.onSubmit}>

          <label>Title</label>
          <input type='text' id='title' placeholder='Title' onChange={this.handleTitleChange} />

          <label>Body</label>
          <input type='text' id='body' placeholder='Body' onChange={this.handleBodyChange} />

          <div class='box'>
            <label>Category</label>
            <select onChange={this.handleCategoryChange}>
              {categories.map(category => <option value={category.name}>{category.name}</option>)}
            </select>

            <p><button disabled={!this.isValid(this.state)}>Add new post</button></p>
          </div>
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