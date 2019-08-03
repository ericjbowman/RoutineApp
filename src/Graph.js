import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from './apiConfig'
import { Line } from 'react-chartjs-2'
import Paper from '@material-ui/core/Paper'

class Graph extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputs: [],
      loaded: false
    }
  }

  componentWillMount () {
    this.loadData()
  }

  loadData () {
    axios({
      url: (`${apiUrl}/inputs`),
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
      .then(res => this.setState({
        inputs: res.data.inputs,
        loaded: true
      }))
      .then(() => console.log(this.state.inputs[0].created))
      .catch(err => this.setState({
        error: err.message
      }))
  }

  render () {
    const oneRepMax = function (weight, reps) {
      const weightNum = parseInt(weight, 10)
      const repsNum = parseInt(reps, 10)
      if (repsNum === 1) {
        return weightNum
      } else if (repsNum === 2) {
        return Math.floor(weightNum * 1.05)
      } else if (repsNum === 3) {
        return Math.floor(weightNum * 1.08)
      } else if (repsNum === 4) {
        return Math.floor(weightNum * 1.11)
      } else if (repsNum === 5) {
        return Math.floor(weightNum * 1.15)
      } else if (repsNum === 6) {
        return Math.floor(weightNum * 1.18)
      } else if (repsNum === 7) {
        return Math.floor(weightNum * 1.20)
      } else if (repsNum === 8) {
        return Math.floor(weightNum * 1.25)
      } else if (repsNum === 9) {
        return Math.floor(weightNum * 1.30)
      } else if (repsNum === 10) {
        return Math.floor(weightNum * 1.33)
      } else if (repsNum === 11) {
        return Math.floor(weightNum * 1.43)
      } else if (repsNum === 12) {
        return Math.floor(weightNum * 1.49)
      }
    }
    console.log(this.state)
    const { inputs } = this.state
    console.log(inputs)
    // const sortedInputs = inputs.sort((a, b) => (a.id > b.id) ? 1 : -1)
    let data = {}
    if (this.state.loaded) {
      const sortedInputs = inputs.sort((a, b) => (a.id > b.id) ? 1 : -1)
      data = {
        labels: sortedInputs.map(input => (input.created)),
        datasets: [{
          label: 'Squat',
          borderColor: 'red',
          backgroundColor: 'red',
          fill: false,
          data:
            sortedInputs.map(input => (
              oneRepMax(input.squatWeight, input.squatReps)
            )),
          yAxisID: 'y-axis-1'
        }, {
          label: 'Over-head Press',
          borderColor: 'green',
          backgroundColor: 'green',
          fill: false,
          data:
            sortedInputs.map(input => (
              oneRepMax(input.ohpWeight, input.ohpReps)
            )),
          yAxisID: 'y-axis-1'
        }, {
          label: 'Deadlift',
          borderColor: 'purple',
          backgroundColor: 'purple',
          fill: false,
          data:
            sortedInputs.map(input => (
              oneRepMax(input.deadliftWeight, input.deadliftReps)
            )),
          yAxisID: 'y-axis-1'
        }, {
          label: 'Bench Press',
          borderColor: 'blue',
          backgroundColor: 'blue',
          fill: false,
          data:
            sortedInputs.map(input => (
              oneRepMax(input.benchWeight, input.benchReps)
            )),
          yAxisID: 'y-axis-1'
        }]
      }
    }
    if (!this.state.loaded) {
      data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Squat',
          borderColor: 'red',
          backgroundColor: 'red',
          fill: false,
          data: [
            5,
            4,
            3,
            2,
            8,
            3,
            9
          ],
          yAxisID: 'y-axis-1'
        }, {
          label: 'Over-head Press',
          borderColor: 'green',
          backgroundColor: 'green',
          fill: false,
          data: [
            5,
            4,
            3,
            2,
            8,
            3,
            9
          ],
          yAxisID: 'y-axis-1'
        }, {
          label: 'Deadlift',
          borderColor: 'purple',
          backgroundColor: 'purple',
          fill: false,
          data: [
            1,
            6,
            2,
            8,
            7,
            0,
            4
          ],
          yAxisID: 'y-axis-1'
        }, {
          label: 'Bench Press',
          borderColor: 'blue',
          backgroundColor: 'blue',
          fill: false,
          data: [
            8,
            7,
            6,
            5,
            4,
            3,
            2
          ],
          yAxisID: 'y-axis-1'
        }]
      }
    }
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      hoverMode: 'index',
      stacked: false,
      title: {
        display: true,
        text: 'One Rep Max'
      },
      scales: {
        yAxes: [{
          type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
          display: true,
          position: 'left',
          id: 'y-axis-1'
        }
        // {
        //   type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
        //   display: true,
        //   position: 'right',
        //   id: 'y-axis-2',
        //   // grid line settings
        //   gridLines: {
        //     drawOnChartArea: false // only want the grid lines for one axis to show up
        //   }
        // }]
        ]
      }
    }
    if (!this.state.loaded) {
      return <h1>Nope</h1>
    }
    return (
      <React.Fragment>
        <div style={{ margin: '1em' }}>
          <Paper>
            <Line
              data = {data}
              options = {options}
              height = {500}
              // style={{ height: 800 }}
            />
          </Paper>
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(Graph)
