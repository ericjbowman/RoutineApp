import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Routine from './Routine'

class Routines extends Component {
  render () {
    console.log('this.props.match.params', this.props.match.params)
    console.log('All Routines', this.props.routineList)
    console.log('First routine id', this.props.idList[0])
    if (this.props.routineList.length === 0) {
      return (
        <h1>Click Create Routine to get started</h1>
      )
    }
    return this.props.routineList.map((routine, index) => (
      <Routine user={this.props.user} routine={routine} id={this.props.idList[index]} key={this.props.idList[index]} />
    ))
  }
}

export default withRouter(Routines)
