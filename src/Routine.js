import React, { Component } from 'react'
// import SimpleTable from './Wave2'
// import Button from '@material-ui/core/Button'
import RoutineExpansion from './RoutineExpansion'
import { withRouter, Redirect } from 'react-router-dom'
import { withSnackbar } from 'notistack'
import axios from 'axios'
import apiUrl from './apiConfig'
import messages from './auth/messages'
// import Paper from '@material-ui/core/Paper'

class Routine extends Component {
  constructor (props) {
    super(props)
    this.state = {
      deleted: false
    }
  }

  deleteRoutine = () => {
    axios({
      url: (`${apiUrl}/inputs/${this.props.id}`),
      method: 'DELETE',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
      .then(() => this.setState({ deleted: true }))
      .then(() => this.props.enqueueSnackbar(messages.routineDestroySuccess, { variant: 'success', autoHideDuration: 2000 }))
      .catch(() => this.props.enqueueSnackbar(messages.routineDestroyFailure, { variant: 'error', autoHideDuration: 2000 }))
  }
  render () {
    const { routine, id } = this.props
    const { deleted } = this.state
    if (deleted) {
      return (
        <Redirect to={
          { pathname: '/routines', status: { msg: 'Routine Successfully Deleted' } }
        } />
      )
    } if (!deleted) {
      return (
        <React.Fragment>
          <div className="routine-expansion-container">
            <RoutineExpansion routine={routine} deleteRoutine={this.deleteRoutine} id={id} />
          </div>
        </React.Fragment>
      )
    }
  }
}

export default withSnackbar(withRouter(Routine))
