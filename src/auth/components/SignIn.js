import React, { Component, Fragment } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { withSnackbar } from 'notistack'

import { signIn } from '../api'
import messages from '../messages'
import '../../css/auth/auth.scss'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'

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

    const { enqueueSnackbar, history, setUser } = this.props

    signIn(this.state)
      .then(res => setUser(res.data.user))
      .then(() => enqueueSnackbar(messages.signInSuccess, { variant: 'success', autoHideDuration: 2000 }))
      .then(() => history.push('/'))
      .catch(() => {
        this.setState({ email: '', password: '' })
        enqueueSnackbar(messages.signInFailure, { variant: 'error', autoHideDuration: 2000 })
      })
  }

  render () {
    const { email, password } = this.state

    return (
      <Fragment>
        <div>
          <Paper>
            <CssBaseline />
            <div className="auth-style">
              <Typography component="h1" variant="h5">
                Sign In
              </Typography>
              <form className="form" onSubmit={this.onSignIn}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      type="email"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      value={email}
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="password"
                      label="Password"
                      name="password"
                      value={password}
                      type="password"
                      onChange={this.handleChange}
                    />
                  </Grid>
                </Grid>
                <div className="auth-btn-submit">
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                Sign In
                  </Button>
                </div>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link to="/sign-up" variant="body2">
                  No account? Sign up
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Paper>
        </div>
      </Fragment>
    )
  }
}

export default withSnackbar(withRouter(SignIn))
