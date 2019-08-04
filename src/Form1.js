import React, { Component, Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Switch from '@material-ui/core/Switch'
import messages from './auth/messages'
import { withSnackbar } from 'notistack'
import Grid from '@material-ui/core/Grid'
// import clsx from 'clsx'
// import { makeStyles } from '@material-ui/core/styles'
// import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Date from './Date'
import Dropdown from './Dropdown'

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
    const { input, handleSubmit, handleDate, handleChange, handleSelect, cancelPath, toggleAutoFill } = this.props
    if (step === 0) {
      return (
        <Fragment>
          <div className="form-body">
            <div className="form-container">
              <Paper style={{ backgroundColor: '#F1F1F1' }}>
                <div className="form-padding">
                  <form className="form-class" noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <Grid container direction="row" justify="center" spacing={1}>
                      <Grid container direction="row" justify="center" item xs={12} lg={12}>
                        <Typography component="h1" variant="h5">
                          Name Your Routine
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container direction="row" justify="center" spacing={1}>
                      <Grid container direction="row" justify="center" item xs={12} lg={12}>
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
                          // style={{
                          //   marginBottom: '1em'
                          // }}
                        />
                      </Grid>
                      <Grid container direction="row" item xs={12} lg={12} style={{ marginBottom: '2em' }}>
                        <Date
                          label="Created"
                          value={input.created}
                          onChange={handleChange}
                          handleDate={handleDate}
                          name="created"
                          style={{
                            marginBottom: '1em'
                          }}
                        />
                      </Grid>
                    </Grid>
                    <Grid container direction="row" justify="center" spacing={1}>
                      <Grid container direction="row" justify="center" item xs={6} lg={6}>
                        <Button onClick={this.nextStep} variant="contained" color="primary" style={{
                          width: '100%'
                        }}>
                          Next Step
                        </Button>
                      </Grid>
                      <Grid container direction="row" justify="center" item xs={6} lg={6}>
                        <Button component={Link} to={cancelPath} variant="contained" color="secondary" style={{
                          width: '100%'
                        }}>
                          Cancel
                        </Button>
                      </Grid>
                    </Grid>
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
                    <Typography component="h1" variant="subtitle1" style={{ marginBottom: '1em' }}>
                      Input Your Maximum weight in lb. and Reps between 1 and 12
                    </Typography>
                    <Grid container direction="row" justify="center" spacing={1}>
                      <Grid container direction="row" justify="left" item xs={12}>
                        <Typography component="h1" variant="h5">
                          Squat
                        </Typography>
                      </Grid>
                      <Grid container direction="row" justify="center" item xs={6} md={6} lg={6}>
                        <TextField
                          id="outlined-name"
                          margin="normal"
                          required
                          variant="outlined"
                          label="Weight"
                          value={input.squatWeight}
                          name="squatWeight"
                          onChange={handleChange}
                          type="number"
                          inputProps={{ maxLength: '4' }}
                          min="0"
                          max="12"
                          style={{
                            marginTop: '14px',
                            marginBottom: '7px',
                            width: '100%'
                          }}
                        />
                      </Grid>
                      <Grid container direction="row" justify="center" item xs={6} md={6} lg={6}>
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
                          style={{
                            marginTop: '14px',
                            marginBottom: '7px',
                            width: '100%'
                          }}
                        />
                      </Grid>
                    </Grid>
                    <Grid container direction="row" justify="center" spacing={1}>
                      <Grid container direction="row" justify="left" item xs={12}>
                        <Typography component="h1" variant="h5">
                          Over-head Press
                        </Typography>
                      </Grid>
                      <Grid container direction="row" justify="center" item xs={6} md={6} lg={6}>
                        <TextField
                          id="outlined-name"
                          margin="normal"
                          required
                          variant="outlined"
                          label="Weight"
                          value={input.ohpWeight}
                          name="ohpWeight"
                          onChange={handleChange}
                          type="number"
                          min="0"
                          style={{
                            marginTop: '7px',
                            marginBottom: '7px',
                            width: '100%'
                          }}
                        />
                      </Grid>
                      <Grid container direction="row" justify="center" item xs={6} md={6} lg={6}>
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
                          style={{
                            marginTop: '7px',
                            marginBottom: '7px',
                            width: '100%'
                          }}
                        />
                      </Grid>
                    </Grid>
                    <Grid container direction="row" justify="center" spacing={1}>
                      <Grid container direction="row" justify="left" item xs={12}>
                        <Typography component="h1" variant="h5">
                          Deadlift
                        </Typography>
                      </Grid>
                      <Grid container direction="row" justify="center" item xs={6} md={6} lg={6}>
                        <TextField
                          id="outlined-name"
                          margin="normal"
                          required
                          variant="outlined"
                          label="Weight"
                          value={input.deadliftWeight}
                          name="deadliftWeight"
                          onChange={handleChange}
                          type="number"
                          min="0"
                          style={{
                            marginTop: '7px',
                            marginBottom: '7px',
                            width: '100%'
                          }}
                        />
                      </Grid>
                      <Grid container direction="row" justify="center" item xs={6} md={6} lg={6}>
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
                          style={{
                            marginTop: '7px',
                            marginBottom: '7px',
                            width: '100%'
                          }}
                        />
                      </Grid>
                    </Grid>
                    <Grid container direction="row" justify="center" spacing={1}>
                      <Grid container direction="row" justify="left" item xs={12}>
                        <Typography component="h1" variant="h5">
                          Bench Press
                        </Typography>
                      </Grid>
                      <Grid container direction="row" justify="center" item xs={6} md={6} lg={6}>
                        <TextField
                          id="outlined-name"
                          margin="normal"
                          required
                          variant="outlined"
                          label="Weight"
                          value={input.benchWeight}
                          name="benchWeight"
                          onChange={handleChange}
                          type="number"
                          min="0"
                          style={{
                            marginTop: '7px',
                            marginBottom: '14px',
                            width: '100%'
                          }}
                        />
                      </Grid>
                      <Grid container direction="row" justify="center" item xs={6} md={6} lg={6}>
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
                          style={{
                            marginTop: '7px',
                            marginBottom: '14px',
                            width: '100%'
                          }}
                        />
                      </Grid>
                    </Grid>
                    <Grid container direction="row" justify="center" spacing={1}>
                      <Grid container direction="row" justify="center" item xs={6} md={6} lg={6}>
                        <Button onClick={this.isLessThan13} variant="contained" color="primary"
                          style={{
                            width: '100%'
                          }}
                        >Next Step
                        </Button>
                      </Grid>
                      <Grid container direction="row" justify="center" item xs={6} md={6} lg={6}>
                        <Button component={Link} to={cancelPath} variant="contained" color="secondary"
                          style={{
                            width: '100%'
                          }}
                        >Cancel
                        </Button>
                      </Grid>
                    </Grid>
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
                    <Grid container direction="row" justify="center" spacing={1}>
                      <Grid container direction="row" justify="left" item xs={12} md={6} lg={6}>
                        <Typography component="h1" variant="h5">
                          Squat Variations
                        </Typography>
                      </Grid>
                      <Grid container direction="row" justify="right" item xs={12}>
                        <span>Toggle Auto-Complete Weight/Reps</span>
                      </Grid>
                    </Grid>
                    <Grid container direction="row" justify="center" spacing={1}>
                      <Grid container direction="row" justify="right" item xs={12}>
                        <span>On</span>
                        <Switch
                          onChange={toggleAutoFill}
                          label="Toggle Auto-complete"
                        />
                        <span>Off</span>
                      </Grid>
                    </Grid>
                    <Grid container direction="row" justify="center" spacing={1}>
                      <Grid container direction="row" justify="center" item xs={4}>
                        <Dropdown
                          key='1'
                          label="Squat Primer"
                          value={input.antagSquatName}
                          name="antagSquatName"
                          onChange={handleChange}
                          handleSelect={handleSelect}
                        />
                      </Grid>
                      <Grid container direction="row" justify="center" item xs={4}>
                        <Dropdown
                          key='2'
                          label="Squat Primer 2"
                          value={input.antagSquat2Name}
                          name="antagSquat2Name"
                          onChange={handleChange}
                          handleSelect={handleSelect}
                        />
                      </Grid>
                      <Grid container direction="row" justify="center" item xs={4}>
                        <Dropdown
                          key='3'
                          placeholder="Squat Primer 3"
                          id="outlined-name"
                          label="Squat Primer 3"
                          value={input.antagSquat3Name}
                          name="antagSquat3Name"
                          onChange={handleChange}
                          handleSelect={handleSelect}
                        />
                      </Grid>
                    </Grid>
                    <Grid container direction="row" justify="center" spacing={1}>
                      <Grid container direction="row" justify="center" item xs={6} style={{ marginTop: '27px' }}>
                        <Dropdown
                          key='4'
                          label="Squat 2"
                          value={input.squat2Name}
                          weight='squat2Weight'
                          reps='squat2Reps'
                          name="squat2Name"
                          onChange={handleChange}
                          handleSelect={handleSelect}
                        />
                      </Grid>
                      <Grid container direction="row" justify="center" item xs={3}>
                        <TextField
                          key='5'
                          id="outlined-name"
                          margin="normal"
                          label="Weight"
                          value={input.squat2Weight}
                          name="squat2Weight"
                          onChange={handleChange}
                          type="number"
                          min="0"
                          InputLabelProps={{
                            shrink: true
                          }}
                          style={{
                            width: '100%'
                          }}
                        />
                      </Grid>
                      <Grid container direction="row" justify="center" item xs={3}>
                        <TextField
                          key='6'
                          id="outlined-name"
                          margin="normal"
                          label="Reps"
                          value={input.squat2Reps}
                          name="squat2Reps"
                          onChange={handleChange}
                          type="number"
                          min="1"
                          max="12"
                          InputLabelProps={{
                            shrink: true
                          }}
                          style={{
                            width: '100%'
                          }}
                        />
                      </Grid>
                    </Grid>
                    <Grid container direction="row" justify="center" spacing={1}>
                      <Grid container direction="row" justify="center" item xs={6} style={{ marginTop: '27px' }}>
                        <Dropdown
                          key='7'
                          label="Squat 3"
                          value={input.squat3Name}
                          weight='squat3Weight'
                          reps='squat3Reps'
                          name="squat3Name"
                          onChange={handleChange}
                          handleSelect={handleSelect}
                        />
                      </Grid>
                      <Grid container direction="row" justify="center" item xs={3}>
                        <TextField
                          key='8'
                          id="outlined-name"
                          margin="normal"
                          label="Weight"
                          value={input.squat3Weight}
                          name="squat3Weight"
                          onChange={handleChange}
                          type="number"
                          min="0"
                          InputLabelProps={{
                            shrink: true
                          }}
                          style={{
                            width: '100%'
                          }}
                        />
                      </Grid>
                      <Grid container direction="row" justify="center" item xs={3}>
                        <TextField
                          key='9'
                          id="outlined-name"
                          margin="normal"
                          label="Reps"
                          value={input.squat3Reps}
                          name="squat3Reps"
                          onChange={handleChange}
                          type="number"
                          min="1"
                          max="12"
                          InputLabelProps={{
                            shrink: true
                          }}
                          style={{
                            width: '100%'
                          }}
                        />
                      </Grid>
                    </Grid>
                    <Grid container direction="row" justify="center" spacing={1}>
                      <Grid container direction="row" justify="center" item xs={6} md={6} lg={6}>
                        <Button onClick={this.isLessThan13} variant="contained" color="primary"
                          style={{
                            width: '100%'
                          }}
                        >Next Step
                        </Button>
                      </Grid>
                      <Grid container direction="row" justify="center" item xs={6} md={6} lg={6}>
                        <Button component={Link} to={cancelPath} variant="contained" color="secondary"
                          style={{
                            width: '100%'
                          }}
                        >Cancel
                        </Button>
                      </Grid>
                    </Grid>
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
                    <Grid container direction="row" justify="center" spacing={1}>
                      <Grid container direction="row" justify="left" item xs={12} md={6} lg={6}>
                        <Typography component="h1" variant="h5">
                          Bench Press Variations
                        </Typography>
                      </Grid>
                      <Grid container direction="row" justify="right" item xs={12}>
                        <span>Toggle Auto-Complete Weight/Reps</span>
                      </Grid>
                    </Grid>
                    <Grid container direction="row" justify="center" spacing={1}>
                      <Grid container direction="row" justify="right" item xs={12}>
                        <span>On</span>
                        <Switch
                          onChange={toggleAutoFill}
                          label="Toggle Auto-complete"
                        />
                        <span>Off</span>
                      </Grid>
                    </Grid>
                    <Grid container direction="row" justify="center" spacing={1}>
                      <Grid container direction="row" justify="center" item xs={6}>
                        <Dropdown
                          key='10'
                          label="Bench Press 2"
                          value={input.bench2Name}
                          weight='bench2Weight'
                          reps='bench2Reps'
                          name="bench2Name"
                          onChange={handleChange}
                          handleSelect={handleSelect}
                        />
                      </Grid>
                      <Grid container direction="row" justify="center" item xs={3}>
                        <TextField
                          key='11'
                          id="standard-number"
                          label="Weight"
                          value={input.bench2Weight}
                          name="bench2Weight"
                          onChange={handleChange}
                          type="number"
                          margin="normal"
                          InputLabelProps={{
                            shrink: true
                          }}
                          style={{
                            width: '100%'
                          }}
                        />
                      </Grid>
                      <Grid container direction="row" justify="center" item xs={3}>
                        <TextField
                          key='12'
                          id="outlined-name"
                          margin="normal"
                          label="Reps"
                          value={input.bench2Reps}
                          name="bench2Reps"
                          onChange={handleChange}
                          type="number"
                          min="1"
                          max="12"
                          InputLabelProps={{
                            shrink: true
                          }}
                          style={{
                            width: '100%'
                          }}
                        />
                      </Grid>
                    </Grid>
                    <Grid container direction="row" justify="center" spacing={1}>
                      <Grid container direction="row" justify="center" item xs={6}>
                        <Dropdown
                          key='13'
                          label="Bench Press 3"
                          value={input.bench3Name}
                          name="bench3Name"
                          weight='bench3Weight'
                          reps='bench3Reps'
                          onChange={handleChange}
                          handleSelect={handleSelect}
                        />
                      </Grid>
                      <Grid container direction="row" justify="center" item xs={3}>
                        <TextField
                          key='14'
                          label="Weight"
                          value={input.bench3Weight}
                          name="bench3Weight"
                          onChange={handleChange}
                          type="number"
                          min="0"
                          InputLabelProps={{
                            shrink: true
                          }}
                          style={{
                            width: '100%'
                          }}
                        />
                      </Grid>
                      <Grid container direction="row" justify="center" item xs={3}>
                        <TextField
                          key='15'
                          id="outlined-name"
                          margin="normal"
                          label="Reps"
                          value={input.bench3Reps}
                          name="bench3Reps"
                          onChange={handleChange}
                          type="number"
                          min="1"
                          max="12"
                          InputLabelProps={{
                            shrink: true
                          }}
                          style={{
                            width: '100%'
                          }}
                        />
                      </Grid>
                    </Grid>
                    <Grid container direction="row" justify="center" spacing={1}>
                      <Grid container direction="row" justify="center" item xs={6}>
                        <Dropdown
                          key='16'
                          label="Pull"
                          value={input.antagBenchName}
                          name="antagBenchName"
                          weight="antagBenchWeight"
                          reps="antagBenchReps"
                          onChange={handleChange}
                          handleSelect={handleSelect}
                        />
                      </Grid>
                      <Grid container direction="row" justify="center" item xs={3}>
                        <TextField
                          key='17'
                          id="outlined-name"
                          margin="normal"
                          label="Weight"
                          value={input.antagBenchWeight}
                          name="antagBenchWeight"
                          onChange={handleChange}
                          type="number"
                          min="0"
                          InputLabelProps={{
                            shrink: true
                          }}
                          style={{
                            width: '100%'
                          }}
                        />
                      </Grid>
                      <Grid container direction="row" justify="center" item xs={3}>
                        <TextField
                          key='18'
                          id="outlined-name"
                          margin="normal"
                          label="Reps"
                          value={input.antagBenchReps}
                          name="antagBenchReps"
                          onChange={handleChange}
                          type="number"
                          min="1"
                          max="12"
                          InputLabelProps={{
                            shrink: true
                          }}
                          style={{
                            width: '100%'
                          }}
                        />
                      </Grid>
                    </Grid>
                    <Grid container direction="row" justify="center" spacing={1}>
                      <Grid container direction="row" justify="center" item xs={6}>
                        <Dropdown
                          key='19'
                          label="Pull 2"
                          value={input.antagBench2Name}
                          name="antagBench2Name"
                          weight="antagBench2Weight"
                          reps="antagBench2Reps"
                          onChange={handleChange}
                          handleSelect={handleSelect}
                        />
                      </Grid>
                      <Grid container direction="row" justify="center" item xs={3}>
                        <TextField
                          key='20'
                          id="outlined-name"
                          margin="normal"
                          label="Weight"
                          value={input.antagBench2Weight}
                          name="antagBench2Weight"
                          onChange={handleChange}
                          type="number"
                          min="0"
                          InputLabelProps={{
                            shrink: true
                          }}
                          style={{
                            width: '100%'
                          }}
                        />
                      </Grid>
                      <Grid container direction="row" justify="center" item xs={3}>
                        <TextField
                          key='21'
                          id="outlined-name"
                          margin="normal"
                          label="Reps"
                          value={input.antagBench2Reps}
                          name="antagBench2Reps"
                          onChange={handleChange}
                          type="number"
                          min="1"
                          max="12"
                          InputLabelProps={{
                            shrink: true
                          }}
                          style={{
                            width: '100%'
                          }}
                        />
                      </Grid>
                    </Grid>
                    <Grid container direction="row" justify="center" spacing={1}>
                      <Grid container direction="row" justify="center" item xs={6}>
                        <Dropdown
                          key='22'
                          label="Pull 3"
                          value={input.antagBench3Name}
                          name="antagBench3Name"
                          weight="antagBench3Weight"
                          reps="antagBench3Reps"
                          onChange={handleChange}
                          handleSelect={handleSelect}
                        />
                      </Grid>
                      <Grid container direction="row" justify="center" item xs={3}>
                        <TextField
                          key='23'
                          id="outlined-name"
                          margin="normal"
                          label="Weight"
                          value={input.antagBench3Weight}
                          name="antagBench3Weight"
                          onChange={handleChange}
                          type="number"
                          min="0"
                          InputLabelProps={{
                            shrink: true
                          }}
                          style={{
                            width: '100%'
                          }}
                        />
                      </Grid>
                      <Grid container direction="row" justify="center" item xs={3}>
                        <TextField
                          key='24'
                          id="outlined-name"
                          margin="normal"
                          label="Reps"
                          value={input.antagBench3Reps}
                          name="antagBench3Reps"
                          onChange={handleChange}
                          type="number"
                          min="1"
                          max="12"
                          InputLabelProps={{
                            shrink: true
                          }}
                          style={{
                            width: '100%'
                          }}
                        />
                      </Grid>
                    </Grid>
                    <Grid container direction="row" justify="center" spacing={1}>
                      <Grid container direction="row" justify="center" item xs={6} md={6} lg={6}>
                        <Button onClick={this.isLessThan13} variant="contained" color="primary"
                          style={{
                            width: '100%'
                          }}
                        >Next Step
                        </Button>
                      </Grid>
                      <Grid container direction="row" justify="center" item xs={6} md={6} lg={6}>
                        <Button component={Link} to={cancelPath} variant="contained" color="secondary"
                          style={{
                            width: '100%'
                          }}
                        >Cancel
                        </Button>
                      </Grid>
                    </Grid>
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
                    <Grid container direction="row" justify="center" spacing={1}>
                      <Grid container direction="row" justify="left" item xs={12} md={6} lg={6}>
                        <Typography component="h1" variant="h5">
                          Deadlift Variations
                        </Typography>
                      </Grid>
                      <Grid container direction="row" justify="right" item xs={12}>
                        <span>Toggle Auto-Complete Weight/Reps</span>
                      </Grid>
                    </Grid>
                    <div className="input-row">
                      <Dropdown
                        key='25'
                        label="Primer"
                        value={input.antagDeadliftName}
                        name="antagDeadliftName"
                        onChange={handleChange}
                        handleSelect={handleSelect}
                        className="third-form"
                      />

                      <Dropdown
                        key='26'
                        label="Primer 2"
                        value={input.antagDeadlift2Name}
                        name="antagDeadlift2Name"
                        onChange={handleChange}
                        handleSelect={handleSelect}
                        className="third-form"
                      />

                      <Dropdown
                        key='27'
                        label="Primer 3"
                        value={input.antagDeadlift3Name}
                        name="antagDeadlift3Name"
                        onChange={handleChange}
                        handleSelect={handleSelect}
                        className="third-form"
                      />
                    </div>
                    <div className="input-row">
                      <Dropdown
                        key='28'
                        label="Deadlift 2"
                        value={input.deadlift2Name}
                        name="deadlift2Name"
                        weight="deadlift2Weight"
                        reps="deadlift2Reps"
                        onChange={handleChange}
                        handleSelect={handleSelect}
                        type="text"
                        className="name-form"
                      />

                      <TextField
                        key='29'
                        id="outlined-name"
                        margin="normal"

                        label="Weight"
                        value={input.deadlift2Weight}
                        name="deadlift2Weight"
                        onChange={handleChange}
                        type="number"
                        min="0"
                        className="num-form"
                        InputLabelProps={{
                          shrink: true
                        }}
                      />

                      <TextField
                        key='30'
                        id="outlined-name"
                        margin="normal"

                        label="Weight"
                        value={input.deadlift2Reps}
                        name="deadlift2Reps"
                        onChange={handleChange}
                        type="number"
                        min="1"
                        max="12"
                        className="num-form"
                        InputLabelProps={{
                          shrink: true
                        }}
                      />
                    </div>
                    <div className="input-row">
                      <Dropdown
                        key='31'
                        label="Deadlift 3"
                        value={input.deadlift3Name}
                        name="deadlift3Name"
                        weight="deadlift3Weight"
                        reps="deadlift3Reps"
                        onChange={handleChange}
                        handleSelect={handleSelect}
                        className="name-form"
                      />

                      <TextField
                        key='32'
                        id="outlined-name"
                        margin="normal"

                        label="Weight"
                        value={input.deadlift3Weight}
                        name="deadlift3Weight"
                        onChange={handleChange}
                        type="number"
                        min="0"
                        className="num-form"
                        InputLabelProps={{
                          shrink: true
                        }}
                      />

                      <TextField
                        key='33'
                        id="outlined-name"
                        margin="normal"

                        label="Reps"
                        value={input.deadlift3Reps}
                        name="deadlift3Reps"
                        onChange={handleChange}
                        type="number"
                        min="1"
                        max="12"
                        className="num-form"
                        InputLabelProps={{
                          shrink: true
                        }}
                      />
                    </div>
                    <Grid container direction="row" justify="center" spacing={1}>
                      <Grid container direction="row" justify="center" item xs={6} md={6} lg={6}>
                        <Button onClick={this.isLessThan13} variant="contained" color="primary"
                          style={{
                            width: '100%'
                          }}
                        >Next Step
                        </Button>
                      </Grid>
                      <Grid container direction="row" justify="center" item xs={6} md={6} lg={6}>
                        <Button component={Link} to={cancelPath} variant="contained" color="secondary"
                          style={{
                            width: '100%'
                          }}
                        >Cancel
                        </Button>
                      </Grid>
                    </Grid>
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
                    <Grid container direction="row" justify="center" spacing={1}>
                      <Grid container direction="row" justify="left" item xs={12} md={6} lg={6}>
                        <Typography component="h1" variant="h5">
                          Over-head Variations
                        </Typography>
                      </Grid>
                      <Grid container direction="row" justify="right" item xs={12}>
                        <span>Toggle Auto-Complete Weight/Reps</span>
                      </Grid>
                    </Grid>
                    <div className="input-row">
                      <Dropdown
                        key='34'
                        label="O.H.P. 2"
                        value={input.ohp2Name}
                        name="ohp2Name"
                        weight='ohp2Weight'
                        reps="ohp2Reps"
                        onChange={handleChange}
                        handleSelect={handleSelect}
                        className="name-form"
                      />

                      <TextField
                        key='35'
                        id="outlined-name"
                        margin="normal"

                        label="Weight"
                        value={input.ohp2Weight}
                        name="ohp2Weight"
                        onChange={handleChange}
                        type="number"
                        min="0"
                        className="num-form"
                        InputLabelProps={{
                          shrink: true
                        }}
                      />

                      <TextField
                        key='36'
                        id="outlined-name"
                        margin="normal"

                        label="Reps"
                        value={input.ohp2Reps}
                        name="ohp2Reps"
                        onChange={handleChange}
                        type="number"
                        min="1"
                        max="12"
                        className="num-form"
                        InputLabelProps={{
                          shrink: true
                        }}
                      />
                    </div>
                    <div className="input-row">
                      <Dropdown
                        key='37'
                        label="O.H.P. 3"
                        value={input.ohp3Name}
                        name="ohp3Name"
                        weight='ohp3Weight'
                        reps="ohp3Reps"
                        onChange={handleChange}
                        handleSelect={handleSelect}
                        type="text"
                        className="name-form"
                      />

                      <TextField
                        key='38'
                        id="outlined-name"
                        margin="normal"

                        label="Weight"
                        value={input.ohp3Weight}
                        name="ohp3Weight"
                        onChange={handleChange}
                        type="number"
                        min="0"
                        className="num-form"
                        InputLabelProps={{
                          shrink: true
                        }}
                      />

                      <TextField
                        key='39'
                        id="outlined-name"
                        margin="normal"

                        label="Reps"
                        value={input.ohp3Reps}
                        name="ohp3Reps"
                        onChange={handleChange}
                        type="number"
                        min="1"
                        max="12"
                        className="num-form"
                        InputLabelProps={{
                          shrink: true
                        }}
                      />
                    </div>
                    <div className="input-row">
                      <Dropdown
                        key='40'
                        label="Pull-down"
                        value={input.antagOhpName}
                        name="antagOhpName"
                        weight="antagOhpWeight"
                        reps="antagOhpReps"
                        onChange={handleChange}
                        handleSelect={handleSelect}
                        className="name-form"
                      />

                      <TextField
                        key='41'
                        id="outlined-name"
                        margin="normal"

                        label="Weight"
                        value={input.antagOhpWeight}
                        name="antagOhpWeight"
                        onChange={handleChange}
                        type="number"
                        min="0"
                        className="num-form"
                        InputLabelProps={{
                          shrink: true
                        }}
                      />

                      <TextField
                        key='42'
                        id="outlined-name"
                        margin="normal"

                        label="Reps"
                        value={input.antagOhpReps}
                        name="antagOhpReps"
                        onChange={handleChange}
                        type="number"
                        min="1"
                        max="12"
                        className="num-form"
                        InputLabelProps={{
                          shrink: true
                        }}
                      />
                    </div>
                    <div className="input-row">
                      <Dropdown
                        key='43'
                        label="Pull-down 2"
                        value={input.antagOhp2Name}
                        name="antagOhp2Name"
                        weight="antagOhp2Weight"
                        reps="antagOhp2Reps"
                        onChange={handleChange}
                        handleSelect={handleSelect}
                        className="name-form"
                      />

                      <TextField
                        key='44'
                        id="outlined-name"
                        margin="normal"
                        label="Weight"
                        value={input.antagOhp2Weight}
                        name="antagOhp2Weight"
                        onChange={handleChange}
                        type="number"
                        min="0"
                        className="num-form"
                        InputLabelProps={{
                          shrink: true
                        }}
                      />

                      <TextField
                        key='45'
                        id="outlined-name"
                        margin="normal"
                        label="Reps"
                        value={input.antagOhp2Reps}
                        name="antagOhp2Reps"
                        onChange={handleChange}
                        type="number"
                        min="1"
                        max="12"
                        className="num-form"
                        InputLabelProps={{
                          shrink: true
                        }}
                      />
                    </div>
                    <div className="input-row">
                      <Dropdown
                        key='46'
                        label="Pull-down 3"
                        value={input.antagOhp3Name}
                        name="antagOhp3Name"
                        weight="antagOhp3Weight"
                        reps="antagOhp3Reps"
                        onChange={handleChange}
                        handleSelect={handleSelect}
                        className="name-form"
                      />

                      <TextField
                        key='47'
                        id="outlined-name"
                        margin="normal"
                        label="Weight"
                        value={input.antagOhp3Weight}
                        name="antagOhp3Weight"
                        onChange={handleChange}
                        type="number"
                        min="0"
                        className="num-form"
                        InputLabelProps={{
                          shrink: true
                        }}
                      />

                      <TextField
                        key='48'
                        id="outlined-name"
                        margin="normal"
                        label="Reps"
                        value={input.antagOhp3Reps}
                        name="antagOhp3Reps"
                        onChange={handleChange}
                        type="number"
                        min="1"
                        max="12"
                        className="num-form"
                        InputLabelProps={{
                          shrink: true
                        }}
                      />
                    </div>
                    <Grid container direction="row" justify="center" spacing={1}>
                      <Grid container direction="row" justify="center" item xs={6} md={6} lg={6}>
                        <Button onClick={this.isLessThan13} variant="contained" color="primary"
                          style={{
                            width: '100%'
                          }}
                        >Next Step
                        </Button>
                      </Grid>
                      <Grid container direction="row" justify="center" item xs={6} md={6} lg={6}>
                        <Button component={Link} to={cancelPath} variant="contained" color="secondary"
                          style={{
                            width: '100%'
                          }}
                        >Cancel
                        </Button>
                      </Grid>
                    </Grid>
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
                    <Grid container direction="row" justify="center" spacing={1}>
                      <Grid container direction="row" justify="center" item xs={6} md={6} lg={6}>
                        <Button type="submit" variant="contained" color="primary"
                          style={{
                            width: '100%'
                          }}
                        >Submit
                        </Button>
                      </Grid>
                      <Grid container direction="row" justify="center" item xs={6} md={6} lg={6}>
                        <Button component={Link} to={cancelPath} variant="contained" color="secondary"
                          style={{
                            width: '100%'
                          }}
                        >Cancel
                        </Button>
                      </Grid>
                    </Grid>
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
