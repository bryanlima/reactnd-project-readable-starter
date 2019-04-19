import React, { Component, Fragment } from 'react';
import '../index.css';
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import NewPost from './NewPost'
import UpdatePost from './UpdatePost'
import PostDetails from './PostDetails'
import UpdateComment from './UpdateComment'
import NotFound from './NotFound'
import Category from './Category'
import Categories from './Categories'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {

    return (
      <div className="App">
      <Fragment>
        <Categories />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/post/new' exact component={NewPost} />
          <Route path='/post/:id/update' component={UpdatePost} />
          <Route path='/:category/:postId' exact component={PostDetails} />
          <Route path='/comment/:id/update' component={UpdateComment} />
          <Route path='/:category' component={Category} />
          <Route component={NotFound} />
        </Switch>
        </Fragment>
      </div>
    );
  }
}

export default connect()(App)