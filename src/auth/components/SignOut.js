import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { withSnackbar } from 'notistack'
import { signOut } from '../api'
import messages from '../messages'

class SignOut extends Component {
  componentDidMount () {
    const { enqueueSnackbar, history, clearUser, user } = this.props

    signOut(user)
      .finally(() => enqueueSnackbar(messages.signOutSuccess, { variant: 'info' }))
      .finally(() => history.push('/'))
      .finally(() => clearUser())
  }

  render () {
    return ''
  }
}

export default withSnackbar(withRouter(SignOut))
