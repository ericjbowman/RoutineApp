import React, { Component, Fragment } from 'react'

import CreatableSelect from 'react-select/creatable'

// const exerciseOptions = [
//   { value: this.props.name, label: 'Box Jumps' },
//   { value: this.props.name, label: 'Kettlebell Swings' },
//   { value: this.props.name, label: 'Squat Jumps' },
//   { value: this.props.name, label: 'Dumbbell Snatch' },
//   { value: this.props.name, label: 'Burpees' },
//   { value: this.props.name, label: 'Long jumps' },
//   { value: this.props.name, label: 'Prisoner Squats' }
// ]

class Dropdown extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedColor: null,
      other: null
    }
  }
  handleChange = (newValue) => {
    // console.log(newValue.label, newValue.value)
    if (newValue && newValue.hasOwnProperty('preset')) {
      console.log('newValue has a label')
      this.props.handleSelect(this.props.name, newValue.label, this.props.weight, this.props.reps)
    } else if (newValue && !newValue.preset) {
      this.props.handleSelect(this.props.name, newValue.label, this.props.weight)
    }
  }

  render () {
    const { name } = this.props
    const legPrimers = ['antagSquatName', 'antagSquat2Name', 'antagSquat3Name', 'antagDeadliftName', 'antagDeadlift2Name', 'antagDeadlift3Name']
    const squats = ['squat2Name', 'squat3Name']
    const deadlifts = ['deadlift2Name', 'deadlift3Name']
    const benches = ['bench2Name', 'bench3Name']
    const ohps = ['ohp2Name', 'ohp3Name']
    const antagBenches = ['antagBenchName', 'antagBench2Name', 'antagBench3Name']
    const antagOhps = ['antagOhpName', 'antagOhp2Name', 'antagOhp3Name']
    const core = ['core1', 'core2', 'core3', 'core4', 'core5', 'core6']
    const obliques = ['oblique1', 'oblique2', 'oblique3', 'oblique4', 'oblique5', 'oblique6']
    let exerciseOptions = []
    if (core.includes(name)) {
      exerciseOptions = [
        { value: name, label: 'Plank', preset: true },
        { value: name, label: 'V-up', preset: true },
        { value: name, label: 'Crunch', preset: true },
        { value: name, label: 'Hanging Leg-Raise', preset: true },
        { value: name, label: 'Ab wheel roll-out', preset: true },
        { value: name, label: 'Decline bench-situp', preset: true },
        { value: name, label: 'Dragon Flag', preset: true },
        { value: name, label: 'Flutter Kicks', preset: true },
        { value: name, label: 'Toe-Touch Crunch', preset: true }
      ]
    } else if (obliques.includes(name)) {
      exerciseOptions = [
        { value: name, label: 'Side Plank', preset: true },
        { value: name, label: 'Air Bicycle', preset: true },
        { value: name, label: 'Woodchopper', preset: true },
        { value: name, label: 'Single-arm Farmer Walk', preset: true },
        { value: name, label: 'Roman chair', preset: true },
        { value: name, label: 'Barbell twist', preset: true },
        { value: name, label: 'Landmine twist', preset: true },
        { value: name, label: 'Windshield wiper', preset: true }
      ]
    } else if (legPrimers.includes(name)) {
      exerciseOptions = [
        { value: name, label: 'Box Jumps', preset: true },
        { value: name, label: 'Kettlebell Swings', preset: true },
        { value: name, label: 'Squat Jumps', preset: true },
        { value: name, label: 'Dumbbell Snatch', preset: true },
        { value: name, label: 'Burpees', preset: true },
        { value: name, label: 'Long jumps', preset: true },
        { value: name, label: 'Prisoner Squats', preset: true }
      ]
    } else if (squats.includes(name)) {
      exerciseOptions = [
        { value: name, label: 'Front Squat', preset: true },
        { value: name, label: 'Pause Squat', preset: true },
        { value: name, label: 'Box Squat', preset: true },
        { value: name, label: 'Barbell Lunge', preset: true },
        { value: name, label: 'Bulgarian Split Squat', preset: true }
      ]
    } else if (deadlifts.includes(name)) {
      exerciseOptions = [
        { value: name, label: 'Snatch-grip Deadlift', preset: true },
        { value: name, label: 'Pause Deadlift', preset: true },
        { value: name, label: 'Hex-bar Deadlift', preset: true },
        { value: name, label: 'Romanian Deadlift', preset: true }
      ]
    } else if (benches.includes(name)) {
      exerciseOptions = [
        { value: name, label: 'Incline Bench Press', preset: true },
        { value: name, label: 'Weighted Dip', preset: true },
        { value: name, label: 'Close-grip Bench Press', preset: true },
        { value: name, label: 'Dumbbell Fly', preset: true }
      ]
    } else if (ohps.includes(name)) {
      exerciseOptions = [
        { value: name, label: 'Landmine Single-arm Press', preset: true },
        { value: name, label: 'Z Press', preset: true },
        { value: name, label: 'Dumbbell Shoulder Press', preset: true },
        { value: name, label: 'Trap-bar Press', preset: true }
      ]
    } else if (antagBenches.includes(name)) {
      exerciseOptions = [
        { value: name, label: 'Barbell Row', preset: true },
        { value: name, label: 'Dumbbell Row', preset: true },
        { value: name, label: 'Seated Cable Row', preset: true },
        { value: name, label: 'Pendlay Row', preset: true }
      ]
    } else if (antagOhps.includes(name)) {
      exerciseOptions = [
        { value: name, label: 'Wide-grip Pull-up', preset: true },
        { value: name, label: 'Supinated Chin-up', preset: true },
        { value: name, label: 'Lat Pull-down', preset: true },
        { value: name, label: 'Face Pull', preset: true }
      ]
    }
    return (
      <Fragment>
        <CreatableSelect
          key={this.props.key}
          isClearable
          onChange={this.handleChange}
          onInputChange={this.handleChange}
          options={exerciseOptions}
        />
      </Fragment>
    )
  }
}

export default Dropdown
