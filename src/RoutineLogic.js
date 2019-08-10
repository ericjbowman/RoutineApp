import React, { Component } from 'react'
import Routines from './Routines'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from './apiConfig'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { css } from '@emotion/core'
import { PropagateLoader } from 'react-spinners'

const override = css`
    display: block;
    margin: 0 auto;
`

class RoutineLogic extends Component {
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
      .then(res => this.setState({ inputs: res.data.inputs, loaded: true }))
      .catch(err => this.setState({ error: err.message }))
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

    const DayA3Sets2 = function (dayName, c1Intensity, c1AntagName, c1AntagMax, c1s1Percent, c1s2Percent, c1s3Percent, c1s1Reps, c1s2Reps, c1s3Reps, c1MainName, c1MainMax, c1CoreName, c2Intensity, c2AntagName, c2Sets, c2AntagMax, c2Percent, c2Reps, c2MainName, c2MainMax, c2CoreName, c3Intensity, c3AntagName, c3AntagMax, c3s1Percent, c3s2Percent, c3s3Percent, c3s1Reps, c3s2Reps, c3s3Reps, c3MainName, c3MainMax, c3CoreName) {
      this.name = dayName
      this.circuit1 = {
        intensity: c1Intensity,
        antag: {
          name: c1AntagName,
          weight: [Math.floor(c1AntagMax * c1s1Percent), Math.floor(c1AntagMax * c1s2Percent), Math.floor(c1AntagMax * c1s3Percent)],
          reps: [c1s1Reps, c1s2Reps, c1s3Reps]
        },
        main: {
          name: c1MainName,
          weight: [Math.floor(c1MainMax * c1s1Percent), Math.floor(c1MainMax * c1s2Percent), Math.floor(c1MainMax * c1s3Percent)],
          reps: [c1s1Reps, c1s2Reps, c1s3Reps]
        },
        core: {
          name: c1CoreName,
          weight: 0,
          reps: [c1s1Reps, c1s2Reps, c1s3Reps]
        }
      }
      this.circuit2 = {
        intensity: c2Intensity,
        antag: {
          name: c2AntagName,
          sets: c2Sets,
          weight: Math.floor(c2AntagMax * c2Percent),
          reps: c2Reps
        },
        main: {
          name: c2MainName,
          sets: c2Sets,
          weight: Math.floor(c2MainMax * c2Percent),
          reps: c2Reps
        },
        core: {
          name: c2CoreName,
          sets: c2Sets,
          weight: 0,
          reps: c2Reps
        }
      }
      this.circuit3 = {
        intensity: c3Intensity,
        antag: {
          name: c3AntagName,
          weight: [Math.floor(c3AntagMax * c3s1Percent), Math.floor(c3AntagMax * c3s2Percent), Math.floor(c3AntagMax * c3s3Percent)],
          reps: [c3s1Reps, c3s2Reps, c3s3Reps]
        },
        main: {
          name: c3MainName,
          weight: [Math.floor(c3MainMax * c3s1Percent), Math.floor(c3MainMax * c3s2Percent), Math.floor(c3MainMax * c3s3Percent)],
          reps: [c3s1Reps, c3s2Reps, c3s3Reps]
        },
        core: {
          name: c3CoreName,
          weight: 0,
          reps: [c3s1Reps, c3s2Reps, c3s3Reps]
        }
      }
    }

    const DayAStatic2 = function (dayName, c1Intensity, c1AntagName, c1AntagMax, c1s1Percent,
      c1s2Percent, c1s3Percent, c1s1Reps, c1s2Reps, c1s3Reps, c1MainName, c1MainMax, c1CoreName,
      c2Intensity, c2AntagName, c2Sets, c2AntagMax, c2Percent, c2Reps, c2MainName, c2MainMax, c2CoreName,
      c3Intensity, c3AntagName, c3Sets, c3AntagMax, c3Percent, c3Reps, c3MainName, c3MainMax, c3CoreName,
      antBench3Max, bench, benchMax, bench2, bench2Max, bench3, bench3Max) {
      this.name = dayName
      this.circuit1 = {
        intensity: c1Intensity,
        antag: {
          name: c1AntagName,
          weight: [Math.floor(c1AntagMax * c1s1Percent), Math.floor(c1AntagMax * c1s2Percent), Math.floor(c1AntagMax * c1s3Percent)],
          reps: [c1s1Reps, c1s2Reps, c1s3Reps]
        },
        main: {
          name: c1MainName,
          weight: [Math.floor(c1MainMax * c1s1Percent), Math.floor(c1MainMax * c1s2Percent), Math.floor(c1MainMax * c1s3Percent)],
          reps: [c1s1Reps, c1s2Reps, c1s3Reps]
        },
        core: {
          name: c1CoreName,
          weight: 0,
          reps: [c1s1Reps, c1s2Reps, c1s3Reps]
        }
      }
      this.circuit2 = {
        intensity: c2Intensity,
        antag: {
          name: c2AntagName,
          sets: c2Sets,
          weight: Math.floor(c2AntagMax * c2Percent),
          reps: c2Reps
        },
        main: {
          name: c2MainName,
          sets: c2Sets,
          weight: Math.floor(c2MainMax * c2Percent),
          reps: c2Reps
        },
        core: {
          name: c2CoreName,
          sets: c2Sets,
          weight: 0,
          reps: c2Reps
        }
      }
      this.circuit3 = {
        intensity: c3Intensity,
        antag: {
          name: c3AntagName,
          sets: c3Sets,
          weight: Math.floor(c3AntagMax * c3Percent),
          reps: c3Reps
        },
        main: {
          name: c3MainName,
          sets: c3Sets,
          weight: Math.floor(c3MainMax * c3Percent),
          reps: c3Reps
        },
        core: {
          name: c3CoreName,
          sets: c3Sets,
          weight: 0,
          reps: c3Reps
        }
      }
    }

    const Wave1 = function (core1, core2, core3, core4, core5, core6, oblique1, oblique2,
      oblique3, oblique4, oblique5, oblique6, antSquat, antSquat2, antSquat3, squat, squatMax,
      squat2, squat2Max, squat3, squat3Max, antOhp, antOhpMax, antOhp2, antOhp2Max, antOhp3, antOhp3Max,
      ohp, ohpMax, ohp2, ohp2Max, ohp3, ohp3Max, antDeadlift, antDeadlift2, antDeadlift3, deadlift,
      deadliftMax, deadlift2, deadlift2Max, deadlift3, deadlift3Max, antBench, antBenchMax, antBench2,
      antBench2Max, antBench3, antBench3Max, bench, benchMax, bench2, bench2Max, bench3, bench3Max) {
      this.week1 = {
        day1: new DayAStatic2('Day 1', 'Heavy', antSquat2, null, 0.6, 0.7, 0.8, 10, 8, 6, squat2, squat2Max, core1, 'Speed', antDeadlift, 10, null, 0.55, 3, deadlift, deadliftMax, core2, 'Reps', antSquat3, 5, null, 0.7, 5, squat3, squat3Max, core3),
        day2: new DayA3Sets2('Day 2', 'Medium', antOhp2, antOhp2Max, 0.55, 0.65, 0.75, 12, 9, 7, ohp2, ohp2Max, oblique1, 'Endurance', antBench, 4, antBenchMax, 0.60, 8, bench, benchMax, oblique2, 'Heavy', antOhp3, antOhp3Max, 0.6, 0.7, 0.8, 10, 8, 6, ohp3, ohp3Max, oblique3),
        day3: new DayAStatic2('Day 3', 'Light', antDeadlift2, null, 0.5, 0.6, 0.7, 15, 10, 8, deadlift2, deadlift2Max, core4, 'Reps', antSquat, 5, null, 0.7, 5, squat, squatMax, core5, 'Endurance', antDeadlift3, 4, null, 0.6, 8, deadlift3, deadlift3Max, core6),
        day4: new DayAStatic2('Day 4', 'Heavy', antBench2, antBench2Max, 0.6, 0.7, 0.8, 10, 8, 6, bench2, bench2Max, oblique4, 'Speed', antOhp, 10, antOhpMax, 0.55, 3, ohp, ohpMax, oblique5, 'Reps', antBench3, 5, antBench3Max, 0.7, 5, bench3, bench3Max, oblique6)
      }
      this.week2 = {
        day1: new DayA3Sets2('Day 1', 'Medium', antSquat2, null, 0.55, 0.65, 0.75, 12, 9, 7, squat2, squat2Max, core1, 'Endurance', antDeadlift, 4, null, 0.60, 8, deadlift, deadliftMax, core2, 'Heavy', antSquat3, null, 0.6, 0.7, 0.8, 10, 8, 6, squat3, squat3Max, core3),
        day2: new DayAStatic2('Day 2', 'Light', antOhp2, antOhp2Max, 0.5, 0.6, 0.7, 15, 10, 8, ohp2, ohp2Max, oblique1, 'Reps', antBench, 5, antBenchMax, 0.7, 5, bench, benchMax, oblique2, 'Endurance', antOhp3, 4, antOhp3Max, 0.6, 8, ohp3, ohp3Max, oblique3),
        day3: new DayAStatic2('Day 3', 'Heavy', antDeadlift2, null, 0.6, 0.7, 0.8, 10, 8, 6, deadlift2, deadlift2Max, core4, 'Speed', antSquat, 10, null, 0.55, 3, squat, squatMax, core5, 'Reps', antDeadlift3, 5, null, 0.7, 5, deadlift3, deadlift3Max, core6),
        day4: new DayA3Sets2('Day 4', 'Medium', antBench2, antBench2Max, 0.55, 0.65, 0.75, 12, 9, 7, bench2, bench2Max, oblique5, 'Endurance', antOhp, 4, antOhpMax, 0.60, 8, ohp, ohpMax, oblique4, 'Light', antBench3, antBench3Max, 0.5, 0.6, 0.7, 15, 10, 8, bench3, bench3Max, oblique6)
      }

      this.week3 = {
        day1: new DayA3Sets2('Day 1', 'Light', antSquat2, null, 0.5, 0.6, 0.7, 15, 10, 8, squat2, squat2Max, core1, 'Reps', antDeadlift, 5, null, 0.7, 5, deadlift, deadliftMax, core2, 'Heavy', antSquat3, null, 0.6, 0.7, 0.8, 10, 8, 6, squat3, squat3Max, core3),
        day2: new DayAStatic2('Day 2', 'Heavy', antOhp2, antOhp2Max, 0.6, 0.7, 0.8, 10, 8, 6, ohp2, ohp2Max, oblique1, 'Speed', antBench, 10, antBenchMax, 0.55, 3, bench, benchMax, oblique2, 'Reps', antOhp3, 5, antOhp3Max, 0.7, 5, ohp3, ohp3Max, oblique3),
        day3: new DayA3Sets2('Day 3', 'Medium', antDeadlift2, null, 0.55, 0.65, 0.75, 12, 9, 7, deadlift2, deadlift2Max, core4, 'Endurance', antSquat, 4, null, 0.60, 8, squat, squatMax, core5, 'Light', antDeadlift3, null, 0.5, 0.6, 0.7, 15, 10, 8, deadlift3, deadlift3Max, core6),
        day4: new DayA3Sets2('Day 4', 'Light', antBench2, antBench2Max, 0.5, 0.6, 0.7, 15, 10, 8, bench2, bench2Max, oblique4, 'Reps', antOhp, 5, antOhpMax, 0.7, 5, ohp, ohpMax, oblique5, 'Heavy', antBench3, antBench3Max, 0.6, 0.7, 0.8, 10, 8, 6, bench3, bench3Max, oblique6)
      }
    }

    const Wave2 = function (core1, core2, core3, core4, core5, core6, oblique1, oblique2,
      oblique3, oblique4, oblique5, oblique6, antSquat, antSquat2, antSquat3, squat, squatMax,
      squat2, squat2Max, squat3, squat3Max, antOhp, antOhpMax, antOhp2, antOhp2Max, antOhp3, antOhp3Max,
      ohp, ohpMax, ohp2, ohp2Max, ohp3, ohp3Max, antDeadlift, antDeadlift2, antDeadlift3, deadlift,
      deadliftMax, deadlift2, deadlift2Max, deadlift3, deadlift3Max, antBench, antBenchMax, antBench2,
      antBench2Max, antBench3, antBench3Max, bench, benchMax, bench2, bench2Max, bench3, bench3Max) {
      this.week1 = {
        day1: new DayAStatic2('Day 1', 'Heavy', antSquat2, null, 0.65, 0.75, 0.85, 9, 7, 4, squat2, squat2Max, core1, 'Speed', antDeadlift, 10, null, 0.6, 3, deadlift, deadliftMax, core2, 'Reps', antSquat3, 5, null, 0.75, 5, squat3, squat3Max, core3),
        day2: new DayA3Sets2('Day 2', 'Medium', antOhp2, antOhp2Max, 0.6, 0.7, 0.8, 10, 8, 6, ohp2, ohp2Max, oblique1, 'Endurance', antBench, 4, antBenchMax, 0.65, 8, bench, benchMax, oblique2, 'Heavy', antOhp3, antOhp3Max, 0.65, 0.75, 0.85, 9, 7, 4, ohp3, ohp3Max, oblique3),
        day3: new DayAStatic2('Day 3', 'Light', antDeadlift2, null, 0.55, 0.65, 0.75, 12, 9, 7, deadlift2, deadlift2Max, core4, 'Reps', antSquat, 5, null, 0.75, 5, squat, squatMax, core5, 'Endurance', antDeadlift3, 4, null, 0.65, 8, deadlift3, deadlift3Max, core6),
        day4: new DayAStatic2('Day 4', 'Heavy', antBench2, antBench2Max, 0.65, 0.75, 0.85, 9, 7, 4, bench2, bench2Max, oblique4, 'Speed', antOhp, 10, antOhpMax, 0.6, 3, ohp, ohpMax, oblique5, 'Reps', antBench3, 5, antBench3Max, 0.75, 5, bench3, bench3Max, oblique6)
      }
      this.week2 = {
        day1: new DayA3Sets2('Day 1', 'Medium', antSquat2, null, 0.6, 0.7, 0.8, 10, 8, 6, squat2, squat2Max, core1, 'Endurance', antDeadlift, 4, null, 0.65, 8, deadlift, deadliftMax, core2, 'Heavy', antSquat3, null, 0.65, 0.75, 0.85, 9, 7, 4, squat3, squat3Max, core3),
        day2: new DayAStatic2('Day 2', 'Light', antOhp2, antOhp2Max, 0.55, 0.65, 0.75, 12, 9, 7, ohp2, ohp2Max, oblique1, 'Reps', antBench, 5, antBenchMax, 0.75, 5, bench, benchMax, oblique2, 'Endurance', antOhp3, 4, antOhp3Max, 0.65, 8, ohp3, ohp3Max, oblique3),
        day3: new DayAStatic2('Day 3', 'Heavy', antDeadlift2, null, 0.65, 0.75, 0.85, 9, 7, 4, deadlift2, deadlift2Max, core4, 'Speed', antSquat, 10, null, 0.6, 3, squat, squatMax, core5, 'Reps', antDeadlift3, 5, null, 0.75, 5, deadlift3, deadlift3Max, core6),
        day4: new DayA3Sets2('Day 4', 'Medium', antBench2, antBench2Max, 0.6, 0.7, 0.8, 10, 8, 6, bench2, bench2Max, oblique4, 'Endurance', antOhp, 4, antOhpMax, 0.65, 8, ohp, ohpMax, oblique5, 'Light', antBench3, antBench3Max, 0.55, 0.65, 0.75, 12, 9, 7, bench3, bench3Max, oblique6)
      }

      this.week3 = {
        day1: new DayA3Sets2('Day 1', 'Light', antSquat2, null, 0.55, 0.65, 0.75, 12, 9, 6, squat2, squat2Max, core1, 'Reps', antDeadlift, 5, null, 0.75, 5, deadlift, deadliftMax, core2, 'Heavy', antSquat3, null, 0.65, 0.75, 0.85, 9, 7, 4, squat3, squat3Max, core3),
        day2: new DayAStatic2('Day 2', 'Heavy', antOhp2, antOhp2Max, 0.65, 0.75, 0.85, 9, 7, 4, ohp2, ohp2Max, oblique1, 'Speed', antBench, 10, antBenchMax, 0.6, 3, bench, benchMax, oblique2, 'Reps', antOhp3, 5, antOhp3Max, 0.75, 5, ohp3, ohp3Max, oblique3),
        day3: new DayA3Sets2('Day 3', 'Medium', antDeadlift2, null, 0.6, 0.7, 0.8, 10, 8, 6, deadlift2, deadlift2Max, core4, 'Endurance', antSquat, 4, null, 0.65, 8, squat, squatMax, core5, 'Light', antDeadlift3, null, 0.55, 0.65, 0.75, 12, 9, 7, deadlift3, deadlift3Max, core6),
        day4: new DayA3Sets2('Day 4', 'Light', antBench2, antBench2Max, 0.55, 0.65, 0.75, 12, 9, 6, bench2, bench2Max, oblique4, 'Reps', antOhp, 5, antOhpMax, 0.75, 5, ohp, ohpMax, oblique5, 'Heavy', antBench3, antBench3Max, 0.65, 0.75, 0.85, 9, 7, 4, bench3, bench3Max, oblique6)
      }
    }

    const Wave3 = function (core1, core2, core3, core4, core5, core6, oblique1, oblique2,
      oblique3, oblique4, oblique5, oblique6, antSquat, antSquat2, antSquat3, squat, squatMax,
      squat2, squat2Max, squat3, squat3Max, antOhp, antOhpMax, antOhp2, antOhp2Max, antOhp3, antOhp3Max,
      ohp, ohpMax, ohp2, ohp2Max, ohp3, ohp3Max, antDeadlift, antDeadlift2, antDeadlift3, deadlift,
      deadliftMax, deadlift2, deadlift2Max, deadlift3, deadlift3Max, antBench, antBenchMax, antBench2,
      antBench2Max, antBench3, antBench3Max, bench, benchMax, bench2, bench2Max, bench3, bench3Max) {
      this.week1 = {
        day1: new DayAStatic2('Day 1', 'Heavy', antSquat2, null, 0.7, 0.8, 0.9, 8, 6, 2, squat2, squat2Max, core1, 'Speed', antDeadlift, 10, null, 0.65, 3, deadlift, deadliftMax, core2, 'Reps', antSquat3, 5, null, 0.8, 5, squat3, squat3Max, core3),
        day2: new DayA3Sets2('Day 2', 'Medium', antOhp2, antOhp2Max, 0.65, 0.75, 0.85, 9, 7, 4, ohp2, ohp2Max, oblique1, 'Endurance', antBench, 4, antBenchMax, 0.7, 8, bench, benchMax, oblique2, 'Heavy', antOhp3, antOhp3Max, 0.7, 0.8, 0.9, 8, 6, 2, ohp3, ohp3Max, oblique3),
        day3: new DayAStatic2('Day 3', 'Light', antDeadlift2, null, 0.6, 0.7, 0.8, 10, 8, 6, deadlift2, deadlift2Max, core4, 'Reps', antSquat, 5, null, 0.8, 5, squat, squatMax, core5, 'Endurance', antDeadlift3, 4, null, 0.7, 8, deadlift3, deadlift3Max, core6),
        day4: new DayAStatic2('Day 4', 'Heavy', antBench2, antBench2Max, 0.7, 0.8, 0.9, 8, 6, 2, bench2, bench2Max, oblique4, 'Speed', antOhp, 10, antOhpMax, 0.65, 3, ohp, ohpMax, oblique5, 'Reps', antBench3, 5, antBench3Max, 0.8, 5, bench3, bench3Max, oblique6)
      }
      this.week2 = {
        day1: new DayA3Sets2('Day 1', 'Medium', antSquat2, null, 0.65, 0.75, 0.85, 9, 7, 4, squat2, squat2Max, core1, 'Endurance', antDeadlift, 4, null, 0.7, 8, deadlift, deadliftMax, core2, 'Heavy', antSquat3, null, 0.7, 0.8, 0.9, 8, 6, 2, squat3, squat3Max, core3),
        day2: new DayAStatic2('Day 2', 'Light', antOhp2, antOhp2Max, 0.6, 0.7, 0.8, 10, 8, 6, ohp2, ohp2Max, oblique2, 'Reps', antBench, 5, antBenchMax, 0.8, 5, bench, benchMax, oblique1, 'Endurance', antOhp3, 4, antOhp3Max, 0.7, 8, ohp3, ohp3Max, oblique3),
        day3: new DayAStatic2('Day 3', 'Heavy', antDeadlift2, null, 0.7, 0.8, 0.9, 8, 6, 2, deadlift2, deadlift2Max, core4, 'Speed', antSquat, 10, null, 0.65, 3, squat, squatMax, core5, 'Reps', antDeadlift3, 5, null, 0.8, 5, deadlift3, deadlift3Max, core6),
        day4: new DayA3Sets2('Day 4', 'Medium', antBench2, antBench2Max, 0.65, 0.75, 0.85, 9, 7, 4, bench2, bench2Max, oblique4, 'Endurance', antOhp, 4, antOhpMax, 0.7, 8, ohp, ohpMax, oblique5, 'Light', antBench3, antBench3Max, 0.6, 0.7, 0.8, 10, 8, 6, bench3, bench3Max, oblique6)
      }

      this.week3 = {
        day1: new DayA3Sets2('Day 1', 'Light', antSquat2, null, 0.6, 0.7, 0.8, 10, 8, 6, squat2, squat2Max, core1, 'Reps', antDeadlift, 5, null, 0.8, 5, deadlift, deadliftMax, core2, 'Heavy', antSquat3, null, 0.7, 0.8, 0.9, 8, 6, 2, squat3, squat3Max, core3),
        day2: new DayAStatic2('Day 2', 'Heavy', antOhp2, antOhp2Max, 0.7, 0.8, 0.9, 8, 6, 2, ohp2, ohp2Max, oblique1, 'Speed', antBench, 10, antBenchMax, 0.65, 3, bench, benchMax, oblique2, 'Reps', antOhp3, 5, antOhp3Max, 0.8, 5, ohp3, ohp3Max, oblique3),
        day3: new DayA3Sets2('Day 3', 'Medium', antDeadlift2, null, 0.65, 0.75, 0.85, 9, 7, 4, deadlift2, deadlift2Max, core4, 'Endurance', antSquat, 4, null, 0.7, 8, squat, squatMax, core5, 'Light', antDeadlift3, null, 0.6, 0.7, 0.8, 10, 8, 6, deadlift3, deadlift3Max, core6),
        day4: new DayA3Sets2('Day 4', 'Light', antBench2, antBench2Max, 0.6, 0.7, 0.8, 10, 8, 6, bench2, bench2Max, oblique4, 'Reps', antOhp, 5, antOhpMax, 0.8, 5, ohp, ohpMax, oblique5, 'Heavy', antBench3, antBench3Max, 0.7, 0.8, 0.9, 8, 6, 2, bench3, bench3Max, oblique6)
      }
    }

    const Wave4 = function (core1, core2, core3, core4, core5, core6, oblique1, oblique2,
      oblique3, oblique4, oblique5, oblique6, antSquat, antSquat2, antSquat3, squat, squatMax,
      squat2, squat2Max, squat3, squat3Max, antOhp, antOhpMax, antOhp2, antOhp2Max, antOhp3, antOhp3Max,
      ohp, ohpMax, ohp2, ohp2Max, ohp3, ohp3Max, antDeadlift, antDeadlift2, antDeadlift3, deadlift,
      deadliftMax, deadlift2, deadlift2Max, deadlift3, deadlift3Max, antBench, antBenchMax, antBench2,
      antBench2Max, antBench3, antBench3Max, bench, benchMax, bench2, bench2Max, bench3, bench3Max) {
      this.week1 = {
        day1: new DayAStatic2('Day 1', 'Heavy', antSquat2, null, 0.75, 0.85, 0.95, 7, 4, 1, squat2, squat2Max, core1, 'Speed', antDeadlift, 10, null, 0.7, 3, deadlift, deadliftMax, core2, 'Reps', antSquat3, 5, null, 0.85, 5, squat3, squat3Max, core3),
        day2: new DayA3Sets2('Day 2', 'Medium', antOhp2, antOhp2Max, 0.7, 0.8, 0.9, 8, 6, 2, ohp2, ohp2Max, oblique1, 'Endurance', antBench, 4, antBenchMax, 0.75, 8, bench, benchMax, oblique2, 'Heavy', antOhp3, antOhp3Max, 0.75, 0.85, 0.95, 7, 4, 1, ohp3, ohp3Max, oblique3),
        day3: new DayAStatic2('Day 3', 'Light', antDeadlift2, null, 0.65, 0.75, 0.85, 9, 7, 4, deadlift2, deadlift2Max, core4, 'Reps', antSquat, 5, null, 0.85, 5, squat, squatMax, core5, 'Endurance', antDeadlift3, 4, null, 0.75, 8, deadlift3, deadlift3Max, core6),
        day4: new DayAStatic2('Day 4', 'Heavy', antBench2, antBench2Max, 0.75, 0.85, 0.95, 7, 4, 1, bench2, bench2Max, oblique4, 'Speed', antOhp, 10, antOhpMax, 0.7, 3, ohp, ohpMax, oblique5, 'Reps', antBench3, 5, antBench3Max, 0.85, 5, bench3, bench3Max, oblique6)
      }
      this.week2 = {
        day1: new DayA3Sets2('Day 1', 'Medium', antSquat2, null, 0.7, 0.8, 0.9, 8, 6, 2, squat2, squat2Max, core1, 'Endurance', antDeadlift, 4, null, 0.75, 8, deadlift, deadliftMax, core2, 'Heavy', antSquat3, null, 0.75, 0.85, 0.95, 7, 4, 1, squat3, squat3Max, core3),
        day2: new DayAStatic2('Day 2', 'Light', antOhp2, antOhp2Max, 0.65, 0.75, 0.85, 9, 7, 4, ohp2, ohp2Max, oblique1, 'Reps', antBench, 5, antBenchMax, 0.85, 5, bench, benchMax, oblique2, 'Endurance', antOhp3, 4, antOhp3Max, 0.75, 8, ohp3, ohp3Max, oblique3),
        day3: new DayAStatic2('Day 3', 'Heavy', antDeadlift2, null, 0.75, 0.85, 0.95, 7, 4, 1, deadlift2, deadlift2Max, core4, 'Speed', antSquat, 10, null, 0.7, 3, squat, squatMax, core5, 'Reps', antDeadlift3, 5, null, 0.85, 5, deadlift3, deadlift3Max, core6),
        day4: new DayA3Sets2('Day 4', 'Medium', antBench2, antBench2Max, 0.7, 0.8, 0.9, 8, 6, 2, bench2, bench2Max, oblique4, 'Endurance', antOhp, 4, antOhpMax, 0.75, 8, ohp, ohpMax, oblique5, 'Light', antBench3, antBench3Max, 0.65, 0.75, 0.85, 9, 7, 4, bench3, bench3Max, oblique6)
      }

      this.week3 = {
        day1: new DayA3Sets2('Day 1', 'Light', antSquat2, null, 0.65, 0.75, 0.85, 9, 7, 4, squat2, squat2Max, core1, 'Reps', antDeadlift, 5, null, 0.85, 5, deadlift, deadliftMax, core2, 'Heavy', antSquat3, null, 0.75, 0.85, 0.95, 7, 4, 1, squat3, squat3Max, core3),
        day2: new DayAStatic2('Day 2', 'Heavy', antOhp2, antOhp2Max, 0.75, 0.85, 0.95, 7, 4, 1, ohp2, ohp2Max, oblique1, 'Speed', antBench, 10, antBenchMax, 0.7, 3, bench, benchMax, oblique2, 'Reps', antOhp3, 5, antOhp3Max, 0.85, 5, ohp3, ohp3Max, oblique3),
        day3: new DayA3Sets2('Day 3', 'Medium', antDeadlift2, null, 0.7, 0.8, 0.9, 8, 6, 2, deadlift2, deadlift2Max, core4, 'Endurance', antSquat, 4, null, 0.75, 8, squat, squatMax, core5, 'Light', antDeadlift3, null, 0.65, 0.75, 0.85, 9, 7, 4, deadlift3, deadlift3Max, core6),
        day4: new DayA3Sets2('Day 4', 'Light', antBench2, antBench2Max, 0.65, 0.75, 0.85, 9, 7, 4, bench2, bench2Max, oblique4, 'Reps', antOhp, 5, antOhpMax, 0.85, 5, ohp, ohpMax, oblique5, 'Heavy', antBench3, antBench3Max, 0.75, 0.85, 0.95, 7, 4, 1, bench3, bench3Max, oblique6)
      }
    }

    // const routine2 = new Routine(input.routineName, input.core1, input.core2, input.core3, input.core4, input.core5, input.core6, input.oblique1, input.oblique2,
    //   input.oblique3, input.oblique4, input.oblique5, input.oblique6, input.antagSquatName, input.antagSquat2Name, input.antagSquat3Name, 'Back-Squat', oneRepMax(input.squatWeight, input.squatReps),
    //   input.squat2Name, oneRepMax(input.squat2Weight, input.squat2Reps), input.squat3Name, oneRepMax(input.squat3Weight, input.squat3Reps), input.antagOhpName, oneRepMax(input.antagOhpWeight, input.antagOhpReps), input.antagOhp2Name, oneRepMax(input.antagOhp2Weight, input.antagOhp2Reps), input.antagOhp3Name, oneRepMax(input.antagOhp3Weight, input.antagOhp3Reps),
    //   'Over-head Press', oneRepMax(input.ohpWeight, input.ohpReps), input.ohp2Name, oneRepMax(input.ohp2Weight, input.ohp2Reps), input.ohp3Name, oneRepMax(input.ohp3Weight, input.ohp3Reps), input.antagDeadliftName, input.antagDeadlift2Name, input.antagDeadlift3Name, 'Dead-lift',
    //   oneRepMax(input.deadliftWeight, input.deadliftReps), input.deadlift2Name, oneRepMax(input.deadlift2Weight, input.deadlift2Reps), input.deadlift3Name, oneRepMax(input.deadlift3Weight, input.deadlift3Reps), input.antagBenchName, oneRepMax(input.antagBenchWeight, input.antagBenchReps), input.antagBench2Name,
    //   oneRepMax(input.antagBench2Weight, input.antagBench2Reps), input.antagBench3Name, oneRepMax(input.antagBench3Weight, input.antagBench3Reps), 'Bench-press', oneRepMax(input.benchWeight, input.benchReps), input.bench2Name, oneRepMax(input.bench2Weight, input.bench2Reps), input.bench3Name, oneRepMax(input.bench3Weight, input.bench3Reps)
    // )

    const Routine = function (title, core1, core2, core3, core4, core5, core6, oblique1, oblique2,
      oblique3, oblique4, oblique5, oblique6, antSquat, antSquat2, antSquat3, squat, squatMax,
      squat2, squat2Max, squat3, squat3Max, antOhp, antOhpMax, antOhp2, antOhp2Max, antOhp3, antOhp3Max,
      ohp, ohpMax, ohp2, ohp2Max, ohp3, ohp3Max, antDeadlift, antDeadlift2, antDeadlift3, deadlift,
      deadliftMax, deadlift2, deadlift2Max, deadlift3, deadlift3Max, antBench, antBenchMax, antBench2,
      antBench2Max, antBench3, antBench3Max, bench, benchMax, bench2, bench2Max, bench3, bench3Max) {
      this.title = title
      this.wave1 = new Wave1(core1, core2, core3, core4, core5, core6, oblique1, oblique2,
        oblique3, oblique4, oblique5, oblique6, antSquat, antSquat2, antSquat3, squat, squatMax,
        squat2, squat2Max, squat3, squat3Max, antOhp, antOhpMax, antOhp2, antOhp2Max, antOhp3, antOhp3Max,
        ohp, ohpMax, ohp2, ohp2Max, ohp3, ohp3Max, antDeadlift, antDeadlift2, antDeadlift3, deadlift,
        deadliftMax, deadlift2, deadlift2Max, deadlift3, deadlift3Max, antBench, antBenchMax, antBench2,
        antBench2Max, antBench3, antBench3Max, bench, benchMax, bench2, bench2Max, bench3, bench3Max)
      this.wave2 = new Wave2(core1, core2, core3, core4, core5, core6, oblique1, oblique2,
        oblique3, oblique4, oblique5, oblique6, antSquat, antSquat2, antSquat3, squat, squatMax,
        squat2, squat2Max, squat3, squat3Max, antOhp, antOhpMax, antOhp2, antOhp2Max, antOhp3, antOhp3Max,
        ohp, ohpMax, ohp2, ohp2Max, ohp3, ohp3Max, antDeadlift, antDeadlift2, antDeadlift3, deadlift,
        deadliftMax, deadlift2, deadlift2Max, deadlift3, deadlift3Max, antBench, antBenchMax, antBench2,
        antBench2Max, antBench3, antBench3Max, bench, benchMax, bench2, bench2Max, bench3, bench3Max)
      this.wave3 = new Wave3(core1, core2, core3, core4, core5, core6, oblique1, oblique2,
        oblique3, oblique4, oblique5, oblique6, antSquat, antSquat2, antSquat3, squat, squatMax,
        squat2, squat2Max, squat3, squat3Max, antOhp, antOhpMax, antOhp2, antOhp2Max, antOhp3, antOhp3Max,
        ohp, ohpMax, ohp2, ohp2Max, ohp3, ohp3Max, antDeadlift, antDeadlift2, antDeadlift3, deadlift,
        deadliftMax, deadlift2, deadlift2Max, deadlift3, deadlift3Max, antBench, antBenchMax, antBench2,
        antBench2Max, antBench3, antBench3Max, bench, benchMax, bench2, bench2Max, bench3, bench3Max)
      this.wave4 = new Wave4(core1, core2, core3, core4, core5, core6, oblique1, oblique2,
        oblique3, oblique4, oblique5, oblique6, antSquat, antSquat2, antSquat3, squat, squatMax,
        squat2, squat2Max, squat3, squat3Max, antOhp, antOhpMax, antOhp2, antOhp2Max, antOhp3, antOhp3Max,
        ohp, ohpMax, ohp2, ohp2Max, ohp3, ohp3Max, antDeadlift, antDeadlift2, antDeadlift3, deadlift,
        deadliftMax, deadlift2, deadlift2Max, deadlift3, deadlift3Max, antBench, antBenchMax, antBench2,
        antBench2Max, antBench3, antBench3Max, bench, benchMax, bench2, bench2Max, bench3, bench3Max)
    }

    const routineGenerator = () => {
      const routines = []
      this.state.inputs.forEach(input => {
        routines.push(new Routine(input.routineName, input.core1, input.core2, input.core3, input.core4, input.core5, input.core6, input.oblique1, input.oblique2,
          input.oblique3, input.oblique4, input.oblique5, input.oblique6, input.antagSquatName, input.antagSquat2Name, input.antagSquat3Name, 'Back-Squat', oneRepMax(parseInt(input.squatWeight, 10), parseInt(input.squatReps, 10)),
          input.squat2Name, oneRepMax(input.squat2Weight, input.squat2Reps), input.squat3Name, oneRepMax(input.squat3Weight, input.squat3Reps), input.antagOhpName, oneRepMax(input.antagOhpWeight, input.antagOhpReps), input.antagOhp2Name, oneRepMax(input.antagOhp2Weight, input.antagOhp2Reps), input.antagOhp3Name, oneRepMax(input.antagOhp3Weight, input.antagOhp3Reps),
          'Over-head Press', oneRepMax(input.ohpWeight, input.ohpReps), input.ohp2Name, oneRepMax(input.ohp2Weight, input.ohp2Reps), input.ohp3Name, oneRepMax(input.ohp3Weight, input.ohp3Reps), input.antagDeadliftName, input.antagDeadlift2Name, input.antagDeadlift3Name, 'Dead-lift',
          oneRepMax(input.deadliftWeight, input.deadliftReps), input.deadlift2Name, oneRepMax(input.deadlift2Weight, input.deadlift2Reps), input.deadlift3Name, oneRepMax(input.deadlift3Weight, input.deadlift3Reps), input.antagBenchName, oneRepMax(input.antagBenchWeight, input.antagBenchReps), input.antagBench2Name,
          oneRepMax(input.antagBench2Weight, input.antagBench2Reps), input.antagBench3Name, oneRepMax(input.antagBench3Weight, input.antagBench3Reps), 'Bench-press', oneRepMax(input.benchWeight, input.benchReps), input.bench2Name, oneRepMax(input.bench2Weight, input.bench2Reps), input.bench3Name, oneRepMax(input.bench3Weight, input.bench3Reps)))
      })
      return routines
    }

    // const routine1 = new Routine('Routine 1', 'situp', 'v-up', 'leg-raises', 'toe-touch-crunch', 'plank', 'side-plank', 'air bike', 'russian twist',
    //   'barbell twist', 'landmine twist', 'roman chair', 'wood-chopper', 'prisoner-squat', 'jump-squat', 'box-jump', 'back-squat', 300,
    //   'front-squat', oneRepMax(225, 8), 'lunge', 225, 'chin-up', 250, 'wid-grip-chin-up', 225, 'high-row', 115,
    //   'over-head-press', 175, 'z-press', 125, 'landmine-press', 260, 'kb swing', 'snatch', 'glute bridge', 'Deadlfit',
    //   375, 'Romanian Dl', 350, 'pause dl', 325, 'barbell row', 175, 'dumbbell row',
    //   90, 'bicep curls', 120, 'Bench press', 275, 'Incline bench', 250, 'tricp extensions', 100)
    //
    // const routine2 = new Routine(input.routineName, input.core1, input.core2, input.core3, input.core4, input.core5, input.core6, input.oblique1, input.oblique2,
    //   input.oblique3, input.oblique4, input.oblique5, input.oblique6, input.antagSquatName, input.antagSquat2Name, input.antagSquat3Name, 'Back-Squat', oneRepMax(parseInt(input.squatWeight, 10), parseInt(input.squatReps, 10)),
    //   input.squat2Name, oneRepMax(input.squat2Weight, input.squat2Reps), input.squat3Name, oneRepMax(input.squat3Weight, input.squat3Reps), input.antagOhpName, oneRepMax(input.antagOhpWeight, input.antagOhpReps), input.antagOhp2Name, oneRepMax(input.antagOhp2Weight, input.antagOhp2Reps), input.antagOhp3Name, oneRepMax(input.antagOhp3Weight, input.antagOhp3Reps),
    //   'Over-head Press', oneRepMax(input.ohpWeight, input.ohpReps), input.ohp2Name, oneRepMax(input.ohp2Weight, input.ohp2Reps), input.ohp3Name, oneRepMax(input.ohp3Weight, input.ohp3Reps), input.antagDeadliftName, input.antagDeadlift2Name, input.antagDeadlift3Name, 'Dead-lift',
    //   oneRepMax(input.deadliftWeight, input.deadliftReps), input.deadlift2Name, oneRepMax(input.deadlift2Weight, input.deadlift2Reps), input.deadlift3Name, oneRepMax(input.deadlift3Weight, input.deadlift3Reps), input.antagBenchName, oneRepMax(input.antagBenchWeight, input.antagBenchReps), input.antagBench2Name,
    //   oneRepMax(input.antagBench2Weight, input.antagBench2Reps), input.antagBench3Name, oneRepMax(input.antagBench3Weight, input.antagBench3Reps), 'Bench-press', oneRepMax(input.benchWeight, input.benchReps), input.bench2Name, oneRepMax(input.bench2Weight, input.bench2Reps), input.bench3Name, oneRepMax(input.bench3Weight, input.bench3Reps)
    // )

    // const paramsArray= ['Routine 1', 'situp', 'v-up', 'leg-raises', 'toe-touch-crunch', 'plank', 'side-plank', 'air bike', 'russian twist',
    //   'barbell twist', 'landmine twist', 'roman chair', 'wood-chopper', 'prisoner-squat', 'jump-squat', 'box-jump', 'back-squat', 300,
    //   'front-squat', 275, 'lunge', 225, 'chin-up', 250, 'wid-grip-chin-up', 225, 'high-row', 115,
    //   'over-head-press', 175, 'z-press', 125, 'landmine-press', 260, 'kb swing', 'snatch', 'glute bridge', 'Deadlfit',
    //   375, 'Romanian Dl', 350, 'pause dl', 325, 'barbell row', 175, 'dumbbell row',
    //   90, 'bicep curls', 120, 'Bench press', 275, 'Incline bench', 250, 'tricp extensions', 100]
    //
    // const params2Array = ['title', 'core1', 'core2', 'core3', 'core4', 'core5', 'core6', 'oblique1', 'oblique2',
    //   'oblique3', 'oblique4', 'oblique5', 'oblique6', 'antSquat', 'antSquat2', 'antSquat3', 'squat', 'squatMax',
    //   'squat2', 'squat2Max', 'squat3', 'squat3Max', 'antOhp', 'antOhpMax', 'antOhp2', 'antOhp2Max', 'antOhp3', 'antOhp3Max',
    //   'ohp', 'ohpMax', 'ohp2', 'ohp2Max', 'ohp3', 'ohp3Max', 'antDeadlift', 'antDeadlift2', 'antDeadlift3', 'deadlift',
    //   'deadliftMax', 'deadlift2', 'deadlift2Max', 'deadlift3', 'deadlift3Max', 'antBench', 'antBenchMax', 'antBench2',
    //   'antBench2Max', 'antBench3', 'antBench3Max', 'bench', 'benchMax', 'bench2', 'bench2Max', 'bench3', 'bench3Max']
    //
    // const paramslength = function (array) {
    //   return array.length
    // }
    // const newWave1 = new Wave1('situp', 'v-up', 'leg-raises', 'toe-touch-crunch', 'plank', 'side-plank', 'air bike', 'russian twist',
    //   'barbell twist', 'landmine twist', 'roman chair', 'wood-chopper', 'prisoner-squat', 'jump-squat', 'box-jump', 'back-squat', 300,
    //   'front-squat', 275, 'lunge', 225, 'chin-up', 250, 'wid-grip-chin-up', 225, 'high-row', 115,
    //   'over-head-press', 175, 'z-press', 125, 'landmine-press', 260, 'kb swing', 'snatch', 'glute bridge', 'Deadlfit',
    //   375, 'Romanian Dl', 350, 'pause dl', 325, 'barbell row', 175, 'dumbbell row',
    //   90, 'bicep curls', 120, 'Bench press', 275, 'Incline bench', 250, 'tricp extensions', 100)
    const idList = []
    const inputIds = () => {
      this.state.inputs.forEach(input => {
        idList.push(input.id)
        return idList
      })
    }
    inputIds()
    const completedRoutines = routineGenerator()
    if (!this.state.loaded) {
      return (
        <div style=
          {{ display: 'flex',
            justifyContent: 'center',
            marginTop: '2em',
            alignItems: 'center'
          }}>
          <PropagateLoader
            css={override}
            sizeUnit={'px'}
            size={20}
            color={'#54B240'}
            loading={this.state.loading}
          />
        </div>
      )
    }
    if (this.state.loaded && (this.state.inputs.length === 0)) {
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
    } else {
      return (
        <Routines idList={idList} routineList= {completedRoutines} user= {this.props.user}
        />
      )
    }
  }
}

export default withRouter(RoutineLogic)
