import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Categories extends React.Component {

  render() {

    const { categories } = this.props;

    return (
      <ul className='categories'>
        {categories.length > 0 && categories.map(category => <li><Link to={category.path}>{category.name}</Link></li>)}
      </ul>
    )
  }
}

function mapStateToProps({ categories }) {
  return {
    categories
  }
}

export default connect(mapStateToProps)(Categories)