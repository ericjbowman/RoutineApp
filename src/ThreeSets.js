import React, { Component, Fragment } from 'react'

class ThreeSets extends Component {
  render () {
    const ifNoWeight = function (num) {
      if (num === 0) {
        return 'n/a'
      } else {
        return num + ' lb'
      }
    }
    console.log('3 set props...', this.props.sets)
    console.log('3 set second weight', this.props.sets.circuit.antag.weight[1])
    return (
      <Fragment>
        <table className="table table-bordered table-dark table-sm">
          <thead>
            <tr>
              <th colSpan="3" className="mainMover">
                Set 1: {this.props.sets.circuit.intensity}
              </th>
            </tr>
            <tr>
              <th scope="col">Exercise</th>
              <th scope="col">Weight</th>
              <th scope="col">Reps</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">{this.props.sets.circuit.antag.name}</td>
              <td>{ifNoWeight(this.props.sets.circuit.antag.weight[0])}</td>
              <td>{this.props.sets.circuit.antag.reps[0]}</td>
            </tr>
            <tr>
              <td scope="row">{this.props.sets.circuit.main.name}</td>
              <td>{this.props.sets.circuit.main.weight[0]} lb</td>
              <td>{this.props.sets.circuit.main.reps[0]}</td>
            </tr>
            <tr>
              <td scope="row">{this.props.sets.circuit.core.name}</td>
              <td>n/a</td>
              <td>{this.props.sets.circuit.core.reps[0]}</td>
            </tr>
            <tr>
              <td colSpan="3">90 Seconds Rest</td>
            </tr>
          </tbody>
        </table>
        <table className="table table-bordered table-dark table-sm">
          <thead>
            <tr>
              <th colSpan="3" className="mainMover">
                Set 2: {this.props.sets.circuit.intensity}
              </th>
            </tr>
            <tr>
              <th scope="col">Exercise</th>
              <th scope="col">Weight</th>
              <th scope="col">Reps</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">{this.props.sets.circuit.antag.name}</td>
              <td>{ifNoWeight(this.props.sets.circuit.antag.weight[1])}</td>
              <td>{this.props.sets.circuit.antag.reps[1]}</td>
            </tr>
            <tr>
              <td scope="row">{this.props.sets.circuit.main.name}</td>
              <td>{this.props.sets.circuit.main.weight[1]} lb</td>
              <td>{this.props.sets.circuit.main.reps[1]}</td>
            </tr>
            <tr>
              <td scope="row">{this.props.sets.circuit.core.name}</td>
              <td>n/a</td>
              <td>{this.props.sets.circuit.core.reps[1]}</td>
            </tr>
            <tr>
              <td colSpan="3">90 Seconds Rest</td>
            </tr>
          </tbody>
        </table>
        <table className="table table-bordered table-dark table-sm">
          <thead>
            <tr>
              <th colSpan="3" className="mainMover">
                Set 3: {this.props.sets.circuit.intensity}
              </th>
            </tr>
            <tr>
              <th scope="col">Exercise</th>
              <th scope="col">Weight</th>
              <th scope="col">Reps</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">{this.props.sets.circuit.antag.name}</td>
              <td>{ifNoWeight(this.props.sets.circuit.antag.weight[2])}</td>
              <td>{this.props.sets.circuit.antag.reps[2]}</td>
            </tr>
            <tr>
              <td scope="row">{this.props.sets.circuit.main.name}</td>
              <td>{this.props.sets.circuit.main.weight[2]} lb</td>
              <td>{this.props.sets.circuit.main.reps[2]}</td>
            </tr>
            <tr>
              <td scope="row">{this.props.sets.circuit.core.name}</td>
              <td>n/a</td>
              <td>{this.props.sets.circuit.core.reps[2]}</td>
            </tr>
            <tr>
              <td colSpan="3">90 Seconds Rest</td>
            </tr>
          </tbody>
        </table>
      </Fragment>
    )
  }
}

export default ThreeSets
