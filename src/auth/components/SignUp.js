import React, { Component, Fragment } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { withSnackbar } from 'notistack'
import { css } from '@emotion/core'
import { PulseLoader } from 'react-spinners'

import { signUp, signIn } from '../api'
import messages from '../messages'
import '../../css/auth/auth.scss'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'

const override = css`
    display: block;
    margin: 0 auto;
`

class SignUp extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
      loading: false
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignUp = event => {
    event.preventDefault()
    this.setState({ loading: true })
    const { enqueueSnackbar, history, setUser } = this.props

    signUp(this.state)
      .then(() => signIn(this.state))
      .then(res => setUser(res.data.user))
      .then(() => enqueueSnackbar(messages.signUpSuccess, { variant: 'success', autoHideDuration: 2000 }))
      .then(() => history.push('/'))
      .catch(() => {
        this.setState({ email: '', password: '', passwordConfirmation: '', loading: false })
        enqueueSnackbar(messages.signUpFailure, { variant: 'error', autoHideDuration: 2000 })
      })
  }

  render () {
    const { email, password, passwordConfirmation, loading } = this.state

    return (
      <Fragment>
        <div className="auth-container">
          <Paper style={{ maxWidth: '500px', margin: 'auto', backgroundColor: '#F1F1F1' }}>
            <CssBaseline />
            <div className="auth-style">
              <Grid container direction="row" justify="center" spacing={1}>
                <Grid container direction="row" item xs={9} md={9} lg={9}>
                  <Typography component="h1" variant="h5" style={{ width: '50%' }}>
                    Sign Up
                  </Typography>
                </Grid>
                <Grid container direction="row" item xs={3} md={3} lg={3}>
                  {loading &&
                  <div className='sweet-loading'>
                    <PulseLoader
                      css={override}
                      sizeUnit={'px'}
                      size={12}
                      color={'#54B240'}
                      loading={this.state.loading}
                    />
                  </div> }
                </Grid>
              </Grid>
              <form className="form" onSubmit={this.onSignUp}>
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

                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="passwordConfirmation"
                      label="Password Confirmation"
                      type="password"
                      id="passwordConfirmation"
                      value={passwordConfirmation}
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
                  >Sign Up
                  </Button>
                </div>
                <Grid container justify="flex-end" style={{ marginTop: '0.5em' }}>
                  <Grid item>
                    <Link to="/sign-in" variant="body2">
                      Already have an account? Sign in
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

export default withSnackbar(withRouter(SignUp))
