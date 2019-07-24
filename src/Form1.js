import React, { Component, Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
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
    if (this.state.step < 6) {
      this.setState(prevState => ({
        step: (++prevState.step)
      }))
    } else {
      this.setState({ step: 0 })
    }
    console.log(this.state.step)
  }

  render () {
    const { step } = this.state
    const { input, handleSubmit, handleChange, cancelPath, toggleAutoFill } = this.props
    if (step === 0) {
      return (
        <Fragment>
          <div className="form-body">
            <div className="form-container">
              <Paper>
                <div className="form-padding">
                  <form className="form-class" noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <h2 className="center-text">Name Your Routine</h2>
                    <div className="input-container">
                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Routine Name"
                        value={input.routineName}
                        onChange={handleChange}
                        name="routineName"
                        className="name-form"
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
    } if (step === 1) {
      return (
        <Fragment>
          <div className="form-body">
            <div className="form-container">
              <Paper>
                <div className="form-padding">
                  <form className="form-class" noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <h2 className="center-text">Input your Maximums</h2>
                    <div className="input-row">
                      <TextField
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Squat Weight"
                        placeholder="Squat Weight"
                        value={input.squatWeight}
                        name="squatWeight"
                        onChange={handleChange}
                        type="number"
                        min="0"
                        className="half-form"
                        style={{
                          marginTop: '14px',
                          marginBottom: '7px'
                        }}
                      />

                      <TextField
                        id="outlined-name"
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
                        variant="outlined"
                        label="Over-head Press Weight"
                        placeholder="Over-head Press Weight"
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
                        variant="outlined"
                        label="Over-head Press Reps"
                        placeholder="Over-head Press Reps"
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
                        variant="outlined"
                        label="Deadlift Weight"
                        placeholder="Deadlift Weight"
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
                        variant="outlined"
                        label="Deadlift Reps"
                        placeholder="Deadlift Reps"
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
                        variant="outlined"
                        label="Bench-press Weight"
                        placeholder="Bench-press Weight"
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
                        variant="outlined"
                        label="Bench-Press Reps"
                        placeholder="Bench-press Reps"
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
    } if (step === 2) {
      return (
        <Fragment>
          <div className="form-body">
            <div className="form-container">
              <Paper>
                <div>
                  <Button onClick={toggleAutoFill} variant="contained" color="primary">
                    Auto-Fill
                  </Button>
                  <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <h2 className="form-title">Input your Max/Choose exercises</h2>
                    <TextField
                      id="outlined-name"
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
    } if (step === 3) {
      return (
        <Fragment>
          <div className="form-body">
            <div className="form-container">
              <Paper>
                <div className="form-background">
                  <Button onClick={toggleAutoFill} variant="contained" color="primary">
                    Auto-Fill
                  </Button>
                  <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <h2 className="form-title">Input your Max/Choose exercises</h2>
                    <TextField
                      id="outlined-name"
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
              <Paper>
                <div className="form-background">
                  <Button onClick={toggleAutoFill} variant="contained" color="primary">
                    Auto-Fill
                  </Button>
                  <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <h2 className="form-title">Input your Max/Choose exercises</h2>
                    <TextField
                      id="outlined-name"
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
              <Paper>
                <div className="form-background">
                  <Button onClick={toggleAutoFill} variant="contained" color="primary">
                    Auto-Fill
                  </Button>
                  <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <h2 className="form-title">Input your Max/Choose exercises</h2>
                    <TextField
                      id="outlined-name"
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
              <Paper>
                <div className="form-background">
                  <Button onClick={toggleAutoFill} variant="contained" color="primary">
                    Auto-Fill
                  </Button>
                  <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <h2 className="form-title">Input your Max/Choose exercises</h2>
                    <TextField
                      id="outlined-name"
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
                      margin="normal"
                      variant="outlined"
                      label="Obliques 6"
                      placeholder="Obliques 6"
                      value={input.oblique6}
                      name="oblique6"
                      onChange={handleChange}
                      type="text"
                    />
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

export default withRouter(Form1)
