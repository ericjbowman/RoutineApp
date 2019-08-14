import React, { Component } from 'react'
import Form1 from './form/Form1'
import { Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from './apiConfig'
import { withSnackbar } from 'notistack'
import messages from './auth/messages'

class Input extends Component {
  constructor (props) {
    super(props)
    this.state = {
      updated: true,
      autofilled: {
        antagOhpName: false,
        antagBenchName: false,
        squat2Name: false,
        antagOhp2Name: false,
        ohp2Name: false,
        deadlift2Name: false,
        antagBench2Name: false,
        bench2Name: false,
        squat3Name: false,
        antagOhp3Name: false,
        ohp3Name: false,
        deadlift3Name: false,
        antagBench3Name: false,
        bench3Name: false,

        antagOhpWeight: false,
        antagBenchWeight: false,
        squat2Weight: false,
        antagOhp2Weight: false,
        ohp2Weight: false,
        deadlift2Weight: false,
        antagBench2Weight: false,
        bench2Weight: false,
        squat3Weight: false,
        antagOhp3Weight: false,
        ohp3Weight: false,
        deadlift3Weight: false,
        antagBench3Weight: false,
        bench3Weight: false,

        antagOhpReps: false,
        antagBenchReps: false,
        squat2Reps: false,
        antagOhp2Reps: false,
        ohp2Reps: false,
        deadlift2Reps: false,
        antagBench2Reps: false,
        bench2Reps: false,
        squat3Reps: false,
        antagOhp3Reps: false,
        ohp3Reps: false,
        deadlift3Reps: false,
        antagBench3Reps: false,
        bench3Reps: false
      },
      input: {
        routineName: '',

        antagSquatName: 'Box Jumps',
        squatWeight: null,
        squatReps: null,

        antagOhpName: '',
        antagOhpWeight: null,
        antagOhpReps: null,
        ohpWeight: null,
        ohpReps: null,

        antagDeadliftName: 'Kettlebell Swings',
        deadliftWeight: null,
        deadliftReps: null,

        antagBenchName: '',
        antagBenchWeight: null,
        antagBenchReps: null,
        benchWeight: null,
        benchReps: null,

        antagSquat2Name: 'Squat Jumps',
        squat2Name: '',
        squat2Weight: null,
        squat2Reps: null,

        antagOhp2Name: '',
        antagOhp2Weight: null,
        antagOhp2Reps: null,
        ohp2Name: '',
        ohp2Weight: null,
        ohp2Reps: null,

        antagDeadlift2Name: 'Dumbbell Snatch',
        deadlift2Name: '',
        deadlift2Weight: null,
        deadlift2Reps: null,

        antagBench2Name: '',
        antagBench2Weight: null,
        antagBench2Reps: null,
        bench2Name: '',
        bench2Weight: null,
        bench2Reps: null,

        antagSquat3Name: 'Lunge Hops',
        squat3Name: '',
        squat3Weight: null,
        squat3Reps: null,

        antagOhp3Name: '',
        antagOhp3Weight: null,
        antagOhp3Reps: null,
        ohp3Name: '',
        ohp3Weight: null,
        ohp3Reps: null,

        antagDeadlift3Name: 'Burpees',
        deadlift3Name: '',
        deadlift3Weight: null,
        deadlift3Reps: null,

        antagBench3Name: '',
        antagBench3Weight: null,
        antagBench3Reps: null,
        bench3Name: '',
        bench3Weight: null,
        bench3Reps: null,

        core1: 'Hanging Leg-Raise',
        core2: 'V-up',
        core3: 'Plank',
        core4: 'Ab-wheel Roll-out',
        core5: 'Toe-touch Crunch',
        core6: 'Decline-bench Sit-up',

        oblique1: 'Landmine Twist',
        oblique2: 'Side Plank Hip Dips',
        oblique3: 'Woodchopper',
        oblique4: 'Air Bicycle',
        oblique5: 'Windshield Wipers',
        oblique6: 'Single-arm Farmer Walk',
        day1: '',
        created: ''
      },
      isRoutineCreated: false,
      autoFill: true
    }
  }
  // Function that sets name, weight, and reps to true, preventing weight/reps
  // from changing after user has specified a number

  updateAutofilled = (name, weight, reps) => {
    const updatedField = {
      [name]: true,
      [weight]: true,
      [reps]: true
    }
    const editedInput = Object.assign(this.state.autofilled, updatedField)
    this.setState({ autofilled: editedInput })
  }

  componentDidMount () {
    if (this.props.isEdit) {
      axios({
        url: (`${apiUrl}/inputs/${this.props.location.state.id}`),
        method: 'GET',
        headers: {
          'Authorization': `Token token=${this.props.user.token}`
        }
      })
        .then(res => this.setState({ input: res.data.input }))
        // .catch(err => console.log(err))
    }
  }

  componentDidUpdate () {
    const ratios = (inputName, inputWeight, name, weight) => {
      if (!this.state.autofilled[name] && !this.state.autofilled[weight] && !this.state.updated) {
        if (inputName === 'Front Squat') {
          return Math.floor(this.state.input.squatWeight * 0.85)
        } else if (inputName === 'Barbell Lunge') {
          return Math.floor(this.state.input.squatWeight * 0.60)
        } else if (inputName === 'Box Squat') {
          return this.state.input.squatWeight
        } else if (inputName === 'Pause Squat') {
          return Math.floor(this.state.input.squatWeight * 0.70)
        } else if (inputName === 'Bulgarian Split Squat') {
          return Math.floor(this.state.input.squatWeight * 0.50)
        } else if (inputName === 'Incline Bench Press') {
          return Math.floor(this.state.input.benchWeight * 0.88)
        } else if (inputName === 'Weighted Dip') {
          return Math.floor(this.state.input.benchWeight * 1.3)
        } else if (inputName === 'Close-grip Bench Press') {
          return Math.floor(this.state.input.benchWeight * 0.9)
        } else if (inputName === 'Dumbbell Fly') {
          return Math.floor(this.state.input.benchWeight * 0.25)
        } else if (inputName === 'Snatch-grip Deadlift') {
          return Math.floor(this.state.input.deadliftWeight * 0.75)
        } else if (inputName === 'Hex-bar Deadlift') {
          return Math.floor(this.state.input.deadliftWeight * 1.10)
        } else if (inputName === 'Romanian Deadlift') {
          return Math.floor(this.state.input.deadliftWeight * 0.75)
        } else if (inputName === 'Pause Deadlift') {
          return Math.floor(this.state.input.deadliftWeight * 0.6)
        } else if (inputName === 'Dumbbell Shoulder Press') {
          return Math.floor(this.state.input.ohpWeight * 0.5)
        } else if (inputName === 'Landmine Single-arm Press') {
          return Math.floor(this.state.input.ohpWeight * 0.6)
        } else if (inputName === 'Z Press') {
          return Math.floor(this.state.input.ohpWeight * 0.5)
        } else if (inputName === 'Trap-bar Press') {
          return Math.floor(this.state.input.ohpWeight * 0.9)
        } else if (inputName === 'Supinated Chin-up') {
          return Math.floor(this.state.input.benchWeight * 0.9)
        } else if (inputName === 'Wide-grip Pull-up') {
          return Math.floor(this.state.input.benchWeight * 0.85)
        } else if (inputName === 'Face Pull') {
          return Math.floor(this.state.input.benchWeight * 0.4)
        } else if (inputName === 'Lat Pull-down') {
          return Math.floor(this.state.input.benchWeight * 0.83)
        } else if (inputName === 'Barbell Row') {
          return Math.floor(this.state.input.benchWeight * 0.8)
        } else if (inputName === 'Dumbbell Row') {
          return Math.floor(this.state.input.benchWeight * 0.4)
        } else if (inputName === 'Seated Cable Row') {
          return Math.floor(this.state.input.benchWeight * 0.87)
        } else if (inputName === 'Pendlay Row') {
          return Math.floor(this.state.input.benchWeight * 0.85)
        }
      } else {
        return inputWeight
      }
    }

    const isName = (inputName, inputReps, name, weight, reps) => {
      if (!this.state.autofilled[name] && !this.state.autofilled[weight] && !this.state.autofilled[reps]) {
        this.updateAutofilled(name, weight, reps)
        return inputReps
      } else {
        return this.state.input[reps]
      }
    }
    const { input } = this.state
    const autoMax = {
      squat2Weight: ratios(input.squat2Name, input.squat2Weight, 'squat2Name', 'squat2Weight'),
      squat2Reps: isName(input.squat2Name, input.squatReps, 'squat2Name', 'squat2Weight', 'squat2Reps'),
      squat3Weight: ratios(input.squat3Name, input.squat3Weight, 'squat3Name', 'squat3Weight'),
      squat3Reps: isName(input.squat3Name, input.squatReps, 'squat3Name', 'squat3Weight', 'squat3Reps'),
      bench2Weight: ratios(input.bench2Name, input.bench2Weight, 'bench2Name', 'bench2Weight'),
      bench2Reps: isName(input.bench2Name, input.benchReps, 'bench2Name', 'bench2Weight', 'bench2Reps'),
      bench3Weight: ratios(input.bench3Name, input.bench3Weight, 'bench3Name', 'bench3Weight'),
      bench3Reps: isName(input.bench3Name, input.benchReps, 'bench3Name', 'bench3Weight', 'bench3Reps'),
      deadlift2Weight: ratios(input.deadlift2Name, input.deadlift2Weight, 'deadlift2Name', 'deadlift2Weight'),
      deadlift2Reps: isName(input.deadlift2Name, input.deadliftReps, 'deadlift2Name', 'deadlift2Weight', 'deadlift2Reps'),
      deadlift3Weight: ratios(input.deadlift3Name, input.deadlift3Weight, 'deadlift3Name', 'deadlift3Weight'),
      deadlift3Reps: isName(input.deadlift3Name, input.deadliftReps, 'deadlift3Name', 'deadlift3Weight', 'deadlift3Reps'),
      ohp2Weight: ratios(input.ohp2Name, input.ohp2Weight, 'ohp2Name', 'ohp2Weight'),
      ohp2Reps: isName(input.ohp2Name, input.ohpReps, 'ohp2Name', 'ohp2Weight', 'ohp2Reps'),
      ohp3Weight: ratios(input.ohp3Name, input.ohp3Weight, 'ohp3Name', 'ohp3Weight'),
      ohp3Reps: isName(input.ohp3Name, input.ohpReps, 'ohp3Name', 'ohp3Weight', 'ohp3Reps'),
      antagBenchWeight: ratios(input.antagBenchName, input.antagBenchWeight, 'antagBenchName', 'antagBenchWeight'),
      antagBenchReps: isName(input.antagBenchName, input.benchReps, 'antagBenchName', 'antagBenchWeight', 'antagBenchReps'),
      antagBench2Weight: ratios(input.antagBench2Name, input.antagBench2Weight, 'antagBench2Name', 'antagBench2Weight'),
      antagBench2Reps: isName(input.antagBench2Name, input.benchReps, 'antagBench2Name', 'antagBench2Weight', 'antagBench2Reps'),
      antagBench3Weight: ratios(input.antagBench3Name, input.antagBench3Weight, 'antagBench3Name', 'antagBench3Weight'),
      antagBench3Reps: isName(input.antagBench3Name, input.benchReps, 'antagBench3Name', 'antagBench3Weight', 'antagBench3Reps'),
      antagOhpWeight: ratios(input.antagOhpName, input.antagOhpWeight, 'antagOhpName', 'antagOhpWeight'),
      antagOhpReps: isName(input.antagOhpName, input.benchReps, 'antagOhpName', 'antagOhpWeight', 'antagOhpReps'),
      antagOhp2Weight: ratios(input.antagOhp2Name, input.antagOhp2Weight, 'antagOhp2Name', 'antagOhp2Weight'),
      antagOhp2Reps: isName(input.antagOhp2Name, input.benchReps, 'antagOhp2Name', 'antagOhp2Weight', 'antagOhp2Reps'),
      antagOhp3Weight: ratios(input.antagOhp3Name, input.antagOhp3Weight, 'antagOhp3Name', 'antagOhp3Weight'),
      antagOhp3Reps: isName(input.antagOhp3Name, input.benchReps, 'antagOhp3Name', 'antagOhp3Weight', 'antagOhp3Reps')

    }
    if (this.state.autoFill && !this.state.updated) {
      const autoMaxInput = Object.assign(this.state.input, autoMax)
      this.setState({ input: autoMaxInput, updated: true })
    }
  }

  handleChange = event => {
    const updatedField = {
      [event.target.name]: event.target.value
    }
    // By setting this property to true, autoMax is prevented from automatically
    // setting the weight/reps after user has modified them
    const updatedAutofilled = {
      [event.target.name]: true
    }
    const editedInput = Object.assign(this.state.input, updatedField)
    const editedAutofilled = Object.assign(this.state.autofilled, updatedAutofilled)
    this.setState({ input: editedInput, autofilled: editedAutofilled })
  }

  handleDate = date => {
    const updatedField = {
      created: date
    }
    const editedInput = Object.assign(this.state.input, updatedField)
    this.setState({ input: editedInput })
  }

  // Name, weight, and reps are set to false if user selects a new exercise, triggering
  // the autoMax function at the end of componentDidUpdate to automatically set weight/reps
  handleSelect = (key, value, weight, reps) => {
    const updatedField = {
      [key]: value
    }
    const updatedAutofilled = {
      [key]: false,
      [weight]: false,
      [reps]: false
    }
    const editedInput = Object.assign(this.state.input, updatedField)
    const editedAutofilled = Object.assign(this.state.autofilled, updatedAutofilled)
    this.setState({ input: editedInput, updated: false, autofilled: editedAutofilled })
  }

  handleSubmit = event => {
    event.preventDefault()
    if (!this.props.isEdit) {
      axios({
        url: (`${apiUrl}/inputs`),
        method: 'POST',
        headers: {
          'Authorization': `Token token=${this.props.user.token}`
        },
        data: {
          input: this.state.input
        }
      })
        .then(res => this.setState({
          isRoutineCreated: true
        }))
        .then(() => this.props.enqueueSnackbar(messages.routineCreateSuccess, { variant: 'success', autoHideDuration: 2000 }))
        .catch(() => this.props.enqueueSnackbar(messages.routineCreateFailure, { variant: 'error', autoHideDuration: 2000 }))
    } else if (this.props.isEdit) {
      axios({
        url: (`${apiUrl}/inputs/${this.props.location.state.id}`),
        method: 'PATCH',
        headers: {
          'Authorization': `Token token=${this.props.user.token}`
        },
        data: {
          input: this.state.input
        }
      })
        .then(res => this.setState({
          isRoutineEdited: true
        }))
        .then(() => this.props.enqueueSnackbar(messages.routineEditSuccess, { variant: 'success', autoHideDuration: 2000 }))
        .catch(() => this.props.enqueueSnackbar(messages.routineEditFailure, { variant: 'error', autoHideDuration: 2000 }))
        .catch(console.error)
    }
  }

  toggleAutoFill = event => {
    this.setState(prevState => ({
      autoFill: !prevState.autoFill
    }))
  }

  render () {
    const { handleChange, handleSelect, handleDate, handleSubmit, toggleAutoFill } = this
    const { input, isRoutineCreated, isRoutineEdited } = this.state

    if (isRoutineCreated || isRoutineEdited) {
      return <Redirect to='/routines'/>
    }

    return (
      <div>
        <Form1
          input={input}
          handleChange={handleChange}
          handleDate={handleDate}
          handleSelect={handleSelect}
          handleSubmit={handleSubmit}
          toggleAutoFill={toggleAutoFill}
          cancelPath="/"
          isEdit={this.props.isEdit}
        />
      </div>
    )
  }
}

export default withSnackbar(withRouter(Input))
