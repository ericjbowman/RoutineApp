import React from 'react'
import { Link } from 'react-router-dom'

const InputForm = ({ input, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label>Routine Name</label>
    <input
      placeholder="Routine Name"
      value={input.routineName}
      name="routineName"
      onChange={handleChange}
      type="text"
    />
    <label>Squat Weight</label>
    <input
      placeholder="Squat Weight"
      value={input.squatWeight}
      name="squatWeight"
      onChange={handleChange}
      type="number"
      min="0"
    />
    <label>Squat Reps</label>
    <input
      placeholder="Squat Reps"
      value={input.squatReps}
      name="squatReps"
      onChange={handleChange}
      type="number"
      min="1"
      max="12"
    />
    <label>Over-head Press Weight</label>
    <input
      placeholder="Over-head Press Weight"
      value={input.ohpWeight}
      name="ohpWeight"
      onChange={handleChange}
      type="number"
      min="0"
    />
    <label>Over-head Press Reps</label>
    <input
      placeholder="Over-head Press Reps"
      value={input.ohpReps}
      name="ohpReps"
      onChange={handleChange}
      type="number"
      min="1"
      max="12"
    />
    <label>Deadlift Weight</label>
    <input
      placeholder="Deadlift Weight"
      value={input.deadliftWeight}
      name="deadliftWeight"
      onChange={handleChange}
      type="number"
      min="0"
    />
    <label>Deadlift Reps</label>
    <input
      placeholder="Deadlift Reps"
      value={input.deadliftReps}
      name="deadliftReps"
      onChange={handleChange}
      type="number"
      min="1"
      max="12"
    />
    <label>Bench-press Weight</label>
    <input
      placeholder="Bench-press Weight"
      value={input.benchWeight}
      name="benchWeight"
      onChange={handleChange}
      type="number"
      min="0"
    />
    <label>Bench-press Reps</label>
    <input
      placeholder="Bench-press Reps"
      value={input.benchReps}
      name="benchReps"
      onChange={handleChange}
      type="number"
      min="1"
      max="12"
    />
    <button type="submit">Submit</button>
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>
  </form>
)

export default InputForm
