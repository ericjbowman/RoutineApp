import React, { Component } from 'react'
import './App.scss'
import { withRouter, Route } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import RoutineLogic from './RoutineLogic'
import Day from './Day.js'
import InputCreate from './InputCreate'

// import Alert from 'react-bootstrap/Alert'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  render () {
    const { user } = this.state

    return (
      <React.Fragment>
        <Header user={user} />
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/days/:id' render={() => (
            <React.Fragment>
              <RoutineLogic user={user} />
              <Day user={user} />
            </React.Fragment>
          )} />
          <AuthenticatedRoute user={user} path='/routines' render={() => (
            <RoutineLogic user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/create-input' render={() => (
            <InputCreate user={user} />
          )} />
        </main>
      </React.Fragment>
    )
  }
}

export default withRouter(App)
