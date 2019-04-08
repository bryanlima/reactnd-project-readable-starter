import React, { Component } from 'react';
import './App.css';

import { handleInitialData } from './actions/shared'

import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import NewPost from './components/NewPost'
import UpdatePost from './components/UpdatePost'

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
          <Route path='/post/:id' component={UpdatePost} />
        </Switch>
      </div>
    );
  }
}

export default connect()(App)