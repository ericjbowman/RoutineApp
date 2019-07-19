import React, { Component, Fragment } from 'react'

class ThreeSets extends Component {
  render () {
    const { circuit, antagCircuit } = this.props.sets
    const ifNoWeight = function (num) {
      if (num === 0) {
        return 'n/a'
      } else {
        return num + ' lb'
      }
    }
    console.log('3 set props...', this.props.sets)
    console.log('3 set second weight', circuit.antag.weight[1])
    return (
      <Fragment>
        <table className="table table-bordered table-dark table-sm">
          <thead>
            <tr>
              <th colSpan="3" className="mainMover">
                Set 1: {circuit.intensity}
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
              <td scope="row">{circuit.antag.name}</td>
              <td>{ifNoWeight(antagCircuit.antag.weight[0])}</td>
              <td>{antagCircuit.antag.reps[0]}</td>
            </tr>
            <tr>
              <td scope="row">{circuit.main.name}</td>
              <td>{circuit.main.weight[0]} lb</td>
              <td>{circuit.main.reps[0]}</td>
            </tr>
            <tr>
              <td scope="row">{circuit.core.name}</td>
              <td>n/a</td>
              <td>10-20</td>
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
                Set 2: {circuit.intensity}
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
              <td scope="row">{antagCircuit.antag.name}</td>
              <td>{ifNoWeight(antagCircuit.antag.weight[1])}</td>
              <td>{antagCircuit.antag.reps[1]}</td>
            </tr>
            <tr>
              <td scope="row">{circuit.main.name}</td>
              <td>{circuit.main.weight[1]} lb</td>
              <td>{circuit.main.reps[1]}</td>
            </tr>
            <tr>
              <td scope="row">{circuit.core.name}</td>
              <td>n/a</td>
              <td>10-20</td>
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
                Set 3: {circuit.intensity}
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
              <td scope="row">{antagCircuit.antag.name}</td>
              <td>{ifNoWeight(antagCircuit.antag.weight[2])}</td>
              <td>{antagCircuit.antag.reps[2]}</td>
            </tr>
            <tr>
              <td scope="row">{circuit.main.name}</td>
              <td>{circuit.main.weight[2]} lb</td>
              <td>{circuit.main.reps[2]}</td>
            </tr>
            <tr>
              <td scope="row">{circuit.core.name}</td>
              <td>n/a</td>
              <td>10-20</td>
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
