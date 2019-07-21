import React, { Component } from 'react'
import InputForm from './InputForm'
import { Redirect } from 'react-router-dom'
import RoutineLogic from './RoutineLogic'
// import axios from 'axios'
// import apiUrl from '../../apiConfig'
class InputCreate extends Component {
  constructor (props) {
    super(props)
    this.state = {
      input: {
        routineName: '',

        antagSquatName: '',
        squatWeight: null,
        squatReps: null,

        antagOhpName: '',
        antagOhpWeight: null,
        antagOhpReps: null,
        ohpWeight: null,
        ohpReps: null,

        antagDeadliftName: '',
        deadliftWeight: null,
        deadliftReps: null,

        antagBenchName: '',
        antagBenchWeight: null,
        antagBenchReps: null,
        benchWeight: null,
        benchReps: null,

        antagSquat2Name: '',
        squat2Name: '',
        squat2Weight: null,
        squat2Reps: null,

        antagOhp2Name: '',
        antagOhp2Weight: null,
        antagOhp2Reps: null,
        ohp2Name: '',
        ohp2Weight: null,
        ohp2Reps: null,

        antagDeadlift2Name: '',
        deadlift2Name: '',
        deadlift2Weight: null,
        deadlift2Reps: null,

        antagBench2Name: '',
        antagBench2Weight: null,
        antagBench2Reps: null,
        bench2Name: '',
        bench2Weight: null,
        bench2Reps: null,

        antagSquat3Name: '',
        squat3Name: '',
        squat3Weight: null,
        squat3Reps: null,

        antagOhp3Name: '',
        antagOhp3Weight: null,
        antagOhp3Reps: null,
        ohp3Name: '',
        ohp3Weight: null,
        ohp3Reps: null,

        antagDeadlift3Name: '',
        deadlift3Name: '',
        deadlift3Weight: null,
        deadlift3Reps: null,

        antagBench3Name: '',
        antagBench3Weight: null,
        antagBench3Reps: null,
        bench3Name: '',
        bench3Weight: null,
        bench3Reps: null,

        core1: '',
        core2: '',
        core3: '',
        core4: '',
        core5: '',
        core6: '',

        oblique1: '',
        oblique2: '',
        oblique3: '',
        oblique4: '',
        oblique5: '',
        oblique6: ''
      },
      isRoutineCreated: false,
      autoFill: false
    }
  }

  handleChange = event => {
    // create an object with updated field
    const updatedField = {
      [event.target.name]: event.target.value
    }
    // use object to create updated state object
    const editedInput = Object.assign(this.state.input, updatedField)
    // finally setState with updates object

    const ratios = (name) => {
      if (name === 'Front Squat') {
        return Math.floor(this.state.input.squatWeight * 0.85)
      } else if (name === 'Incline Bench Press') {
        return Math.floor(this.state.input.benchWeight * 0.8)
      } else if (name === 'Weighted Dip') {
        return Math.floor(this.state.input.benchWeight * 1.05)
      } else if (name === 'Close-grip Bench Press') {
        return Math.floor(this.state.input.benchWeight * 0.9)
      } else if (name === 'Push press') {
        return Math.floor(this.state.input.benchWeight * 0.85)
      } else if (name === 'Snatch-grip Deadlift') {
        return Math.floor(this.state.input.deadliftWeight * 0.75)
      } else if (name === 'Hex-bar Deadlift') {
        return Math.floor(this.state.input.deadliftWeight * 1.10)
      }
    }
    const autoMax = {
      squat2Weight: ratios(this.state.input.squat2Name),
      squat2Reps: this.state.input.squatReps,
      bench2Weight: ratios(this.state.input.bench2Name),
      bench2Reps: this.state.input.benchReps,
      deadlift2Weight: ratios(this.state.input.deadlift2Name),
      deadlift2Reps: this.state.input.deadliftReps
    }
    if (this.state.autoFill === true) {
      const autoMaxInput = Object.assign(this.state.input, autoMax)
      this.setState({ input: autoMaxInput })
      this.setState({ input: editedInput })
    } else {
      this.setState({ input: editedInput })
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state)
    this.setState({ isRoutineCreated: true })

  //   axios.post(`${apiUrl}/movies`, {
  //     movie: this.state.movie
  //   })
  //     .then(res => this.setState({
  //       createdMovieId: res.data.movie.id
  //     }))
  //     .catch(console.error)
  }

  toggleAutoFill = event => {
    this.setState(prevState => ({
      autoFill: !prevState.autoFill
    }))
  }

  render () {
    const { handleChange, handleSubmit, toggleAutoFill } = this
    const { input, isRoutineCreated } = this.state
    console.log('Input state is', this.state)

    if (isRoutineCreated) {
      return <Redirect to='/routines'/>
    }
    return (
      <div>
        <h4>Input your Max/Choose exercises</h4>
        <InputForm
          input={input}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          toggleAutoFill={toggleAutoFill}
          cancelPath="/"
        />
        <RoutineLogic
          input={input}
        />
      </div>
    )
  }
}

export default InputCreate
