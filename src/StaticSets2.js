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
  const { circuit } = props.sets
  const ifNoWeight = function (num) {
    if (num === 0) {
      return 'n/a'
    } else {
      return num + ' lb'
    }
  }
  const classes = useStyles()

  if (circuit.intensity === 'Speed') {
    return (
      <div className="circuit-container">
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Exercise</TableCell>
                <TableCell align="right">Weight</TableCell>
                <TableCell align="right">Sets</TableCell>
                <TableCell align="right">Reps</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key='1'>
                <TableCell component="th" scope="row">
                  {circuit.antag.name}
                </TableCell>
                <TableCell align="right">{ifNoWeight(circuit.antag.weight)}</TableCell>
                <TableCell align="right">{circuit.antag.sets}</TableCell>
                <TableCell align="right">{circuit.antag.reps}</TableCell>
              </TableRow>
              <TableRow key='2'>
                <TableCell component="th" scope="row">
                  {circuit.main.name}
                </TableCell>
                <TableCell align="right">{ifNoWeight(circuit.main.weight)}</TableCell>
                <TableCell align="right">{circuit.main.sets}</TableCell>
                <TableCell align="right">{circuit.main.reps}</TableCell>
              </TableRow>
              <TableRow key='2'>
                <TableCell component="th" scope="row">
                  Perform both sets on the top of every minute for 10 minutes
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  } else {
    return (
      <div className="circuit-container">
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Exercise</TableCell>
                <TableCell align="right">Weight</TableCell>
                <TableCell align="right">Sets</TableCell>
                <TableCell align="right">Reps</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key='1'>
                <TableCell component="th" scope="row">
                  {circuit.antag.name}
                </TableCell>
                <TableCell align="right">{ifNoWeight(circuit.antag.weight)}</TableCell>
                <TableCell align="right">{circuit.antag.sets}</TableCell>
                <TableCell align="right">{circuit.antag.reps}</TableCell>
              </TableRow>
              <TableRow key='2'>
                <TableCell component="th" scope="row">
                  {circuit.main.name}
                </TableCell>
                <TableCell align="right">{ifNoWeight(circuit.main.weight)}</TableCell>
                <TableCell align="right">{circuit.main.sets}</TableCell>
                <TableCell align="right">{circuit.main.reps}</TableCell>
              </TableRow>
              <TableRow key='3'>
                <TableCell component="th" scope="row">
                  {circuit.core.name}
                </TableCell>
                <TableCell align="right">{ifNoWeight(circuit.core.weight)}</TableCell>
                <TableCell align="right">{circuit.core.sets}</TableCell>
                <TableCell align="right">10-20</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  }
}
