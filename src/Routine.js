import React, { Component, Fragment } from 'react'
import Wave from './Wave'
import { withRouter, Redirect, Link } from 'react-router-dom'
import { withSnackbar } from 'notistack'
import axios from 'axios'
import apiUrl from './apiConfig'
import messages from './auth/messages'

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
        <Fragment key={id}>
          <h3>{routine.title}</h3>
          <button onClick={this.deleteRoutine}>Delete</button>
          <Link to={{
            pathname: '/edit-input',
            state: {
              id: id
            }
          }}><button>Edit</button>
          </Link>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <Wave wave={routine.wave1} number='1' wave1={routine.wave1}/>
              </div>
              <div className="col-6">
                <Wave wave={routine.wave2} number='2'wave1={routine.wave1}/>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <Wave wave={routine.wave3} number='3'wave1={routine.wave1}/>
              </div>
              <div className="col-6">
                <Wave wave={routine.wave4} number='4'wave1={routine.wave1}/>
              </div>
            </div>
          </div>
        </Fragment>
      )
    }
  }
}

export default withSnackbar(withRouter(Routine))
