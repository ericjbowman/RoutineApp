import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

import { signIn } from '../api'

const Input = styled.input`
  border-radius: 3px;
  outline: none;

  &:focus {
    box-shadow: 0 0 0 5px deeppink;
  }
`

class SignIn extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignIn = event => {
    event.preventDefault()

    const { history, setUser } = this.props

    signIn(this.state)
      .then(res => setUser(res.data.user))
      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({ email: '', password: '' })
      })
  }

  render () {
    const { email, password } = this.state

    return (
      <form className='auth-form' onSubmit={this.onSignIn}>
        <h3>Sign In</h3>
        <label htmlFor="email">Email</label>
        <Input
          required
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={this.handleChange}
        />
        <label htmlFor="password">Password</label>
        <Input
          required
          name="password"
          value={password}
          type="password"
          placeholder="Password"
          onChange={this.handleChange}
        />
        <button type="submit">Sign In</button>
      </form>
    )
  }
}

export default withRouter(SignIn)
