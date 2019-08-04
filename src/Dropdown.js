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
    if (newValue && newValue.hasOwnProperty('label')) {
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
    let exerciseOptions = []
    if (legPrimers.includes(name)) {
      exerciseOptions = [
        { value: name, label: 'Box Jumps' },
        { value: name, label: 'Kettlebell Swings' },
        { value: name, label: 'Squat Jumps' },
        { value: name, label: 'Dumbbell Snatch' },
        { value: name, label: 'Burpees' },
        { value: name, label: 'Long jumps' },
        { value: name, label: 'Prisoner Squats' }
      ]
    } else if (squats.includes(name)) {
      exerciseOptions = [
        { value: name, label: 'Front Squat' },
        { value: name, label: 'Pause Squat' },
        { value: name, label: 'Box Squat' },
        { value: name, label: 'Barbell Lunge' },
        { value: name, label: 'Bulgarian Split Squat' }
      ]
    } else if (deadlifts.includes(name)) {
      exerciseOptions = [
        { value: name, label: 'Snatch-grip Deadlift' },
        { value: name, label: 'Pause Deadlift' },
        { value: name, label: 'Hex-bar Deadlift' },
        { value: name, label: 'Romanian Deadlift' }
      ]
    } else if (benches.includes(name)) {
      exerciseOptions = [
        { value: name, label: 'Incline Bench Press' },
        { value: name, label: 'Weighted Dip' },
        { value: name, label: 'Close-grip Bench Press' },
        { value: name, label: 'Dumbbell Fly' }
      ]
    } else if (ohps.includes(name)) {
      exerciseOptions = [
        { value: name, label: 'Landmine Single-arm Press' },
        { value: name, label: 'Z press' },
        { value: name, label: 'Dumbbell Shoulder Press' },
        { value: name, label: 'Trap-bar Press' }
      ]
    } else if (antagBenches.includes(name)) {
      exerciseOptions = [
        { value: name, label: 'Barbell Row' },
        { value: name, label: 'Dumbbell Row' },
        { value: name, label: 'Seated Cable Row' },
        { value: name, label: 'Pendlay Row' }
      ]
    } else if (antagOhps.includes(name)) {
      exerciseOptions = [
        { value: name, label: 'Wide-grip Pull-up' },
        { value: name, label: 'Supinated Chin-up' },
        { value: name, label: 'Lat Pull-down' },
        { value: name, label: 'Face Pull' }
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
