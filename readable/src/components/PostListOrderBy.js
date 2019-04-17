import React from 'react'

export default class PostListOrderBy extends React.Component {

  handleOrderBy = (e) => {
    e.preventDefault();

    this.props.orderBy(e.target.value);
  }

  render() {

    return (
      <div>
        <select onChange={this.handleOrderBy} value={this.props.order}>
          <option value='DateAsc'>Date ascending</option>
          <option value='DateDesc'>Date descending</option>
          <option value='VoteScoreAsc'>Vote score ascending</option>
          <option value='VoteScoreDesc'>Vote score descending</option>
        </select>
      </div>
    )
  }
}