import React, { Component } from 'react';
import './App.css';

import { handleInitialData } from './actions/shared'

import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import NewPost from './components/NewPost'
import UpdatePost from './components/UpdatePost'
import PostDetails from './components/PostDetails'
import UpdateComment from './components/UpdateComment'
import NotFound from './components/NotFound'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/post/new' exact component={NewPost} />
          <Route path='/post/:id' exact component={PostDetails} />
          <Route path='/post/:id/update' component={UpdatePost} />
          <Route path='/comment/:id/update' component={UpdateComment} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default connect()(App)