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
    let data = {}
    if (this.state.loaded) {
      data = {
        labels: [inputs[0].created, inputs[1].created, inputs[2].created],
        datasets: [{
          label: 'Squat',
          borderColor: 'red',
          backgroundColor: 'red',
          fill: false,
          data: [
            oneRepMax(inputs[0].squatWeight, inputs[0].squatReps),
            oneRepMax(inputs[1].squatWeight, inputs[1].squatReps),
            oneRepMax(inputs[2].squatWeight, inputs[2].squatReps)
          ],
          yAxisID: 'y-axis-1'
        }, {
          label: 'Over-head Press',
          borderColor: 'green',
          backgroundColor: 'green',
          fill: false,
          data: [
            oneRepMax(inputs[0].ohpWeight, inputs[0].ohpReps),
            oneRepMax(inputs[1].ohpWeight, inputs[1].ohpReps),
            oneRepMax(inputs[2].ohpWeight, inputs[2].ohpReps)
          ],
          yAxisID: 'y-axis-1'
        }, {
          label: 'Deadlift',
          borderColor: 'purple',
          backgroundColor: 'purple',
          fill: false,
          data: [
            oneRepMax(inputs[0].deadliftWeight, inputs[0].deadliftReps),
            oneRepMax(inputs[1].deadliftWeight, inputs[1].deadliftReps),
            oneRepMax(inputs[2].deadliftWeight, inputs[2].deadliftReps)
          ],
          yAxisID: 'y-axis-1'
        }, {
          label: 'Bench Press',
          borderColor: 'blue',
          backgroundColor: 'blue',
          fill: false,
          data: [
            oneRepMax(inputs[0].benchWeight, inputs[0].benchReps),
            oneRepMax(inputs[1].benchWeight, inputs[1].benchReps),
            oneRepMax(inputs[2].benchWeight, inputs[2].benchReps)
          ],
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
      hoverMode: 'index',
      stacked: false,
      title: {
        display: true,
        text: 'Chart.js Line Chart - Multi Axis'
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
    return this.state.inputs.map((input, index) => (
      <React.Fragment key = {index}>
        <Paper>
          <Line
            key = {index}
            data = {data}
            options = {options}
          />
          <h4 key = {index}>{input.created}</h4>
        </Paper>
      </React.Fragment>
    ))
  }
}

export default withRouter(Graph)
