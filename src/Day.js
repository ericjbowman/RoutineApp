import React, { Component } from 'react'
import Circuit from './Circuit'
import { withRouter } from 'react-router-dom'

class Day extends Component {
  // componentDidMount () {
  //   const { fromWave } = this.props.location.state
  // }
  render () {
    return (
      <div>
        <h3>{this.props.dayNum}</h3>
        <Circuit circuit={this.props.location.state.fromWave.circuit1} name='Primary'/>
        <Circuit circuit={this.props.location.state.fromWave.circuit2} name='Technique'/>
        <Circuit circuit={this.props.location.state.fromWave.circuit3} name='Assistance'/>
        <button className="btn btn-success">Completed</button>
      </div>
    )
  }
}

export default withRouter(Day)
