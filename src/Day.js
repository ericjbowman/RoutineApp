import React, { Component } from 'react'
import Circuit from './Circuit'
import { withRouter } from 'react-router-dom'

class Day extends Component {
  // componentDidMount () {
  //   const { fromWave } = this.props.location.state
  // }
  render () {
    const { fromWave, fromWave1 } = this.props.location.state
    const isWave1 = () => {
      if ((fromWave.name === 'Day 2') || (fromWave.name === 'Day 4')) {
        return (fromWave1)
      } else {
        return (fromWave)
      }
    }
    return (
      <React.Fragment>
        <h3>{this.props.location.state.fromWave.name}</h3>
        <Circuit circuit={fromWave.circuit1} antagCircuit={isWave1().circuit1} name='Primary'/>
        <Circuit circuit={fromWave.circuit2} antagCircuit={isWave1().circuit2} name='Technique'/>
        <Circuit circuit={fromWave.circuit3} antagCircuit={isWave1().circuit3} name='Assistance'/>
      </React.Fragment>
    )
  }
}

export default withRouter(Day)
