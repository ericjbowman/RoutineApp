import React, { Component } from 'react'
import ThreeSets from './ThreeSets'
import StaticSets from './StaticSets'

class Circuit extends Component {
  render () {
    if ((this.props.circuit.intensity === 'Speed') || (this.props.circuit.intensity === 'Reps') || (this.props.circuit.intensity === 'Endurance')) {
      return (
        <React.Fragment>
          <div className="flex-center">
            <h3 className="routine-header">{this.props.name} Circuit-</h3>
            <h3 className="routine-header">{this.props.circuit.intensity}</h3>
          </div>
          <StaticSets sets={this.props}/>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <div className="flex-center">
            <h3 className="routine-header">{this.props.name} Circuit-</h3>
            <h3 className="routine-header">{this.props.circuit.intensity}</h3>
          </div>
          <ThreeSets sets={this.props}/>
        </React.Fragment>
      )
    }
  }
}

export default Circuit
