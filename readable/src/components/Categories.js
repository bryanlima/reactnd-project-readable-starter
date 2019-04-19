import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Categories extends React.Component {

  render() {

    const { categories } = this.props;

    return (
      <ul className='categories'>
        <li><Link to='/'>Home</Link></li>
        {categories.map(category => <li><Link to={'/' + category.path}>{category.name}</Link></li>)}
      </ul>
    )
  }
}

function mapStateToProps({ categories }) {
  const newCategories = categories.length > 0 ? categories : [];
  return {
    categories: newCategories
  }
}

export default connect(mapStateToProps)(Categories)