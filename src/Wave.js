import React from 'react'
import PropTypes from 'prop-types'
// import Day from './Day'
import { withRouter, Link } from 'react-router-dom'

const Wave = (props) => (
  <React.Fragment>
    <table className="table table-bordered table-dark table-sm wave">
      <thead>
        <tr>
          <th colSpan="5" scope="row" className="wave bg-primary">Wave{' ' + props.number}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row" className="table-primary">Week 1</th>
          <td><Link to={{
            pathname: `/days/${props.number}-1`,
            state: {
              fromWave: props.wave.week1.day1
            }
          }}>Day1
          </Link></td>
          <td><Link to={{
            pathname: `/days/${props.number}-2`,
            state: {
              fromWave: props.wave.week1.day2
            }
          }}>Day2
          </Link></td>
          <td><Link to={{
            pathname: `/days/${props.number}-3`,
            state: {
              fromWave: props.wave.week1.day3
            }
          }}>Day3
          </Link></td>
          <td><Link to={{
            pathname: `/days/${props.number}-4`,
            state: {
              fromWave: props.wave.week1.day4
            }
          }}>Day4
          </Link></td>
        </tr>
        <tr>
          <th scope="row" className="table-primary">Week 2</th>
          <td><Link to={{
            pathname: `/days/${props.number}-5`,
            state: {
              fromWave: props.wave.week2.day1
            }
          }}>Day1
          </Link></td>
          <td><Link to={{
            pathname: `/days/${props.number}-6`,
            state: {
              fromWave: props.wave.week2.day2
            }
          }}>Day2
          </Link></td>
          <td><Link to={{
            pathname: `/days/${props.number}-7`,
            state: {
              fromWave: props.wave.week2.day3
            }
          }}>Day3
          </Link></td>
          <td><Link to={{
            pathname: `/days/${props.number}-8`,
            state: {
              fromWave: props.wave.week2.day4
            }
          }}>Day4
          </Link></td>
        </tr>
        <tr>
          <th scope="row" className="table-primary">Week 3</th>
          <td><Link to={{
            pathname: `/days/${props.number}-9`,
            state: {
              fromWave: props.wave.week3.day1
            }
          }}>Day1
          </Link></td>
          <td><Link to={{
            pathname: `/days/${props.number}-10`,
            state: {
              fromWave: props.wave.week3.day2
            }
          }}>Day2
          </Link></td>
          <td><Link to={{
            pathname: `/days/${props.number}-11`,
            state: {
              fromWave: props.wave.week3.day3
            }
          }}>Day3
          </Link></td>
          <td><Link to={{
            pathname: `/days/${props.number}-12`,
            state: {
              fromWave: props.wave.week3.day4
            }
          }}>Day4
          </Link></td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
)

Wave.propTypes = {
  wave: PropTypes.object.isRequired,
  number: PropTypes.string.isRequired
}

export default withRouter(Wave)
