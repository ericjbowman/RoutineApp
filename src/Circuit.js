import React, { Component } from 'react'
import ThreeSets2 from './ThreeSets2'
import StaticSets2 from './StaticSets2'

class Circuit extends Component {
  render () {
    if ((this.props.circuit.intensity === 'Speed') || (this.props.circuit.intensity === 'Reps') || (this.props.circuit.intensity === 'Endurance')) {
      return (
        <React.Fragment>
          <div className="flex-center">
            <h3 className="routine-header">{this.props.name}</h3>
          </div>
          <StaticSets2 sets={this.props}/>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <div className="flex-center">
            <h3 className="routine-header">{this.props.name}</h3>
          </div>
          <ThreeSets2 sets={this.props}/>
        </React.Fragment>
      )
    }
  }
}

export default Circuit
