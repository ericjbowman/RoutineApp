import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
// import Paper from '@material-ui/core/Paper'
import SimpleTable from './Wave2'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
    // maxWidth: '700px'
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightRegular
  },
  icon: {
    color: 'white'
  },
  details: {
    padding: 0,
    margin: 0
  }
}))

export default function WaveExpansion (props) {
  const classes = useStyles()
  const { wave, wave1, number } = props
  return (
    <ExpansionPanel className={classes.root}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon className={classes.icon}/>}
        aria-controls="panel1a-content"
        id="panel1a-header"
        style={{ background: '#4054b2', color: 'white' }}
      >
        <Typography className={classes.heading}>Wave {props.number}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.details}>
        <SimpleTable wave={wave} number={number} wave1={wave1}/>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}
