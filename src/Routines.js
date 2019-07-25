import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Routine from './Routine'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

class Routines extends Component {
  render () {
    console.log('this.props.match.params', this.props.match.params)
    console.log('All Routines', this.props.routineList)
    console.log('First routine id', this.props.idList[0])
    if (this.props.routineList.length === 0) {
      return (
        <React.Fragment>
          <div className="welcome-main">
            <div className="welcome">
              <Paper style={{ background: 'rgba(255,255,255,0.8)' }}>
                <div className="welcome-content">
                  <Typography component="h1" variant="h5" className="center">
                    You have no routines!
                  </Typography>
                </div>
              </Paper>
            </div>
          </div>
        </React.Fragment>
      )
    }
    return this.props.routineList.map((routine, index) => (
      <Routine user={this.props.user} routine={routine} id={this.props.idList[index]} key={this.props.idList[index]} />
    ))
  }
}

export default withRouter(Routines)
