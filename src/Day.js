import React, { Component } from 'react'
import Circuit from './Circuit'
import { withRouter } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

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
        <div style={{ paddingTop: '1em' }}>
          <Paper style={{ padding: '1em', background: 'rgba(0, 0, 0, 0.8)' }}>
            <Grid container direction="row" justify="center">
              <Grid container direction="row" justify="center" item xs={12} md={10} lg={8}>
                <h1 className="routine-header">
                  {this.props.location.state.fromWave.name}
                </h1>
              </Grid>
            </Grid>
            <Circuit circuit={fromWave.circuit1} antagCircuit={isWave1().circuit1} name='Primary'/>
            <Circuit circuit={fromWave.circuit2} antagCircuit={isWave1().circuit2} name='Technique'/>
            <Circuit circuit={fromWave.circuit3} antagCircuit={isWave1().circuit3} name='Assistance'/>
          </Paper>
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(Day)
