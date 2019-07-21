import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const InputForm = ({ input, handleSubmit, handleChange, cancelPath, toggleAutoFill }) => (
  <Fragment>
    <button onClick={toggleAutoFill}>Auto-Fill</button>
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

      <label>Squat Primer</label>
      <input
        placeholder="Squat Primer"
        value={input.antagSquatName}
        name="antagSquatName"
        onChange={handleChange}
        type="text"
      />

      <label>Over-head Press Antagonist</label>
      <input
        placeholder="Over-head Press Antagonist"
        value={input.antagOhpName}
        name="antagOhpName"
        onChange={handleChange}
        type="text"
      />

      <label>Over-head Press Antagonist Weight</label>
      <input
        placeholder="Over-head Press Antagonist Weight"
        value={input.antagOhpWeight}
        name="antagOhpWeight"
        onChange={handleChange}
        type="number"
        min="0"
      />

      <label>Over-head Press Antagonist Reps</label>
      <input
        placeholder="Over-head Press Antagonist Reps"
        value={input.antagOhpReps}
        name="antagOhpReps"
        onChange={handleChange}
        type="number"
        min="1"
        max="12"
      />

      <label>Deadlift Primer</label>
      <input
        placeholder="Deadlift Primer"
        value={input.antagDeadliftName}
        name="antagDeadliftName"
        onChange={handleChange}
        type="text"
      />

      <label>Bench-press Antagonist</label>
      <input
        placeholder="Bench-press Antagonist"
        value={input.antagBenchName}
        name="antagBenchName"
        onChange={handleChange}
        type="text"
      />

      <label>Bench-press Antagonist Weight</label>
      <input
        placeholder="Bench-press Antagonist Weight"
        value={input.antagBenchWeight}
        name="antagBenchWeight"
        onChange={handleChange}
        type="number"
        min="0"
      />

      <label>Bench-press Antagonist Reps</label>
      <input
        placeholder="Bench-press Antagonist Reps"
        value={input.antagBenchReps}
        name="antagBenchReps"
        onChange={handleChange}
        type="number"
        min="1"
        max="12"
      />

      <label>Secondary Squat Primer</label>
      <input
        placeholder="Secondary Squat Primer"
        value={input.antagSquat2Name}
        name="antagSquat2Name"
        onChange={handleChange}
        type="text"
      />

      <label>Secondary Squat Exercise</label>
      <input
        placeholder="Secondary Squat Exercise"
        value={input.squat2Name}
        name="squat2Name"
        onChange={handleChange}
        type="text"
      />

      <label>Secondary Squat Weight</label>
      <input
        placeholder="Secondary Squat Weight"
        value={input.squat2Weight}
        name="squat2Weight"
        onChange={handleChange}
        type="number"
        min="0"
      />

      <label>Secondary Squat Reps</label>
      <input
        placeholder="Secondary Squat Reps"
        value={input.squat2Reps}
        name="squat2Reps"
        onChange={handleChange}
        type="number"
        min="1"
        max="12"
      />

      <label>Secondary OHP Antagonist Exercise</label>
      <input
        placeholder="Secondary OHP Antagonist Exercise"
        value={input.antagOhp2Name}
        name="antagOhp2Name"
        onChange={handleChange}
        type="text"
      />

      <label>Secondary OHP Antagonist Weight</label>
      <input
        placeholder="Secondary OHP Antagonist Weight"
        value={input.antagOhp2Weight}
        name="antagOhp2Weight"
        onChange={handleChange}
        type="number"
        min="0"
      />

      <label>Secondary OHP Antagonist Reps</label>
      <input
        placeholder="Secondary OHP Antagonist Reps"
        value={input.antagOhp2Reps}
        name="antagOhp2Reps"
        onChange={handleChange}
        type="number"
        min="1"
        max="12"
      />

      <label>Secondary Over-head Press Exercise</label>
      <input
        placeholder="Secondary Over-head Press Exercise"
        value={input.ohp2Name}
        name="ohp2Name"
        onChange={handleChange}
        type="text"
      />

      <label>Secondary Over-head Press Weight</label>
      <input
        placeholder="Secondary Over-head Press Weight"
        value={input.ohp2Weight}
        name="ohp2Weight"
        onChange={handleChange}
        type="number"
        min="0"
      />

      <label>Secondary Over-head Press Reps</label>
      <input
        placeholder="Secondary Over-head Press Reps"
        value={input.ohp2Reps}
        name="ohp2Reps"
        onChange={handleChange}
        type="number"
        min="1"
        max="12"
      />

      <label>Secondary Deadlift Primer</label>
      <input
        placeholder="Secondary Deadlift Primer"
        value={input.antagDeadlift2Name}
        name="antagDeadlift2Name"
        onChange={handleChange}
        type="text"
      />

      <label>Secondary Deadlift Exercise</label>
      <input
        placeholder="Secondary Deadlift Exercise"
        value={input.deadlift2Name}
        name="deadlift2Name"
        onChange={handleChange}
        type="text"
      />

      <label>Secondary Deadlift Weight</label>
      <input
        placeholder="Secondary Deadlift Weight"
        value={input.deadlift2Weight}
        name="deadlift2Weight"
        onChange={handleChange}
        type="number"
        min="0"
      />

      <label>Secondary Deadlift Reps</label>
      <input
        placeholder="Secondary Deadlift Reps"
        value={input.deadlift2Reps}
        name="deadlift2Reps"
        onChange={handleChange}
        type="number"
        min="1"
        max="12"
      />

      <label>Secondary Bench-press Antagonist Exercise</label>
      <input
        placeholder="Secondary Bench-press Antagonist Exercise"
        value={input.antagBench2Name}
        name="antagBench2Name"
        onChange={handleChange}
        type="text"
      />

      <label>Secondary Bench-press Antagonist Weight</label>
      <input
        placeholder="Secondary Bench-press Antagonist Weight"
        value={input.antagBench2Weight}
        name="antagBench2Weight"
        onChange={handleChange}
        type="number"
        min="0"
      />

      <label>Secondary Bench-press Antagonist Reps</label>
      <input
        placeholder="Secondary Bench-press Antagonist Reps"
        value={input.antagBench2Reps}
        name="antagBench2Reps"
        onChange={handleChange}
        type="number"
        min="1"
        max="12"
      />

      <label>Secondary Bench-press Exercise</label>
      <input
        placeholder="Secondary Bench-press Exercise"
        value={input.bench2Name}
        name="bench2Name"
        onChange={handleChange}
        type="text"
      />

      <label>Secondary Bench-press Weight</label>
      <input
        placeholder="Secondary Bench-press Weight"
        value={input.bench2Weight}
        name="bench2Weight"
        onChange={handleChange}
        type="number"
        min="0"
      />

      <label>Secondary Bench-press Reps</label>
      <input
        placeholder="Secondary Bench-press Reps"
        value={input.bench2Reps}
        name="bench2Reps"
        onChange={handleChange}
        type="number"
        min="1"
        max="12"
      />

      <label>Assistance Squat Primer</label>
      <input
        placeholder="Assistance Squat Primer"
        value={input.antagSquat3Name}
        name="antagSquat3Name"
        onChange={handleChange}
        type="text"
      />

      <label>Assistance Squat Exercise</label>
      <input
        placeholder="Assistance Squat Exercise"
        value={input.squat3Name}
        name="squat3Name"
        onChange={handleChange}
        type="text"
      />

      <label>Assistance Squat Weight</label>
      <input
        placeholder="Assistance Squat Weight"
        value={input.squat3Weight}
        name="squat3Weight"
        onChange={handleChange}
        type="number"
        min="0"
      />

      <label>Assistance Squat Reps</label>
      <input
        placeholder="Assistance Squat Reps"
        value={input.squat3Reps}
        name="squat3Reps"
        onChange={handleChange}
        type="number"
        min="1"
        max="12"
      />

      <label>Assistance Ohp Antagonist Exercise</label>
      <input
        placeholder="Assistance Ohp Antagonist Exercise"
        value={input.antagOhp3Name}
        name="antagOhp3Name"
        onChange={handleChange}
        type="text"
      />

      <label>Assistance Ohp Antagonist Weight</label>
      <input
        placeholder="Assistance Ohp Antagonist Weight"
        value={input.antagOhp3Weight}
        name="antagOhp3Weight"
        onChange={handleChange}
        type="number"
        min="0"
      />

      <label>Assistance Ohp Antagonist Reps</label>
      <input
        placeholder="Assistance Ohp Antagonist Reps"
        value={input.antagOhp3Reps}
        name="antagOhp3Reps"
        onChange={handleChange}
        type="number"
        min="1"
        max="12"
      />

      <label>Assistance Over-head Press Exercise</label>
      <input
        placeholder="Assistance Over-head Press Exercise"
        value={input.ohp3Name}
        name="ohp3Name"
        onChange={handleChange}
        type="text"
      />

      <label>Assistance Over-head Press Weight</label>
      <input
        placeholder="Assistance Over-head Press Weight"
        value={input.ohp3Weight}
        name="ohp3Weight"
        onChange={handleChange}
        type="number"
        min="0"
      />

      <label>Assistance Over-head Press Reps</label>
      <input
        placeholder="Assistance Over-head Press Reps"
        value={input.ohp3Reps}
        name="ohp3Reps"
        onChange={handleChange}
        type="number"
        min="1"
        max="12"
      />

      <label>Assistance Dead-lift Primer</label>
      <input
        placeholder="Assistance Dead-lift Primer"
        value={input.antagDeadlift3Name}
        name="antagDeadlift3Name"
        onChange={handleChange}
        type="text"
      />

      <label>Assistance Dead-lift Exercise</label>
      <input
        placeholder="Assistance Dead-lift Exercise"
        value={input.deadlift3Name}
        name="deadlift3Name"
        onChange={handleChange}
        type="text"
      />

      <label>Assistance Dead-lift Weight</label>
      <input
        placeholder="Assistance Dead-lift Weight"
        value={input.deadlift3Weight}
        name="deadlift3Weight"
        onChange={handleChange}
        type="number"
        min="0"
      />

      <label>Assistance Dead-lift Reps</label>
      <input
        placeholder="Assistance Dead-lift Reps"
        value={input.deadlift3Reps}
        name="deadlift3Reps"
        onChange={handleChange}
        type="number"
        min="1"
        max="12"
      />

      <label>Assistance Bench-press Antagonist Exercise</label>
      <input
        placeholder="Assistance Bench-press Antagonist Exercise"
        value={input.antagBench3Name}
        name="antagBench3Name"
        onChange={handleChange}
        type="text"
      />

      <label>Assistance Bench-press Antagonist Weight</label>
      <input
        placeholder="Assistance Bench-press Antagonist Weight"
        value={input.antagBench3Weight}
        name="antagBench3Weight"
        onChange={handleChange}
        type="number"
        min="0"
      />

      <label>Assistance Bench-press Antagonist Reps</label>
      <input
        placeholder="Assistance Bench-press Antagonist Reps"
        value={input.antagBench3Reps}
        name="antagBench3Reps"
        onChange={handleChange}
        type="number"
        min="1"
        max="12"
      />

      <label>Assistance Bench-press Exercise</label>
      <input
        placeholder="Assistance Bench-press Exercise"
        value={input.bench3Name}
        name="bench3Name"
        onChange={handleChange}
        type="text"
        min="0"
      />

      <label>Assistance Bench-press Weight</label>
      <input
        placeholder="Assistance Bench-press Weight"
        value={input.bench3Weight}
        name="bench3Weight"
        onChange={handleChange}
        type="number"
        min="0"
      />

      <label>Assistance Bench-press Reps</label>
      <input
        placeholder="Assistance Bench-press Reps"
        value={input.bench3Reps}
        name="bench3Reps"
        onChange={handleChange}
        type="number"
        min="1"
        max="12"
      />

      <label>Core 1</label>
      <input
        placeholder="Core 1"
        value={input.core1}
        name="core1"
        onChange={handleChange}
        type="text"
      />

      <label>Core 2</label>
      <input
        placeholder="Core 2"
        value={input.core2}
        name="core2"
        onChange={handleChange}
        type="text"
      />

      <label>Core 3</label>
      <input
        placeholder="Core 3"
        value={input.core3}
        name="core3"
        onChange={handleChange}
        type="text"
      />

      <label>Core 4</label>
      <input
        placeholder="Core 4"
        value={input.core4}
        name="core4"
        onChange={handleChange}
        type="text"
      />

      <label>Core 5</label>
      <input
        placeholder="Core 5"
        value={input.core5}
        name="core5"
        onChange={handleChange}
        type="text"
      />

      <label>Core 6</label>
      <input
        placeholder="Core 6"
        value={input.core6}
        name="core6"
        onChange={handleChange}
        type="text"
      />

      <label>Oblique 1</label>
      <input
        placeholder="Oblique 1"
        value={input.oblique1}
        name="oblique1"
        onChange={handleChange}
        type="text"
      />

      <label>Oblique 2</label>
      <input
        placeholder="Oblique 2"
        value={input.oblique2}
        name="oblique2"
        onChange={handleChange}
        type="text"
      />

      <label>Oblique 3</label>
      <input
        placeholder="Oblique 3"
        value={input.oblique3}
        name="oblique3"
        onChange={handleChange}
        type="text"
      />

      <label>Oblique 4</label>
      <input
        placeholder="Oblique 4"
        value={input.oblique4}
        name="oblique4"
        onChange={handleChange}
        type="text"
      />

      <label>Oblique 5</label>
      <input
        placeholder="Oblique 5"
        value={input.oblique5}
        name="oblique5"
        onChange={handleChange}
        type="text"
      />

      <label>Oblique 6</label>
      <input
        placeholder="Oblique 6"
        value={input.oblique6}
        name="oblique6"
        onChange={handleChange}
        type="text"
      />
      <button type="submit">Submit</button>
      <Link to={cancelPath}>
        <button>Cancel</button>
      </Link>
    </form>
  </Fragment>
)

export default InputForm
