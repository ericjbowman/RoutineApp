import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
// import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
// import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'

// const useStyles = makeStyles(theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap'
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1)
//   },
//   dense: {
//     marginTop: theme.spacing(2)
//   },
//   menu: {
//     width: 200
//   }
// }))
//
// const classes = useStyles()

const InputForm = ({ input, handleSubmit, handleChange, cancelPath, toggleAutoFill }) => {
  const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
    dense: {
      marginTop: theme.spacing(2)
    },
    menu: {
      width: 200
    }
  }))

  const classes = useStyles()
  return (
    <Fragment>
      <button onClick={toggleAutoFill}>Auto-Fill</button>
      <form className={classes.container} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Routine Name"
          value={input.routineName}
          onChange={handleChange}
          name="routineName"
        />
        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Squat Weight"
          placeholder="Squat Weight"
          value={input.squatWeight}
          name="squatWeight"
          onChange={handleChange}
          type="number"
          min="0"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Squat reps"
          placeholder="Squat Reps"
          value={input.squatReps}
          name="squatReps"
          onChange={handleChange}
          type="number"
          min="1"
          max="12"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Over-head Press Weight"
          placeholder="Over-head Press Weight"
          value={input.ohpWeight}
          name="ohpWeight"
          onChange={handleChange}
          type="number"
          min="0"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Over-head Press Reps"
          placeholder="Over-head Press Reps"
          value={input.ohpReps}
          name="ohpReps"
          onChange={handleChange}
          type="number"
          min="1"
          max="12"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Deadlift Weight"
          placeholder="Deadlift Weight"
          value={input.deadliftWeight}
          name="deadliftWeight"
          onChange={handleChange}
          type="number"
          min="0"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Deadlift Reps"
          placeholder="Deadlift Reps"
          value={input.deadliftReps}
          name="deadliftReps"
          onChange={handleChange}
          type="number"
          min="1"
          max="12"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Bench-press Weight"
          placeholder="Bench-press Weight"
          value={input.benchWeight}
          name="benchWeight"
          onChange={handleChange}
          type="number"
          min="0"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Bench-Press Reps"
          placeholder="Bench-press Reps"
          value={input.benchReps}
          name="benchReps"
          onChange={handleChange}
          type="number"
          min="1"
          max="12"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Squat Primer"
          placeholder="Squat Primer"
          value={input.antagSquatName}
          name="antagSquatName"
          onChange={handleChange}
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="O.H.P. Antagonist"
          placeholder="O.H.P. Antagonist"
          value={input.antagOhpName}
          name="antagOhpName"
          onChange={handleChange}
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="O.H.P. Antagonist Weight"
          placeholder="O.H.P. Antagonist Weight"
          value={input.antagOhpWeight}
          name="antagOhpWeight"
          onChange={handleChange}
          type="number"
          min="0"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="O.H.P. Antagonist Reps"
          placeholder="O.H.P. Antagonist Reps"
          value={input.antagOhpReps}
          name="antagOhpReps"
          onChange={handleChange}
          type="number"
          min="1"
          max="12"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Deadlift Primer"
          placeholder="Deadlift Primer"
          value={input.antagDeadliftName}
          name="antagDeadliftName"
          onChange={handleChange}
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Bench-press Antagonist"
          placeholder="Bench-press Antagonist"
          value={input.antagBenchName}
          name="antagBenchName"
          onChange={handleChange}
          type="text"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Bench-press Antagonist Weight"
          placeholder="Bench-press Antagonist Weight"
          value={input.antagBenchWeight}
          name="antagBenchWeight"
          onChange={handleChange}
          type="number"
          min="0"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Bench-press Antagonist Reps"
          placeholder="Bench-press Antagonist Reps"
          value={input.antagBenchReps}
          name="antagBenchReps"
          onChange={handleChange}
          type="number"
          min="1"
          max="12"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Secondary Squat Primer"
          placeholder="Secondary Squat Primer"
          value={input.antagSquat2Name}
          name="antagSquat2Name"
          onChange={handleChange}
          type="text"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Secondary Squat Exercise"
          placeholder="Secondary Squat Exercise"
          value={input.squat2Name}
          name="squat2Name"
          onChange={handleChange}
          type="text"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Secondary Squat Weight"
          placeholder="Secondary Squat Weight"
          value={input.squat2Weight}
          name="squat2Weight"
          onChange={handleChange}
          type="number"
          min="0"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Secondary Squat Reps"
          placeholder="Secondary Squat Reps"
          value={input.squat2Reps}
          name="squat2Reps"
          onChange={handleChange}
          type="number"
          min="1"
          max="12"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Secondary Squat Weight"
          placeholder="Secondary OHP Antagonist Exercise"
          value={input.antagOhp2Name}
          name="antagOhp2Name"
          onChange={handleChange}
          type="text"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Secondary OHP Antagonist Weight"
          placeholder="Secondary OHP Antagonist Weight"
          value={input.antagOhp2Weight}
          name="antagOhp2Weight"
          onChange={handleChange}
          type="number"
          min="0"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Secondary OHP Antagonist Reps"
          placeholder="Secondary OHP Antagonist Reps"
          value={input.antagOhp2Reps}
          name="antagOhp2Reps"
          onChange={handleChange}
          type="number"
          min="1"
          max="12"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Secondary OHP Exercise"
          placeholder="Secondary OHP Exercise"
          value={input.ohp2Name}
          name="ohp2Name"
          onChange={handleChange}
          type="text"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Secondary OHP Weight"
          placeholder="Secondary OHP Weight"
          value={input.ohp2Weight}
          name="ohp2Weight"
          onChange={handleChange}
          type="number"
          min="0"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Secondary OHP Reps"
          placeholder="Secondary OHP Reps"
          value={input.ohp2Reps}
          name="ohp2Reps"
          onChange={handleChange}
          type="number"
          min="1"
          max="12"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Secondary Deadlift Primer"
          placeholder="Secondary Deadlift Primer"
          value={input.antagDeadlift2Name}
          name="antagDeadlift2Name"
          onChange={handleChange}
          type="text"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Secondary Deadlift Exercise"
          placeholder="Secondary Deadlift Exercise"
          value={input.deadlift2Name}
          name="deadlift2Name"
          onChange={handleChange}
          type="text"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Secondary Deadlift Weight"
          placeholder="Secondary Deadlift Weight"
          value={input.deadlift2Weight}
          name="deadlift2Weight"
          onChange={handleChange}
          type="number"
          min="0"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Secondary Deadlift Weight"
          placeholder="Secondary Deadlift Reps"
          value={input.deadlift2Reps}
          name="deadlift2Reps"
          onChange={handleChange}
          type="number"
          min="1"
          max="12"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Secondary Bench-press Antagonist Exercise"
          placeholder="Secondary Bench-press Antagonist Exercise"
          value={input.antagBench2Name}
          name="antagBench2Name"
          onChange={handleChange}
          type="text"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Secondary Bench-press Antagonist Weight"
          placeholder="Secondary Bench-press Antagonist Weight"
          value={input.antagBench2Weight}
          name="antagBench2Weight"
          onChange={handleChange}
          type="number"
          min="0"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Secondary Bench-press Antagonist Reps"
          placeholder="Secondary Bench-press Antagonist Reps"
          value={input.antagBench2Reps}
          name="antagBench2Reps"
          onChange={handleChange}
          type="number"
          min="1"
          max="12"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Secondary Bench-press Exercise"
          placeholder="Secondary Bench-press Exercise"
          value={input.bench2Name}
          name="bench2Name"
          onChange={handleChange}
          type="text"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Secondary Bench-press Weight"
          placeholder="Secondary Bench-press Weight"
          value={input.bench2Weight}
          name="bench2Weight"
          onChange={handleChange}
          type="number"
          min="0"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Secondary Bench-press Reps"
          placeholder="Secondary Bench-press Reps"
          value={input.bench2Reps}
          name="bench2Reps"
          onChange={handleChange}
          type="number"
          min="1"
          max="12"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Assistance Squat Primer"
          placeholder="Assistance Squat Primer"
          value={input.antagSquat3Name}
          name="antagSquat3Name"
          onChange={handleChange}
          type="text"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Assistance Squat"
          placeholder="Assistance Squat"
          value={input.squat3Name}
          name="squat3Name"
          onChange={handleChange}
          type="text"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Assistance Squat Weight"
          placeholder="Assistance Squat Weight"
          value={input.squat3Weight}
          name="squat3Weight"
          onChange={handleChange}
          type="number"
          min="0"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Assistance Squat Reps"
          placeholder="Assistance Squat Reps"
          value={input.squat3Reps}
          name="squat3Reps"
          onChange={handleChange}
          type="number"
          min="1"
          max="12"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Assistance O.H.P. Antagonist"
          placeholder="Assistance O.H.P. Antagonist"
          value={input.antagOhp3Name}
          name="antagOhp3Name"
          onChange={handleChange}
          type="text"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Assistance O.H.P. Antagonist Weight"
          placeholder="Assistance O.H.P. Antagonist Weight"
          value={input.antagOhp3Weight}
          name="antagOhp3Weight"
          onChange={handleChange}
          type="number"
          min="0"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Assistance O.H.P. Antagonist Reps"
          placeholder="Assistance O.H.P. Antagonist Reps"
          value={input.antagOhp3Reps}
          name="antagOhp3Reps"
          onChange={handleChange}
          type="number"
          min="1"
          max="12"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Assistance O.H.P."
          placeholder="Assistance O.H.P."
          value={input.ohp3Name}
          name="ohp3Name"
          onChange={handleChange}
          type="text"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Assistance O.H.P. Weight"
          placeholder="Assistance O.H.P. Weight"
          value={input.ohp3Weight}
          name="ohp3Weight"
          onChange={handleChange}
          type="number"
          min="0"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Assitance O.H.P. Reps"
          placeholder="Assistance O.H.P. Reps"
          value={input.ohp3Reps}
          name="ohp3Reps"
          onChange={handleChange}
          type="number"
          min="1"
          max="12"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Assistance Deadlift Primer"
          placeholder="Assistance Deadlift Primer"
          value={input.antagDeadlift3Name}
          name="antagDeadlift3Name"
          onChange={handleChange}
          type="text"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Assitance Deadlift"
          placeholder="Assistance Deadlift"
          value={input.deadlift3Name}
          name="deadlift3Name"
          onChange={handleChange}
          type="text"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Assistance Deadlift Weight"
          placeholder="Assistance Deadlift Weight"
          value={input.deadlift3Weight}
          name="deadlift3Weight"
          onChange={handleChange}
          type="number"
          min="0"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Assitance Deadlift Reps"
          placeholder="Assistance Deadlift Reps"
          value={input.deadlift3Reps}
          name="deadlift3Reps"
          onChange={handleChange}
          type="number"
          min="1"
          max="12"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Assitance Bench-press Antagonist Weight"
          placeholder="Assistance Bench-press Antagonist Exercise"
          value={input.antagBench3Name}
          name="antagBench3Name"
          onChange={handleChange}
          type="text"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Assistance Bench-press Antagonist Weight"
          placeholder="Assistance Bench-press Antagonist Weight"
          value={input.antagBench3Weight}
          name="antagBench3Weight"
          onChange={handleChange}
          type="number"
          min="0"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Assitance Bench-press Antagonist Reps"
          placeholder="Assistance Bench-press Antagonist Reps"
          value={input.antagBench3Reps}
          name="antagBench3Reps"
          onChange={handleChange}
          type="number"
          min="1"
          max="12"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Assitance Bench-press"
          placeholder="Assistance Bench-press"
          value={input.bench3Name}
          name="bench3Name"
          onChange={handleChange}
          type="text"
          min="0"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Assistance Bench-press Weight"
          placeholder="Assistance Bench-press Weight"
          value={input.bench3Weight}
          name="bench3Weight"
          onChange={handleChange}
          type="number"
          min="0"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Assistance Bench-press Reps"
          placeholder="Assistance Bench-press Reps"
          value={input.bench3Reps}
          name="bench3Reps"
          onChange={handleChange}
          type="number"
          min="1"
          max="12"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Core 1"
          placeholder="Core 1"
          value={input.core1}
          name="core1"
          onChange={handleChange}
          type="text"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Core 2"
          placeholder="Core 2"
          value={input.core2}
          name="core2"
          onChange={handleChange}
          type="text"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Core 3"
          placeholder="Core 3"
          value={input.core3}
          name="core3"
          onChange={handleChange}
          type="text"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Core 4"
          placeholder="Core 4"
          value={input.core4}
          name="core4"
          onChange={handleChange}
          type="text"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Core 5"
          placeholder="Core 5"
          value={input.core5}
          name="core5"
          onChange={handleChange}
          type="text"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Core 6"
          placeholder="Core 6"
          value={input.core6}
          name="core6"
          onChange={handleChange}
          type="text"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Obliques 1"
          placeholder="Obliques 1"
          value={input.oblique1}
          name="oblique1"
          onChange={handleChange}
          type="text"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Obliques 2"
          placeholder="Obliques 2"
          value={input.oblique2}
          name="oblique2"
          onChange={handleChange}
          type="text"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Obliques 3"
          placeholder="Obliques 3"
          value={input.oblique3}
          name="oblique3"
          onChange={handleChange}
          type="text"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Obliques 4"
          placeholder="Obliques 4"
          value={input.oblique4}
          name="oblique4"
          onChange={handleChange}
          type="text"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Obliques 5"
          placeholder="Obliques 5"
          value={input.oblique5}
          name="oblique5"
          onChange={handleChange}
          type="text"
        />

        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          label="Obliques 6"
          placeholder="Obliques 6"
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
}

export default InputForm
