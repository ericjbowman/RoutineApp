import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 700,
    margin: theme.spacing(1),
    overflowX: 'auto'
  },
  table: {
    minWidth: 50
  },
  head: {
    backgroundColor: theme.palette.common.black,
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
      <div className="circuit-container">
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Exercise</TableCell>
                <TableCell align="right">Weight</TableCell>
                <TableCell align="right">Reps</TableCell>
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
            </TableBody>
          </Table>
        </Paper>
      </div>
      <div className="circuit-container">
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Exercise</TableCell>
                <TableCell align="right">Weight</TableCell>
                <TableCell align="right">Reps</TableCell>
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
            </TableBody>
          </Table>
        </Paper>
      </div>
      <div className="circuit-container">
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Exercise</TableCell>
                <TableCell align="right">Weight</TableCell>
                <TableCell align="right">Reps</TableCell>
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
            </TableBody>
          </Table>
        </Paper>
      </div>
    </React.Fragment>
  )
}
