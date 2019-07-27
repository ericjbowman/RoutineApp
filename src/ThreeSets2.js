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
    minWidth: 100
  },
  head: {
    backgroundColor: '#4054b2',
    color: theme.palette.common.white
  }
}))

export default function SimpleTable (props) {
  const { circuit, antagCircuit } = props.sets
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

  return (
    <React.Fragment>
      <Grid container direction="row" justify="center" spacing={1}>
        <Grid direction="row" justify="center" item xs={12} md={4}>
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead className={classes.head}>
                <TableRow className={classes.head}>
                  <TableCell className={classes.head}>Set 1: Exercise</TableCell>
                  <TableCell className={classes.head} align="right">Weight</TableCell>
                  <TableCell className={classes.head} align="right">Reps</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow key='1'>
                  <TableCell component="th" scope="row">
                    {circuit.antag.name}
                  </TableCell>
                  <TableCell align="right">{ifNoWeight(antagCircuit.antag.weight[0])}</TableCell>
                  <TableCell align="right">{ifNoReps(antagCircuit.antag.reps[0])}</TableCell>
                </TableRow>
                <TableRow key='2'>
                  <TableCell component="th" scope="row">
                    {circuit.main.name}
                  </TableCell>
                  <TableCell align="right">{ifNoWeight(circuit.main.weight[0])}</TableCell>
                  <TableCell align="right">{ifNoReps(circuit.main.reps[0])}</TableCell>
                </TableRow>
                <TableRow key='2'>
                  <TableCell component="th" scope="row">
                    {circuit.core.name}
                  </TableCell>
                  <TableCell align="right">n/a</TableCell>
                  <TableCell align="right">10-20</TableCell>
                </TableRow>
                <TableRow key='2'>
                  <TableCell component="th" scope="row">
                    90 Seconds Rest
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </Grid>
        <Grid direction="row" justify="center" item xs={12} md={4}>
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead className={classes.head}>
                <TableRow className={classes.head}>
                  <TableCell className={classes.head}>Set 2: Exercise</TableCell>
                  <TableCell className={classes.head} align="right">Weight</TableCell>
                  <TableCell className={classes.head} align="right">Reps</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow key='1'>
                  <TableCell component="th" scope="row">
                    {circuit.antag.name}
                  </TableCell>
                  <TableCell align="right">{ifNoWeight(antagCircuit.antag.weight[1])}</TableCell>
                  <TableCell align="right">{ifNoReps(antagCircuit.antag.reps[1])}</TableCell>
                </TableRow>
                <TableRow key='2'>
                  <TableCell component="th" scope="row">
                    {circuit.main.name}
                  </TableCell>
                  <TableCell align="right">{ifNoWeight(circuit.main.weight[1])}</TableCell>
                  <TableCell align="right">{ifNoReps(circuit.main.reps[1])}</TableCell>
                </TableRow>
                <TableRow key='2'>
                  <TableCell component="th" scope="row">
                    {circuit.core.name}
                  </TableCell>
                  <TableCell align="right">n/a</TableCell>
                  <TableCell align="right">10-20</TableCell>
                </TableRow>
                <TableRow key='2'>
                  <TableCell component="th" scope="row">
                    90 Seconds Rest
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </Grid>
        <Grid direction="row" justify="center" item xs={12} md={4}>
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead className={classes.head}>
                <TableRow className={classes.head}>
                  <TableCell className={classes.head}>Set 3: Exercise</TableCell>
                  <TableCell className={classes.head} align="right">Weight</TableCell>
                  <TableCell className={classes.head} align="right">Reps</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow key='1'>
                  <TableCell component="th" scope="row">
                    {circuit.antag.name}
                  </TableCell>
                  <TableCell align="right">{ifNoWeight(antagCircuit.antag.weight[2])}</TableCell>
                  <TableCell align="right">{ifNoReps(antagCircuit.antag.reps[2])}</TableCell>
                </TableRow>
                <TableRow key='2'>
                  <TableCell component="th" scope="row">
                    {circuit.main.name}
                  </TableCell>
                  <TableCell align="right">{ifNoWeight(circuit.main.weight[2])}</TableCell>
                  <TableCell align="right">{ifNoReps(circuit.main.reps[2])}</TableCell>
                </TableRow>
                <TableRow key='2'>
                  <TableCell component="th" scope="row">
                    {circuit.core.name}
                  </TableCell>
                  <TableCell align="right">n/a</TableCell>
                  <TableCell align="right">10-20</TableCell>
                </TableRow>
                <TableRow key='2'>
                  <TableCell component="th" scope="row">
                    90 Seconds Rest
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
