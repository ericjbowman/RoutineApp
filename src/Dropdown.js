import React, { Component, Fragment } from 'react'

import CreatableSelect from 'react-select/creatable'

const exerciseOptions = [
  { value: 'antagSquatName', label: 'Box Jumps', color: '#5243AA' },
  { value: 'antagSquatName', label: 'Kettle-bell Swings', color: '#FF8B00' },
  { value: 'antagSquatName', label: 'Squat Jumps', color: '#FFC400' },
  { value: 'antagSquatName', label: 'Dumbbell Snatch', color: '#36B37E' },
  { value: 'antagSquatName', label: 'Burpees', color: '#00875A' },
  { value: 'antagSquatName', label: 'Long jumps', color: '#253858' },
  { value: 'antagSquatName', label: 'Prisoner Squats', color: '#666666' }
]

class SelectExample extends Component {
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
      this.props.handleSelect('antagSquatName', newValue.label)
    }
  }

  render () {
    return (
      <Fragment>
        <CreatableSelect
          isClearable
          onChange={this.handleChange}
          onInputChange={this.handleChange}
          options={exerciseOptions}
        />
      </Fragment>
    )
  }
}

export default SelectExample
