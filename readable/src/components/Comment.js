import { React, Component } from 'react';

export default class Comment extends Component {

  render() {
    return (
      <div className='comment'>
        <div className='vote'>
          <div>Up</div>
          <div>43</div>
          <div>Down</div>
        </div>
        <div className='content'>
          <div className='author'>Posted by authorName</div>
          <div className='message'>body message</div>
          <div className='options'>
            <ul>
              <li>3 Replies</li>
              <li>Edit</li>
              <li>Delete</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}