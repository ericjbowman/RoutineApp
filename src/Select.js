import React, { Component } from 'react'

import CreatableSelect from 'react-select/creatable'

class CreatableSingle extends Component {
  handleChange = (newValue: any, actionMeta: any) => {
    console.group('Value Changed')
    console.log(newValue)
    // handleSelect(newValue)
    console.log(`action: ${actionMeta.action}`)
    console.groupEnd()
  }
  handleInputChange = (inputValue: any, actionMeta: any) => {
    console.group('Input Changed')
    console.log(inputValue)
    console.log(`action: ${actionMeta.action}`)
    console.groupEnd()
  }
  render () {
    return (
      <CreatableSelect
        value={this.props.value}
        name={this.props.name}
        isClearable
        onChange={this.handleChange}
        onInputChange={this.handleInputChange}
        options={this.props.options}
      />
    )
  }
}

export default CreatableSingle
