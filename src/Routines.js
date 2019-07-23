import React, { Component, Fragment } from 'react'
import Wave from './Wave'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from './apiConfig'

class Routines extends Component {
  deleteRoutine = () => {
    axios({
      url: (`${apiUrl}/routines/${this.props.match.params.id}`),
      method: 'DELETE',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
  }
  render () {
    console.log('this.props.match.params', this.props.match.params)
    console.log('All Routines', this.props.routineList)
    return this.props.routineList.map((routine, index) => (
      <Fragment key={index}>
        <h3>{routine.title}</h3>
        <button onClick={this.deleteRoutine}>Delete</button>
        <button>Edit</button>
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
    ))
  }
}

export default withRouter(Routines)
