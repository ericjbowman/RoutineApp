import React, { Component } from 'react'
import SimpleTable from './Wave2'
import Button from '@material-ui/core/Button'
import { withRouter, Redirect, Link } from 'react-router-dom'
import { withSnackbar } from 'notistack'
import axios from 'axios'
import apiUrl from './apiConfig'
import messages from './auth/messages'
import Paper from '@material-ui/core/Paper'

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
          <div>
            <Paper style={{ padding: '1em', background: 'rgba(0, 0, 0, 0.8)' }}>
              <div className="routine-header-container">
                <h2 className="center white">{routine.title}</h2>
                <div className="center-element">
                  <Button component={Link} to={{
                    pathname: '/edit-input',
                    state: {
                      id: id
                    }
                  }} variant="contained" color="primary">
                    Edit
                  </Button>
                  <Button onClick={this.deleteRoutine} variant="contained" color="secondary">Delete</Button>
                </div>
              </div>
              <div className="wave-container">
                <SimpleTable wave={routine.wave1} number='1' wave1={routine.wave1}/>
                <SimpleTable wave={routine.wave2} number='2'wave1={routine.wave1}/>
              </div>
              <div className="wave-container">
                <SimpleTable wave={routine.wave3} number='3'wave1={routine.wave1}/>
                <SimpleTable wave={routine.wave4} number='4'wave1={routine.wave1}/>
              </div>
            </Paper>
          </div>
        </React.Fragment>
      )
    }
  }
}

export default withSnackbar(withRouter(Routine))
