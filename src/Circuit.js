import React, { Component } from 'react'
import ThreeSets2 from './ThreeSets2'
import StaticSets2 from './StaticSets2'

class Circuit extends Component {
  render () {
    console.log('Circuit intensity is', this.props.circuit.intensity)
    if ((this.props.circuit.intensity === 'Speed') || (this.props.circuit.intensity === 'Reps') || (this.props.circuit.intensity === 'Endurance')) {
      console.log('static', this.props)
      return (
        <React.Fragment>
          <h5>{this.props.name}</h5>
          <StaticSets2 sets={this.props}/>
        </React.Fragment>
      )
    } else {
      console.log('3 set', this.props)
      return (
        <React.Fragment>
          <h5>{this.props.name}</h5>
          <ThreeSets2 sets={this.props}/>
        </React.Fragment>
      )
    }
  }
}

export default Circuit
