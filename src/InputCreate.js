import React, { Component } from 'react'
import Form1 from './Form1'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from './apiConfig'
import { withSnackbar } from 'notistack'

class InputCreate extends Component {
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
        bench3Weight: false
      },
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
        oblique6: '',
        day1: '',
        created: ''
      },
      isRoutineCreated: false,
      autoFill: true
    }
  }
  // handleSelect = (obj) => {
  //   const updatedField = {
  //     oblique6: {obj.value}
  //   }
  // }
  updateAutofilled = (name, weight) => {
    const updatedField = {
      [name]: true,
      [weight]: true
    }
    const editedInput = Object.assign(this.state.autofilled, updatedField)
    this.setState({ autofilled: editedInput })
  }

  componentDidUpdate () {
    console.log('from cdidupdate', this.state)
    const ratios = (inputName, inputWeight, name, weight) => {
      if (!this.state.autofilled[name] && !this.state.autofilled[weight] && !this.state.updated) {
        // console.log('name', name, 'weight', weight)
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
          return Math.floor(this.state.input.benchWeight * 0.8)
        } else if (inputName === 'Weighted Dip') {
          return Math.floor(this.state.input.benchWeight * 1.05)
        } else if (inputName === 'Close-grip Bench Press') {
          return Math.floor(this.state.input.benchWeight * 0.9)
        } else if (inputName === 'Dumbbell Fly') {
          this.updateAutofilled(name, weight)
          return Math.floor(this.state.input.benchWeight * 0.25)
        } else if (inputName === 'Snatch-grip Deadlift') {
          this.updateAutofilled(name, weight)
          return Math.floor(this.state.input.deadliftWeight * 0.75)
        } else if (inputName === 'Hex-bar Deadlift') {
          this.updateAutofilled(name, weight)
          return Math.floor(this.state.input.deadliftWeight * 1.10)
        } else if (inputName === 'Romanian Deadlift') {
          this.updateAutofilled(name, weight)
          return Math.floor(this.state.input.deadliftWeight * 0.75)
        } else if (inputName === 'Pause Deadlift') {
          this.updateAutofilled(name, weight)
          return Math.floor(this.state.input.deadliftWeight * 0.6)
        } else if (inputName === 'Dumbbell Shoulder Press') {
          this.updateAutofilled(name, weight)
          return Math.floor(this.state.input.ohpWeight * 0.5)
        } else if (inputName === 'Landmine Single-arm Press') {
          this.updateAutofilled(name, weight)
          return Math.floor(this.state.input.ohpWeight * 0.6)
        } else if (inputName === 'Z Press') {
          this.updateAutofilled(name, weight)
          return Math.floor(this.state.input.ohpWeight * 0.5)
        } else if (inputName === 'Trap-bar Press') {
          this.updateAutofilled(name, weight)
          return Math.floor(this.state.input.ohpWeight * 0.9)
        } else if (inputName === 'Supinated Chin-up') {
          this.updateAutofilled(name, weight)
          return Math.floor(this.state.input.benchWeight * 0.9)
        } else if (inputName === 'Wide-grip Pull-up') {
          this.updateAutofilled(name, weight)
          return Math.floor(this.state.input.benchWeight * 0.85)
        } else if (inputName === 'Face Pull') {
          this.updateAutofilled(name, weight)
          return Math.floor(this.state.input.benchWeight * 0.4)
        } else if (inputName === 'Lat Pull-down') {
          this.updateAutofilled(name, weight)
          return Math.floor(this.state.input.benchWeight * 0.8)
        } else if (inputName === 'Barbell Row') {
          this.updateAutofilled(name, weight)
          return Math.floor(this.state.input.benchWeight * 0.7)
        } else if (inputName === 'Dumbbell Row') {
          this.updateAutofilled(name, weight)
          return Math.floor(this.state.input.benchWeight * 0.35)
        } else if (inputName === 'Seated Cable Row') {
          this.updateAutofilled(name, weight)
          return Math.floor(this.state.input.benchWeight * 0.7)
        } else if (inputName === 'Pendlay Row') {
          this.updateAutofilled(name, weight)
          return Math.floor(this.state.input.benchWeight * 0.7)
        }
      } else {
        return inputWeight
      }
    }
    const isName = (inputName, inputReps, name, weight) => {
      if ((!this.state.autofilled[name] && !this.state.autofilled[weight]) && inputName && (inputName !== '')) {
        this.updateAutofilled(name, weight)
        return inputReps
      } else {
        return null
      }
    }
    const { input } = this.state
    // Put squat2Weight as 3rd argument for ratios, check to see if 3rd argument is 0
    const autoMax = {
      squat2Weight: ratios(input.squat2Name, input.squat2Weight, 'squat2Name', 'squat2Weight'),
      squat2Reps: isName(input.squat2Name, input.squatReps, 'squat2Name', 'squat2Weight'),
      squat3Weight: ratios(input.squat3Name, input.squat3Weight, 'squat3Name', 'squat3Weight'),
      squat3Reps: isName(input.squat3Name, input.squatReps, 'squat3Name', 'squat3Weight'),
      bench2Weight: ratios(input.bench2Name, input.bench2Weight, 'bench2Name', 'bench2Weight'),
      bench2Reps: isName(input.bench2Name, input.benchReps, 'bench2Name', 'bench2Weight'),
      bench3Weight: ratios(input.bench3Name, input.bench3Weight, 'bench3Name', 'bench3Weight'),
      bench3Reps: isName(input.bench3Name, input.benchReps, 'bench3Name', 'bench3Weight'),
      deadlift2Weight: ratios(input.deadlift2Name, input.deadlift2Weight, 'deadlift2Name', 'deadlift2Weight'),
      deadlift2Reps: input.deadliftReps,
      deadlift3Weight: ratios(input.deadlift3Name, input.deadlift3Weight, 'deadlift3Name', 'deadlift3Weight'),
      deadlift3Reps: input.deadliftReps,
      ohp2Weight: ratios(input.ohp2Name, input.ohp2Weight),
      ohp2Reps: input.ohpReps,
      ohp3Weight: ratios(input.ohp3Name, input.ohp3Weight),
      ohp3Reps: input.ohpReps,
      antagBenchWeight: ratios(input.antagBenchName, input.antagBenchWeight, 'antagBenchName', 'antagBenchWeight'),
      antagBenchReps: input.benchReps,
      antagBench2Weight: ratios(input.antagBench2Name, input.antagBench2Weight, 'antagBench2Name', 'antagBench2Weight'),
      antagBench2Reps: input.benchReps,
      antagBench3Weight: ratios(input.antagBench3Name, input.antagBench3Weight, 'antagBench3Name', 'antagBench3Weight'),
      antagBench3Reps: input.benchReps,
      antagOhpWeight: ratios(input.antagOhpName, input.antagOhpWeight),
      antagOhpReps: input.benchReps,
      antagOhp2Weight: ratios(input.antagOhp2Name, input.antagOhp2Weight),
      antagOhp2Reps: input.benchReps,
      antagOhp3Weight: ratios(input.antagOhp3Name, input.antagOhp3Weight),
      antagOhp3Reps: input.benchReps

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
    const updatedAutofilled = {
      [event.target.name]: true
    }
    console.log('updatedAutofilled from handlechange', updatedAutofilled)
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
    // console.log(this.state)
  }

  handleSelect = (key, value, weight) => {
    const updatedField = {
      [key]: value
    }
    const updatedAutofilled = {
      [key]: false,
      [weight]: false
    }
    console.log('handleSelect updated autofilled', updatedAutofilled)
    const editedInput = Object.assign(this.state.input, updatedField)
    const editedAutofilled = Object.assign(this.state.autofilled, updatedAutofilled)
    console.log('editedAutofilled from handleselect', editedAutofilled)
    this.setState({ input: editedInput, updated: false, autofilled: editedAutofilled })
  }

  handleSubmit = event => {
    event.preventDefault()

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
      .catch(console.error)
  }

  toggleAutoFill = event => {
    this.setState(prevState => ({
      autoFill: !prevState.autoFill
    }))
  }

  render () {
    const { handleChange, handleSelect, handleDate, handleSubmit, toggleAutoFill } = this
    const { input, isRoutineCreated } = this.state

    if (isRoutineCreated) {
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
          isEdit={false}
        />
      </div>
    )
  }
}

export default withSnackbar(InputCreate)
