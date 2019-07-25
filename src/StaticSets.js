import React, { Component } from 'react'

class StaticSets extends Component {
  render () {
    const { circuit } = this.props.sets
    const ifNoWeight = function (num) {
      if (num === 0) {
        return 'n/a'
      } else {
        return num + ' lb'
      }
    }
    if (circuit.intensity === 'Speed') {
      return (
        <table className="table table-bordered table-dark table-sm">
          <thead>
            <tr>
              <th colSpan="4" scope="row" className="technique">{circuit.intensity}</th>
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
              <td scope="row">{circuit.antag.name}</td>
              <td>{ifNoWeight(circuit.antag.weight)}</td>
              <td>{circuit.antag.sets}</td>
              <td>{circuit.antag.reps}</td>
            </tr>
            <tr>
              <td scope="row">{circuit.main.name}</td>
              <td>{circuit.main.weight} lb</td>
              <td>{circuit.main.sets}</td>
              <td>{circuit.main.reps}</td>
            </tr>
            <tr>
              <td colSpan="4">Perform both sets on the top of every minute for 10 minutes</td>
            </tr>
          </tbody>
        </table>
      )
    } else {
      return (
        <table className="table table-bordered table-dark table-sm">
          <thead>
            <tr>
              <th colSpan="4" scope="row" className="technique">{circuit.intensity}</th>
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
              <td scope="row">{circuit.antag.name}</td>
              <td>{ifNoWeight(circuit.antag.weight)}</td>
              <td>{circuit.antag.sets}</td>
              <td>{circuit.antag.reps}</td>
            </tr>
            <tr>
              <td scope="row">{circuit.main.name}</td>
              <td>{circuit.main.weight} lb</td>
              <td>{circuit.main.sets}</td>
              <td>{circuit.main.reps}</td>
            </tr>
            <tr>
              <td scope="row">{circuit.core.name}</td>
              <td>{ifNoWeight(circuit.core.weight)}</td>
              <td>{circuit.core.sets}</td>
              <td>10-15</td>
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
