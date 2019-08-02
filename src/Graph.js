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
      loaded: false,
      routines: []
    }
  }

  componentDidMount () {
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
      .catch(err => this.setState({
        error: err.message
      }))
  }

  render () {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'My First dataset',
        borderColor: 'red',
        backgroundColor: 'red',
        fill: false,
        data: [
          1,
          2,
          3,
          4,
          5,
          6,
          7
        ],
        yAxisID: 'y-axis-1'
      }, {
        label: 'My Second dataset',
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
        yAxisID: 'y-axis-2'
      }]
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
        }, {
          type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
          display: true,
          position: 'right',
          id: 'y-axis-2',
          // grid line settings
          gridLines: {
            drawOnChartArea: false // only want the grid lines for one axis to show up
          }
        }]
      }
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
