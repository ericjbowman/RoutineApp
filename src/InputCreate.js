import React, { Component } from 'react'
import InputForm from './InputForm'
import { Redirect } from 'react-router-dom'
// import axios from 'axios'
// import apiUrl from '../../apiConfig'
class InputCreate extends Component {
  constructor (props) {
    super(props)
    this.state = {
      input: {
        routineName: '',

        squatWeight: null,
        squatReps: null,

        ohpWeight: null,
        ohpReps: null,

        deadliftWeight: null,
        deadliftReps: null,

        benchWeight: null,
        benchReps: null,

        squat2Name: '',
        squat2Weight: null,
        squat2Reps: null,

        ohp2Name: '',
        ohp2Weight: null,
        ohp2Reps: null,

        deadlift2Name: '',
        deadlift2Weight: null,
        deadlift2Reps: null,

        bench2Name: '',
        bench2Weight: null,
        bench2Reps: null,

        squat3Name: '',
        squat3Weight: null,
        squat3Reps: null,

        ohp3Name: '',
        ohp3Weight: null,
        ohp3Reps: null,

        deadlift3Name: '',
        deadlift3Weight: null,
        deadlift3Reps: null,

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
      autoFill: true
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
    const autoMax = {
      squat2Weight: (this.state.input.squatWeight * 0.9),
      squat2Reps: this.state.input.squatReps
    }
    if (this.state.autoFill === true) {
      const autoMaxInput = Object.assign(this.state.input, autoMax)
      this.setState({ input: autoMaxInput })
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

  render () {
    const { handleChange, handleSubmit } = this
    const { input, isRoutineCreated } = this.state
    console.log({ input })

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
          cancelPath="/"
        />
      </div>
    )
  }
}

export default InputCreate
