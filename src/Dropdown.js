import React, { Component, Fragment } from 'react'

import CreatableSelect from 'react-select/creatable'

const exerciseOptions = [
  { value: 'antagSquatName', label: 'Box Jumps' },
  { value: 'antagSquatName', label: 'Kettle-bell Swings' },
  { value: 'antagSquatName', label: 'Squat Jumps' },
  { value: 'antagSquatName', label: 'Dumbbell Snatch' },
  { value: 'antagSquatName', label: 'Burpees' },
  { value: 'antagSquatName', label: 'Long jumps' },
  { value: 'antagSquatName', label: 'Prisoner Squats' }
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
