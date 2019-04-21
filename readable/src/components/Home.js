import React from 'react'
import { connect } from 'react-redux'
import BaseLayout from './BaseLayout'
import { orderBy as postsOrderBy } from '../util/postsOrderBy'


class Home extends React.Component {

  state = {
    order: 'DateDesc'
  }

  handleOrderBy = (value) => {

    this.setState(() => ({
      order: value
    }))
  }

  render() {

    const { order } = this.state;
    const { orderBy } = this.props;
    const postsIds = orderBy(this.state.order);

    return (<BaseLayout orderBy={this.handleOrderBy} postsIds={postsIds} order={order} />
    )
  }
}

function mapStateToProps({posts}) {
  return {
    postsIds: Object.keys(posts),
    orderBy: (order) => postsOrderBy(posts, order)
  }
}

export default connect(mapStateToProps)(Home);