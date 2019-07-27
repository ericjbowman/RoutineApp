import React, { Component, Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Switch from '@material-ui/core/Switch'
import messages from './auth/messages'
import { withSnackbar } from 'notistack'
// import clsx from 'clsx'
// import { makeStyles } from '@material-ui/core/styles'
// import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class Form1 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      step: 0
    }
  }

  nextStep = () => {
    if ((this.state.step < 6) && (this.props.input.routineName !== '')) {
      this.setState(prevState => ({
        step: (++prevState.step)
      }))
    } else {
      this.props.enqueueSnackbar(messages.emptyField, { variant: 'error', autoHideDuration: 2000 })
    }
  }

  nextStep2 = () => {
    if ((this.state.step < 6) &&
    (this.props.input.squatWeight !== null) &&
    (this.props.input.squatReps !== null) &&
    (this.props.input.ohpWeight !== null) &&
    (this.props.input.ohpReps !== null) &&
    (this.props.input.deadliftWeight !== null) &&
    (this.props.input.deadliftReps !== null) &&
    (this.props.input.ohpWeight !== null) &&
    (this.props.input.ohpReps !== null)) {
      this.setState(prevState => ({
        step: (++prevState.step)
      }))
    } else {
      this.props.enqueueSnackbar(messages.emptyField, { variant: 'error', autoHideDuration: 2000 })
    }
  }

  isLessThan13 = () => {
    if ((this.props.input.squatReps < 13 && this.props.input.squatReps > 0) &&
    (this.props.input.ohpReps < 13 && this.props.input.ohpReps > 0) &&
    (this.props.input.deadliftReps < 13 && this.props.input.deadliftReps > 0) &&
    (this.props.input.benchReps < 13 && this.props.input.benchReps > 0)) {
      this.nextStep2()
    } else {
      this.props.enqueueSnackbar(messages.numReps, { variant: 'error', autoHideDuration: 2000 })
    }
  }

  render () {
    const { step } = this.state
    const { input, handleSubmit, handleChange, cancelPath, toggleAutoFill } = this.props
    if (step === 0) {
      return (
        <Fragment>
          <div className="form-body">
            <div className="form-container">
              <Paper style={{ backgroundColor: '#F1F1F1' }}>
                <div className="form-padding">
                  <form className="form-class" noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <Typography component="h1" variant="h5">
                      Name Your Routine
                    </Typography>
                    <div className="input-container">
                      <TextField
                        id="outlined-name"
                        required
                        margin="normal"
                        variant="outlined"
                        label="Routine Name"
                        value={input.routineName}
                        onChange={handleChange}
                        name="routineName"
                        className="title-form"
                        style={{
                          marginBottom: '1em'
                        }}
                      />
                    </div>
                    <Button onClick={this.nextStep} variant="contained" color="primary" style={{
                      marginRight: '1em'
                    }}>
                      Next Step
                    </Button>
                    <Button component={Link} to={cancelPath} variant="contained" color="secondary">
                      Cancel
                    </Button>
                  </form>
                </div>
              </Paper>
            </div>
          </div>
        </Fragment>
      )
    } if (step === 1) {
      return (
        <Fragment>
          <div className="form-body">
            <div className="form-container">
              <Paper style={{ backgroundColor: '#F1F1F1' }}>
                <div className="form-padding">
                  <form className="form-class" noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <Typography component="h1" variant="h5">
                      Input Your Maximum weight in lb. and Reps between 1 and 12
                    </Typography>
                    <div className="input-row">
                      <TextField
                        id="outlined-name"
                        margin="normal"
                        required
                        variant="outlined"
                        label="Squat Weight"
                        value={input.squatWeight}
                        name="squatWeight"
                        onChange={handleChange}
                        type="number"
                        inputProps={{ maxLength: '4' }}
                        min="0"
                        max="12"
                        className="half-form"
                        style={{
                          marginTop: '14px',
                          marginBottom: '7px'
                        }}
                      />

                      <TextField
                        id="outlined-name"
                        margin="normal"
                        required
                        variant="outlined"
                        label="Reps"
                        value={input.squatReps}
                        name="squatReps"
                        onChange={handleChange}
                        type="number"
                        min="1"
                        max="12"
                        className="half-form"
                        style={{
                          marginTop: '14px',
                          marginBottom: '7px'
                        }}
                      />
                    </div>
                    <div className="input-row">
                      <TextField
                        id="outlined-name"
                        margin="normal"
                        required
                        variant="outlined"
                        label="Over-head Press Weight"
                        value={input.ohpWeight}
                        name="ohpWeight"
                        onChange={handleChange}
                        type="number"
                        min="0"
                        className="half-form"
                        style={{
                          marginTop: '7px',
                          marginBottom: '7px'
                        }}
                      />

                      <TextField
                        id="outlined-name"
                        margin="normal"
                        required
                        variant="outlined"
                        label="Reps"
                        value={input.ohpReps}
                        name="ohpReps"
                        onChange={handleChange}
                        type="number"
                        min="1"
                        max="12"
                        className="half-form"
                        style={{
                          marginTop: '7px',
                          marginBottom: '7px'
                        }}
                      />
                    </div>
                    <div className="input-row">
                      <TextField
                        id="outlined-name"
                        margin="normal"
                        required
                        variant="outlined"
                        label="Deadlift Weight"
                        value={input.deadliftWeight}
                        name="deadliftWeight"
                        onChange={handleChange}
                        type="number"
                        min="0"
                        className="half-form"
                        style={{
                          marginTop: '7px',
                          marginBottom: '7px'
                        }}
                      />

                      <TextField
                        id="outlined-name"
                        margin="normal"
                        required
                        variant="outlined"
                        label="Reps"
                        value={input.deadliftReps}
                        name="deadliftReps"
                        onChange={handleChange}
                        type="number"
                        min="1"
                        max="12"
                        className="half-form"
                        style={{
                          marginTop: '7px',
                          marginBottom: '7px'
                        }}
                      />
                    </div>
                    <div className="input-row">
                      <TextField
                        id="outlined-name"
                        margin="normal"
                        required
                        variant="outlined"
                        label="Bench-press Weight"
                        value={input.benchWeight}
                        name="benchWeight"
                        onChange={handleChange}
                        type="number"
                        min="0"
                        className="half-form"
                        style={{
                          marginTop: '7px',
                          marginBottom: '14px'
                        }}
                      />

                      <TextField
                        id="outlined-name"
                        margin="normal"
                        required
                        variant="outlined"
                        label="Reps"
                        value={input.benchReps}
                        name="benchReps"
                        onChange={handleChange}
                        type="number"
                        min="1"
                        max="12"
                        className="half-form"
                        style={{
                          marginTop: '7px',
                          marginBottom: '14px'
                        }}
                      />
                    </div>
                    <Button onClick={this.isLessThan13} variant="contained" color="primary" style={{
                      marginLeft: '7px',
                      marginRight: '7px'
                    }}>
                      Next Step
                    </Button>
                    <Button component={Link} to={cancelPath} variant="contained" color="secondary">
                      Cancel
                    </Button>
                  </form>
                </div>
              </Paper>
            </div>
          </div>
        </Fragment>
      )
    } if (step === 2) {
      return (
        <Fragment>
          <div className="form-body">
            <div className="form-container">
              <Paper style={{ backgroundColor: '#F1F1F1' }}>
                <div className="form-padding">
                  <form className="form-class" noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <Typography component="h1" variant="h5">
                      Squat Variations
                    </Typography>
                    <span>Toggle Auto-Complete Weight/Reps (Default: on)</span>
                    <Switch
                      onChange={toggleAutoFill}
                      label="Toggle Auto-complete"
                    />
                    <div className="input-row">
                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Squat Primer"
                        value={input.antagSquatName}
                        name="antagSquatName"
                        onChange={handleChange}
                        className="third-form"
                      />

                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Squat Primer 2"
                        value={input.antagSquat2Name}
                        name="antagSquat2Name"
                        onChange={handleChange}
                        type="text"
                        className="third-form"
                      />

                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Squat Primer 3"
                        value={input.antagSquat3Name}
                        name="antagSquat3Name"
                        onChange={handleChange}
                        type="text"
                        className="third-form"
                      />
                    </div>
                    <div className="input-row">
                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Squat 2"
                        value={input.squat2Name}
                        name="squat2Name"
                        onChange={handleChange}
                        type="text"
                        className="name-form"
                      />
                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Weight"
                        value={input.squat2Weight}
                        name="squat2Weight"
                        onChange={handleChange}
                        type="number"
                        min="0"
                        className="num-form"
                      />

                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Reps"
                        value={input.squat2Reps}
                        name="squat2Reps"
                        onChange={handleChange}
                        type="number"
                        min="1"
                        max="12"
                        className="num-form"
                      />
                    </div>
                    <div className="input-row">
                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Squat 3"
                        value={input.squat3Name}
                        name="squat3Name"
                        onChange={handleChange}
                        type="text"
                        className="name-form"
                      />

                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Weight"
                        value={input.squat3Weight}
                        name="squat3Weight"
                        onChange={handleChange}
                        type="number"
                        min="0"
                        className="num-form"
                      />

                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Reps"
                        value={input.squat3Reps}
                        name="squat3Reps"
                        onChange={handleChange}
                        type="number"
                        min="1"
                        max="12"
                        className="num-form"
                      />
                    </div>
                    <Button onClick={this.nextStep} variant="contained" color="primary" style={{
                      marginLeft: '7px',
                      marginRight: '7px'
                    }}>
                      Next Step
                    </Button>
                    <Button component={Link} to={cancelPath} variant="contained" color="secondary">
                      Cancel
                    </Button>
                  </form>
                </div>
              </Paper>
            </div>
          </div>
        </Fragment>
      )
    } if (step === 3) {
      return (
        <Fragment>
          <div className="form-body">
            <div className="form-container">
              <Paper style={{ backgroundColor: '#F1F1F1' }}>
                <div className="form-padding">
                  <form className="form-class" noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <Typography component="h1" variant="h5">
                      Bench Press Variations
                    </Typography>
                    <span>Toggle Auto-Complete Weight/Reps (Default: on)</span>
                    <Switch
                      onChange={toggleAutoFill}
                      label="Toggle Auto-complete"
                    />
                    <div className="input-row">
                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Bench Press 2"
                        value={input.bench2Name}
                        name="bench2Name"
                        onChange={handleChange}
                        type="text"
                        className="name-form"
                      />

                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Weight"
                        value={input.bench2Weight}
                        name="bench2Weight"
                        onChange={handleChange}
                        type="number"
                        min="0"
                        className="num-form"
                      />

                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Reps"
                        value={input.bench2Reps}
                        name="bench2Reps"
                        onChange={handleChange}
                        type="number"
                        min="1"
                        max="12"
                        className="num-form"
                      />
                    </div>
                    <div className="input-row">
                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Bench Press 3"
                        value={input.bench3Name}
                        name="bench3Name"
                        onChange={handleChange}
                        type="text"
                        min="0"
                        className="name-form"
                      />

                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Weight"
                        value={input.bench3Weight}
                        name="bench3Weight"
                        onChange={handleChange}
                        type="number"
                        min="0"
                        className="num-form"
                      />

                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Reps"
                        value={input.bench3Reps}
                        name="bench3Reps"
                        onChange={handleChange}
                        type="number"
                        min="1"
                        max="12"
                        className="num-form"
                      />
                    </div>
                    <div className="input-row">
                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Pull"
                        value={input.antagBenchName}
                        name="antagBenchName"
                        onChange={handleChange}
                        type="text"
                        className="name-form"
                      />

                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Weight"
                        value={input.antagBenchWeight}
                        name="antagBenchWeight"
                        onChange={handleChange}
                        type="number"
                        min="0"
                        className="num-form"
                      />

                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Reps"
                        value={input.antagBenchReps}
                        name="antagBenchReps"
                        onChange={handleChange}
                        type="number"
                        min="1"
                        max="12"
                        className="num-form"
                      />
                    </div>
                    <div className="input-row">
                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Pull 2"
                        value={input.antagBench2Name}
                        name="antagBench2Name"
                        onChange={handleChange}
                        type="text"
                        className="name-form"
                      />

                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Weight"
                        value={input.antagBench2Weight}
                        name="antagBench2Weight"
                        onChange={handleChange}
                        type="number"
                        min="0"
                        className="num-form"
                      />

                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Reps"
                        value={input.antagBench2Reps}
                        name="antagBench2Reps"
                        onChange={handleChange}
                        type="number"
                        min="1"
                        max="12"
                        className="num-form"
                      />
                    </div>
                    <div className="input-row">
                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Pull 3"
                        value={input.antagBench3Name}
                        name="antagBench3Name"
                        onChange={handleChange}
                        type="text"
                        className="name-form"
                      />

                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Weight"
                        value={input.antagBench3Weight}
                        name="antagBench3Weight"
                        onChange={handleChange}
                        type="number"
                        min="0"
                        className="num-form"
                      />

                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Reps"
                        value={input.antagBench3Reps}
                        name="antagBench3Reps"
                        onChange={handleChange}
                        type="number"
                        min="1"
                        max="12"
                        className="num-form"
                      />
                    </div>
                    <Button onClick={this.nextStep} variant="contained" color="primary">
                      Next Step
                    </Button>
                    <Button component={Link} to={cancelPath} variant="contained" color="secondary">
                      Cancel
                    </Button>
                  </form>
                </div>
              </Paper>
            </div>
          </div>
        </Fragment>
      )
    } if (step === 4) {
      return (
        <Fragment>
          <div className="form-body">
            <div className="form-container">
              <Paper style={{ backgroundColor: '#F1F1F1' }}>
                <div className="form-padding">
                  <form className="form-class" noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <Typography component="h1" variant="h5">
                      Deadlift Variations
                    </Typography>
                    <span>Toggle Auto-Complete Weight/Reps (Default: on)</span>
                    <Switch
                      onChange={toggleAutoFill}
                      label="Toggle Auto-complete"
                    />
                    <div className="input-row">
                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Deadlift Primer"
                        value={input.antagDeadliftName}
                        name="antagDeadliftName"
                        onChange={handleChange}
                        className="third-form"
                      />

                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Deadlift Primer 2"
                        value={input.antagDeadlift2Name}
                        name="antagDeadlift2Name"
                        onChange={handleChange}
                        type="text"
                        className="third-form"
                      />

                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Deadlift Primer 3"
                        value={input.antagDeadlift3Name}
                        name="antagDeadlift3Name"
                        onChange={handleChange}
                        type="text"
                        className="third-form"
                      />
                    </div>
                    <div className="input-row">
                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Deadlift 2"
                        value={input.deadlift2Name}
                        name="deadlift2Name"
                        onChange={handleChange}
                        type="text"
                        className="name-form"
                      />

                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Weight"
                        value={input.deadlift2Weight}
                        name="deadlift2Weight"
                        onChange={handleChange}
                        type="number"
                        min="0"
                        className="num-form"
                      />

                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Weight"
                        value={input.deadlift2Reps}
                        name="deadlift2Reps"
                        onChange={handleChange}
                        type="number"
                        min="1"
                        max="12"
                        className="num-form"
                      />
                    </div>
                    <div className="input-row">
                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Deadlift 3"
                        value={input.deadlift3Name}
                        name="deadlift3Name"
                        onChange={handleChange}
                        type="text"
                        className="name-form"
                      />

                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Weight"
                        value={input.deadlift3Weight}
                        name="deadlift3Weight"
                        onChange={handleChange}
                        type="number"
                        min="0"
                        className="num-form"
                      />

                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Reps"
                        value={input.deadlift3Reps}
                        name="deadlift3Reps"
                        onChange={handleChange}
                        type="number"
                        min="1"
                        max="12"
                        className="num-form"
                      />
                    </div>
                    <Button onClick={this.nextStep} variant="contained" color="primary">
                      Next Step
                    </Button>
                    <Button component={Link} to={cancelPath} variant="contained" color="secondary">
                      Cancel
                    </Button>
                  </form>
                </div>
              </Paper>
            </div>
          </div>
        </Fragment>
      )
    } if (step === 5) {
      return (
        <Fragment>
          <div className="form-body">
            <div className="form-container">
              <Paper style={{ backgroundColor: '#F1F1F1' }}>
                <div className="form-padding">
                  <form className="form-class" noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <Typography component="h1" variant="h5">
                      Over-head Variations
                    </Typography>
                    <span>Toggle Auto-Complete Weight/Reps (Default: on)</span>
                    <Switch
                      onChange={toggleAutoFill}
                      label="Toggle Auto-complete"
                    />
                    <div className="input-row">
                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="O.H.P. 2"
                        value={input.ohp2Name}
                        name="ohp2Name"
                        onChange={handleChange}
                        type="text"
                        className="name-form"
                      />

                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Weight"
                        value={input.ohp2Weight}
                        name="ohp2Weight"
                        onChange={handleChange}
                        type="number"
                        min="0"
                        className="num-form"
                      />

                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Reps"
                        value={input.ohp2Reps}
                        name="ohp2Reps"
                        onChange={handleChange}
                        type="number"
                        min="1"
                        max="12"
                        className="num-form"
                      />
                    </div>
                    <div className="input-row">
                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="O.H.P. 3"
                        value={input.ohp3Name}
                        name="antagOhp3Name"
                        onChange={handleChange}
                        type="text"
                        className="name-form"
                      />

                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Weight"
                        value={input.antagOhp3Weight}
                        name="antagOhp3Weight"
                        onChange={handleChange}
                        type="number"
                        min="0"
                        className="num-form"
                      />

                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Reps"
                        value={input.antagOhp3Reps}
                        name="antagOhp3Reps"
                        onChange={handleChange}
                        type="number"
                        min="1"
                        max="12"
                        className="num-form"
                      />
                    </div>
                    <div className="input-row">
                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Pull-down"
                        value={input.antagOhpName}
                        name="antagOhpName"
                        onChange={handleChange}
                        type="text"
                        className="name-form"
                      />

                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Weight"
                        value={input.antagOhpWeight}
                        name="antagOhpWeight"
                        onChange={handleChange}
                        type="number"
                        min="0"
                        className="num-form"
                      />

                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Reps"
                        value={input.antagOhpReps}
                        name="antagOhpReps"
                        onChange={handleChange}
                        type="number"
                        min="1"
                        max="12"
                        className="num-form"
                      />
                    </div>
                    <div className="input-row">
                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Pull-down 2"
                        value={input.antagOhp2Name}
                        name="antagOhp2Name"
                        onChange={handleChange}
                        type="text"
                        className="name-form"
                      />

                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Weight"
                        value={input.antagOhp2Weight}
                        name="antagOhp2Weight"
                        onChange={handleChange}
                        type="number"
                        min="0"
                        className="num-form"
                      />

                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Reps"
                        value={input.antagOhp2Reps}
                        name="antagOhp2Reps"
                        onChange={handleChange}
                        type="number"
                        min="1"
                        max="12"
                        className="num-form"
                      />
                    </div>
                    <div className="input-row">
                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Pull-down 3"
                        value={input.antagOhp3Name}
                        name="antagOhp3Name"
                        onChange={handleChange}
                        type="text"
                        className="name-form"
                      />

                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Weight"
                        value={input.antagOhp3Weight}
                        name="antagOhp3Weight"
                        onChange={handleChange}
                        type="number"
                        min="0"
                        className="num-form"
                      />

                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Reps"
                        value={input.antagOhp3Reps}
                        name="antagOhp3Reps"
                        onChange={handleChange}
                        type="number"
                        min="1"
                        max="12"
                        className="num-form"
                      />
                    </div>
                    <Button onClick={this.nextStep} variant="contained" color="primary">
                      Next Step
                    </Button>
                    <Button component={Link} to={cancelPath} variant="contained" color="secondary">
                      Cancel
                    </Button>
                  </form>
                </div>
              </Paper>
            </div>
          </div>
        </Fragment>
      )
    } if (step === 6) {
      return (
        <Fragment>
          <div className="form-body">
            <div className="form-container">
              <Paper style={{ backgroundColor: '#F1F1F1' }}>
                <div className="form-padding">
                  <form className="form-class" noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <Typography component="h1" variant="h5">
                      Core Variations
                    </Typography>
                    <div className="input-row">
                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Core 1"
                        value={input.core1}
                        name="core1"
                        onChange={handleChange}
                        type="text"
                        className="third-form"
                      />

                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Core 2"
                        value={input.core2}
                        name="core2"
                        onChange={handleChange}
                        type="text"
                        className="third-form"
                      />

                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Core 3"
                        value={input.core3}
                        name="core3"
                        onChange={handleChange}
                        type="text"
                        className="third-form"
                      />
                    </div>
                    <div className="input-row">
                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Core 4"
                        value={input.core4}
                        name="core4"
                        onChange={handleChange}
                        type="text"
                        className="third-form"
                      />

                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Core 5"
                        value={input.core5}
                        name="core5"
                        onChange={handleChange}
                        type="text"
                        className="third-form"
                      />

                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Core 6"
                        value={input.core6}
                        name="core6"
                        onChange={handleChange}
                        type="text"
                        className="third-form"
                      />
                    </div>
                    <div className="input-row">
                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Obliques 1"
                        value={input.oblique1}
                        name="oblique1"
                        onChange={handleChange}
                        type="text"
                        className="third-form"
                      />

                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Obliques 2"
                        value={input.oblique2}
                        name="oblique2"
                        onChange={handleChange}
                        type="text"
                        className="third-form"
                      />

                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Obliques 3"
                        value={input.oblique3}
                        name="oblique3"
                        onChange={handleChange}
                        type="text"
                        className="third-form"
                      />
                    </div>
                    <div className="input-row">
                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Obliques 4"
                        value={input.oblique4}
                        name="oblique4"
                        onChange={handleChange}
                        type="text"
                        className="third-form"
                      />

                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Obliques 5"
                        value={input.oblique5}
                        name="oblique5"
                        onChange={handleChange}
                        type="text"
                        className="third-form"
                      />

                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Obliques 6"
                        value={input.oblique6}
                        name="oblique6"
                        onChange={handleChange}
                        type="text"
                        className="third-form"
                      />
                    </div>
                    <Button type="submit" variant="contained" color="primary">
                      Submit
                    </Button>
                    <Button component={Link} to={cancelPath} variant="contained" color="secondary">
                      Cancel
                    </Button>
                  </form>
                </div>
              </Paper>
            </div>
          </div>
        </Fragment>
      )
    }
  }
}

export default withSnackbar(withRouter(Form1))
