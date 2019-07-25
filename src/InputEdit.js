import React, { Component } from 'react'
import Form1 from './Form1'
import { Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from './apiConfig'
import messages from './auth/messages'
import { withSnackbar } from 'notistack'
class InputEdit extends Component {
  constructor (props) {
    super(props)
    this.state = {
      input: {
        routineName: '',

        antagSquatName: 'Squat-jumps',
        squatWeight: null,
        squatReps: null,

        antagOhpName: 'Wide-grip Pull-up',
        antagOhpWeight: null,
        antagOhpReps: null,
        ohpWeight: null,
        ohpReps: null,

        antagDeadliftName: 'Kettle-bell Swings',
        deadliftWeight: null,
        deadliftReps: null,

        antagBenchName: 'Barbell Row',
        antagBenchWeight: null,
        antagBenchReps: null,
        benchWeight: null,
        benchReps: null,

        antagSquat2Name: 'Box-jumps',
        squat2Name: 'Front Squat',
        squat2Weight: null,
        squat2Reps: null,

        antagOhp2Name: 'Supinated Chin-up',
        antagOhp2Weight: null,
        antagOhp2Reps: null,
        ohp2Name: 'Landmine Single-arm Press',
        ohp2Weight: null,
        ohp2Reps: null,

        antagDeadlift2Name: 'Squat Jumps',
        deadlift2Name: 'Snatch-grip Deadlift',
        deadlift2Weight: null,
        deadlift2Reps: null,

        antagBench2Name: 'Dumbbell Row',
        antagBench2Weight: null,
        antagBench2Reps: null,
        bench2Name: 'Weighted Dip',
        bench2Weight: null,
        bench2Reps: null,

        antagSquat3Name: 'Lunge hops',
        squat3Name: 'Bulgarian Split Squat',
        squat3Weight: null,
        squat3Reps: null,

        antagOhp3Name: 'Face Pull',
        antagOhp3Weight: null,
        antagOhp3Reps: null,
        ohp3Name: 'Z Press',
        ohp3Weight: null,
        ohp3Reps: null,

        antagDeadlift3Name: 'Burpee',
        deadlift3Name: 'Romanian Deadlift',
        deadlift3Weight: null,
        deadlift3Reps: null,

        antagBench3Name: 'Seated Cable Row',
        antagBench3Weight: null,
        antagBench3Reps: null,
        bench3Name: 'Close-grip Bench Press',
        bench3Weight: null,
        bench3Reps: null,

        core1: 'Plank w/ Hip Extension',
        core2: 'Toe-touch Crunches',
        core3: 'Decline Situps',
        core4: 'Hanging Leg-raises',
        core5: 'V-up',
        core6: 'Dragon Flags',

        oblique1: 'Side Plank',
        oblique2: 'Air Bicycle',
        oblique3: 'Barbell Twist',
        oblique4: 'Woodchopper',
        oblique5: 'Single-arm Farmer\'s Walk',
        oblique6: 'Windshield Wipers'
      },
      isRoutineEdited: false,
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

    const ratios = (name) => {
      if (name === 'Front Squat') {
        return Math.floor(this.state.input.squatWeight * 0.85)
      } if (name === 'Barbell Lunge') {
        return Math.floor(this.state.input.squatWeight * 0.60)
      } if (name === 'Box Squat') {
        return this.state.input.squatWeight
      } if (name === 'Pause Squat') {
        return Math.floor(this.state.input.squatWeight * 0.70)
      } if (name === 'Bulgarian Split Squat') {
        return Math.floor(this.state.input.squatWeight * 0.50)
      } if (name === 'Incline Bench Press') {
        return Math.floor(this.state.input.benchWeight * 0.8)
      } if (name === 'Weighted Dip') {
        return Math.floor(this.state.input.benchWeight * 1.05)
      } if (name === 'Close-grip Bench Press') {
        return Math.floor(this.state.input.benchWeight * 0.9)
      } if (name === 'Dumbbell Fly') {
        return Math.floor(this.state.input.benchWeight * 0.25)
      } if (name === 'Snatch-grip Deadlift') {
        return Math.floor(this.state.input.deadliftWeight * 0.75)
      } if (name === 'Hex-bar Deadlift') {
        return Math.floor(this.state.input.deadliftWeight * 1.10)
      } if (name === 'Romanian Deadlift') {
        return Math.floor(this.state.input.deadliftWeight * 0.75)
      } if (name === 'Pause Deadlift') {
        return Math.floor(this.state.input.deadliftWeight * 0.6)
      } if (name === 'Dumbbell Shoulder Press') {
        return Math.floor(this.state.input.ohpWeight * 0.5)
      } if (name === 'Landmine Single-arm Press') {
        return Math.floor(this.state.input.ohpWeight * 0.6)
      } if (name === 'Z Press') {
        return Math.floor(this.state.input.ohpWeight * 0.5)
      } if (name === 'Trap-bar Press') {
        return Math.floor(this.state.input.ohpWeight * 0.9)
      } if (name === 'Supinated Chin-up') {
        return Math.floor(this.state.input.benchWeight * 0.9)
      } if (name === 'Wide-grip Pull-up') {
        return Math.floor(this.state.input.benchWeight * 0.85)
      } if (name === 'Face Pull') {
        return Math.floor(this.state.input.benchWeight * 0.4)
      } if (name === 'Lat Pull-down') {
        return Math.floor(this.state.input.benchWeight * 0.8)
      } if (name === 'Barbell Row') {
        return Math.floor(this.state.input.benchWeight * 0.7)
      } if (name === 'Dumbbell Row') {
        return Math.floor(this.state.input.benchWeight * 0.35)
      } if (name === 'Seated Cable Row') {
        return Math.floor(this.state.input.benchWeight * 0.7)
      } if (name === 'Pendlay Row') {
        return Math.floor(this.state.input.benchWeight * 0.7)
      }
    }
    const autoMax = {
      squat2Weight: ratios(this.state.input.squat2Name),
      squat2Reps: this.state.input.squatReps,
      squat3Weight: ratios(this.state.input.squat3Name),
      squat3Reps: this.state.input.squatReps,
      bench2Weight: ratios(this.state.input.bench2Name),
      bench2Reps: this.state.input.benchReps,
      bench3Weight: ratios(this.state.input.bench3Name),
      bench3Reps: this.state.input.benchReps,
      deadlift2Weight: ratios(this.state.input.deadlift2Name),
      deadlift2Reps: this.state.input.deadliftReps,
      deadlift3Weight: ratios(this.state.input.deadlift3Name),
      deadlift3Reps: this.state.input.deadliftReps,
      ohp2Weight: ratios(this.state.input.ohp2Name),
      ohp2Reps: this.state.input.ohpReps,
      ohp3Weight: ratios(this.state.input.ohp3Name),
      ohp3Reps: this.state.input.ohpReps,
      antagBenchWeight: ratios(this.state.input.antagBenchName),
      antagBenchReps: this.state.input.benchReps,
      antagBench2Weight: ratios(this.state.input.antagBench2Name),
      antagBench2Reps: this.state.input.benchReps,
      antagBench3Weight: ratios(this.state.input.antagBench3Name),
      antagBench3Reps: this.state.input.benchReps,
      antagOhpWeight: ratios(this.state.input.antagOhpName),
      antagOhpReps: this.state.input.benchReps,
      antagOhp2Weight: ratios(this.state.input.antagOhp2Name),
      antagOhp2Reps: this.state.input.benchReps,
      antagOhp3Weight: ratios(this.state.input.antagOhp3Name),
      antagOhp3Reps: this.state.input.benchReps

    }
    if (this.state.autoFill === true) {
      const autoMaxInput = Object.assign(this.state.input, autoMax)
      this.setState({ input: autoMaxInput })
      // this.setState({ input: editedInput })
    } else {
      this.setState({ input: editedInput })
    }
  }

  handleSubmit = event => {
    event.preventDefault()

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
      .then(() => this.props.enqueueSnackbar(messages.routineEditSuccess, { variant: 'success' }))
      .catch(() => this.props.enqueueSnackbar(messages.routineEditFailure, { variant: 'error' }))
      .catch(console.error)
  }

  toggleAutoFill = event => {
    this.setState(prevState => ({
      autoFill: !prevState.autoFill
    }))
  }

  render () {
    const { handleChange, handleSubmit, toggleAutoFill } = this
    const { input, isRoutineEdited } = this.state

    if (isRoutineEdited) {
      return <Redirect to='/routines'/>
    }
    return (
      <div>
        <Form1
          input={input}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          toggleAutoFill={toggleAutoFill}
          cancelPath="/"
          isEdit={true}
        />
      </div>
    )
  }
}

export default withSnackbar(withRouter(InputEdit))
