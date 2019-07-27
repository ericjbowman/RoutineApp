import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
// import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import SimpleTable from './Wave2'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightRegular
  },
  icon: {
    color: 'white'
  }
}))

export default function SimpleExpansionPanel (props) {
  const classes = useStyles()
  const { routine, id, deleteRoutine } = props
  return (
    <ExpansionPanel style={{ background: 'rgba(0, 0, 0, 0.8)', color: 'white' }}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon className={classes.icon}/>}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>{props.routine.title}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div>
          <div className="routine-header-container">
            <Button style={{ marginRight: '0.5em' }} component={Link} to={{
              pathname: '/edit-input',
              state: {
                id: id
              }
            }} variant="contained" color="primary">
              Edit
            </Button>
            <Button style={{ marginLeft: '0.5em' }} onClick={deleteRoutine} variant="contained" color="secondary">Delete</Button>
          </div>
          <Grid container direction="row" justify="center" spacing={1}>
            <Grid style={{ display: 'flex', justifyContent: 'center' }} direction="row" justify="center" item xs={12} md={6}>
              <SimpleTable wave={routine.wave1} number='1' wave1={routine.wave1}/>
            </Grid>
            <Grid style={{ display: 'flex', justifyContent: 'center' }} direction="row" justify="center" item xs={12} md={6}>
              <SimpleTable wave={routine.wave2} number='2'wave1={routine.wave1}/>
            </Grid>
            <Grid style={{ display: 'flex', justifyContent: 'center' }} direction="row" justify="center" item xs={12} md={6}>
              <SimpleTable wave={routine.wave3} number='3'wave1={routine.wave1}/>
            </Grid>
            <Grid style={{ display: 'flex', justifyContent: 'center' }} direction="row" justify="center" item xs={12} md={6}>
              <SimpleTable wave={routine.wave4} number='4'wave1={routine.wave1}/>
            </Grid>
          </Grid>
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}
