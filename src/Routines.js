import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Routine from './Routine'

class Routines extends Component {
  render () {
    return this.props.routineList.map((routine, index) => (
      <Routine user={this.props.user} routine={routine} id={this.props.idList[index]} key={this.props.idList[index]} />
    ))
  }
}

export default withRouter(Routines)
