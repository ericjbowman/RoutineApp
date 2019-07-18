import React, { Component } from 'react'

class StaticSets extends Component {
  render () {
    const ifNoWeight = function (num) {
      if (num === 0) {
        return 'n/a'
      } else {
        return num + ' lb'
      }
    }
    if (this.props.sets.circuit.intensity === 'Speed') {
      return (
        <table className="table table-bordered table-dark table-sm">
          <thead>
            <tr>
              <th colSpan="4" scope="row" className="technique">{this.props.sets.circuit.intensity}</th>
            </tr>
            <tr>
              <th scope="col">Exercise</th>
              <th scope="col">Weight</th>
              <th scope="col">Sets</th>
              <th scope="col">Reps</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">{this.props.sets.circuit.antag.name}</td>
              <td>{ifNoWeight(this.props.sets.circuit.antag.weight)}</td>
              <td>{this.props.sets.circuit.antag.sets}</td>
              <td>{this.props.sets.circuit.antag.reps}</td>
            </tr>
            <tr>
              <td scope="row">{this.props.sets.circuit.main.name}</td>
              <td>{this.props.sets.circuit.main.weight} lb</td>
              <td>{this.props.sets.circuit.main.sets}</td>
              <td>{this.props.sets.circuit.main.reps}</td>
            </tr>
            <tr>
              <td colSpan="4">Perform both sets on the top of every minute for 10 minutes</td>
            </tr>
          </tbody>
        </table>
      )
    } else {
      console.log('StaticSets props.sets', this.props.sets)
      return (
        <table className="table table-bordered table-dark table-sm">
          <thead>
            <tr>
              <th colSpan="4" scope="row" className="technique">{this.props.sets.circuit.intensity}</th>
            </tr>
            <tr>
              <th scope="col">Exercise</th>
              <th scope="col">Weight</th>
              <th scope="col">Sets</th>
              <th scope="col">Reps</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">{this.props.sets.circuit.antag.name}</td>
              <td>{ifNoWeight(this.props.sets.circuit.antag.weight)}</td>
              <td>{this.props.sets.circuit.antag.sets}</td>
              <td>{this.props.sets.circuit.antag.reps}</td>
            </tr>
            <tr>
              <td scope="row">{this.props.sets.circuit.main.name}</td>
              <td>{this.props.sets.circuit.main.weight} lb</td>
              <td>{this.props.sets.circuit.main.sets}</td>
              <td>{this.props.sets.circuit.main.reps}</td>
            </tr>
            <tr>
              <td scope="row">{this.props.sets.circuit.core.name}</td>
              <td>{ifNoWeight(this.props.sets.circuit.core.weight)}</td>
              <td>{this.props.sets.circuit.core.sets}</td>
              <td>{this.props.sets.circuit.core.reps}</td>
            </tr>
            <tr>
              <td colSpan="4">90 Seconds Rest</td>
            </tr>
          </tbody>
        </table>
      )
    }
  }
}

export default StaticSets
