import React, { Component, Fragment } from 'react'
import Wave from './Wave'
import { withRouter } from 'react-router-dom'

const routines = require('./routine-logic.js')

class Routines extends Component {
  constructor (props) {
    super(props)

    this.state = routines
  }

  render () {
    return this.state.routines.map((routine, index) => (
      <Fragment key={index}>
        <h3>{routine.title}</h3>
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
