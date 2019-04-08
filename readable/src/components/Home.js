import React from 'react'
import Categories from './Categories'
import Dashboard from './Dashboard'
import { Link } from 'react-router-dom'

export default class Home extends React.Component {

  render() {
    return (
      <span>
        <Categories />
        <Dashboard {...this.props} />
        <Link to='/post/new'>New Post</Link>
      </span>
    )
  }
}