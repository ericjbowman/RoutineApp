import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
    overflowX: 'auto'
  },
  table: {
    minWidth: 50
  },
  head: {
    backgroundColor: '#B29E40',
    color: theme.palette.common.white,
    paddingRight: '20px'
  },
  cell: {
    paddingRight: '20px'
  }
}))

export default function SimpleTable (props) {
  const { circuit } = props.sets
  const ifNoWeight = function (num) {
    if ((num === 0) || isNaN(num)) {
      return 'n/a'
    } else {
      return num + ' lb'
    }
  }
  const ifNoReps = function (num) {
    if ((num === 0) || isNaN(num)) {
      return 'n/a'
    } else {
      return num
    }
  }
  const classes = useStyles()

  if (circuit.intensity === 'Speed') {
    return (
      <Grid container direction="row" justify="center">
        <Grid container direction="row" justify="center" item xs={12} lg={8}>
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead className={classes.head}>
                <TableRow className={classes.head}>
                  <TableCell className={classes.head}>Exercise</TableCell>
                  <TableCell className={classes.head} align="right">Weight</TableCell>
                  <TableCell className={classes.head} align="right">Sets</TableCell>
                  <TableCell className={classes.head} align="right">Reps</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow key='1'>
                  <TableCell component="th" scope="row">
                    {circuit.antag.name}
                  </TableCell>
                  <TableCell className={classes.cell} align="right">{ifNoWeight(circuit.antag.weight)}</TableCell>
                  <TableCell className={classes.cell} align="right">{circuit.antag.sets}</TableCell>
                  <TableCell className={classes.cell} align="right">{ifNoReps(circuit.antag.reps)}</TableCell>
                </TableRow>
                <TableRow key='2'>
                  <TableCell component="th" scope="row">
                    {circuit.main.name}
                  </TableCell>
                  <TableCell className={classes.cell} align="right">{ifNoWeight(circuit.main.weight)}</TableCell>
                  <TableCell className={classes.cell} align="right">{circuit.main.sets}</TableCell>
                  <TableCell className={classes.cell} align="right">{ifNoReps(circuit.main.reps)}</TableCell>
                </TableRow>
                <TableRow key='2'>
                  <TableCell component="th" scope="row">
                    Perform both sets on the top of every minute for 10 minutes
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    )
  } else {
    return (
      <Grid container direction="row" justify="center">
        <Grid container direction="row" justify="center" item xs={12} lg={8}>
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead className={classes.head}>
                <TableRow className={classes.head}>
                  <TableCell className={classes.head}>Exercise</TableCell>
                  <TableCell className={classes.head} align="right">Weight</TableCell>
                  <TableCell className={classes.head} align="right">Sets</TableCell>
                  <TableCell className={classes.head} align="right">Reps</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow key='1'>
                  <TableCell className={classes.cell} component="th" scope="row">
                    {circuit.antag.name}
                  </TableCell>
                  <TableCell className={classes.cell} align="right">{ifNoWeight(circuit.antag.weight)}</TableCell>
                  <TableCell className={classes.cell} align="right">{circuit.antag.sets}</TableCell>
                  <TableCell className={classes.cell} align="right">{ifNoReps(circuit.antag.reps)}</TableCell>
                </TableRow>
                <TableRow key='2'>
                  <TableCell component="th" scope="row">
                    {circuit.main.name}
                  </TableCell>
                  <TableCell className={classes.cell} align="right">{ifNoWeight(circuit.main.weight)}</TableCell>
                  <TableCell className={classes.cell} align="right">{circuit.main.sets}</TableCell>
                  <TableCell className={classes.cell} align="right">{ifNoReps(circuit.main.reps)}</TableCell>
                </TableRow>
                <TableRow key='3'>
                  <TableCell className={classes.cell} component="th" scope="row">
                    {circuit.core.name}
                  </TableCell>
                  <TableCell className={classes.cell} align="right">{ifNoWeight(circuit.core.weight)}</TableCell>
                  <TableCell className={classes.cell} align="right">{circuit.core.sets}</TableCell>
                  <TableCell className={classes.cell} align="right">10-20</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    )
  }
}
