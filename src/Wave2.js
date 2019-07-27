import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { withRouter, Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3),
    // marginLeft: theme.spacing(1.5),
    // marginRight: theme.spacing(1.5),
    // maxWidth: 300,
    overflowX: 'auto',
    backgroundColor: '#4054b2'
  },
  table: {
    maxWidth: 700
    // display: 'flex',
    // justifyContent: 'center'
  },
  head: {
    backgroundColor: '#4054b2',
    color: theme.palette.common.white
    // paddingRight: '0px',
    // paddingLeft: '0px'
  },
  body: {
    backgroundColor: 'white'
  },
  cell: {
    // paddingRight: '0px',
    // paddingLeft: '0px'
  }
}))

function SimpleTable (props) {
  const classes = useStyles()
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead className={classes.head}>
          <TableRow className={classes.head}>
            <TableCell className={classes.head} align="left">Wave {props.number}</TableCell>
            <TableCell className={classes.head} align="center"></TableCell>
            <TableCell className={classes.head} align="center"></TableCell>
            <TableCell className={classes.head} align="center"></TableCell>
            <TableCell className={classes.head} align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody className={classes.body}>
          <TableRow key='1'>
            <TableCell className={classes.cell} align="left" scope="row">
              Week 1
            </TableCell>
            <TableCell className={classes.cell} align="center"><Link to={{
              pathname: `/days/${props.number}-1`,
              state: {
                fromWave: props.wave.week1.day1,
                fromWave1: props.wave1.week1.day1
              }
            }}>Day 1
            </Link></TableCell>
            <TableCell className={classes.cell} align="center"><Link to={{
              pathname: `/days/${props.number}-2`,
              state: {
                fromWave: props.wave.week1.day2,
                fromWave1: props.wave1.week1.day2
              }
            }}>Day 2
            </Link></TableCell>
            <TableCell className={classes.cell} align="center"><Link to={{
              pathname: `/days/${props.number}-3`,
              state: {
                fromWave: props.wave.week1.day3,
                fromWave1: props.wave1.week1.day3
              }
            }}>Day 3
            </Link></TableCell>
            <TableCell className={classes.cell} align="center"><Link to={{
              pathname: `/days/${props.number}-4`,
              state: {
                fromWave: props.wave.week1.day4,
                fromWave1: props.wave1.week1.day4
              }
            }}>Day 4
            </Link></TableCell>
          </TableRow>
          <TableRow key='3'>
            <TableCell className={classes.cell} align="left" component="th" scope="row">
              Week 2
            </TableCell>
            <TableCell className={classes.cell} align="center"><Link to={{
              pathname: `/days/${props.number}-5`,
              state: {
                fromWave: props.wave.week2.day1,
                fromWave1: props.wave1.week2.day1
              }
            }}>Day 1
            </Link></TableCell>
            <TableCell className={classes.cell} align="center"><Link to={{
              pathname: `/days/${props.number}-6`,
              state: {
                fromWave: props.wave.week2.day2,
                fromWave1: props.wave1.week2.day2
              }
            }}>Day 2
            </Link></TableCell>
            <TableCell className={classes.cell} align="center"><Link to={{
              pathname: `/days/${props.number}-7`,
              state: {
                fromWave: props.wave.week2.day3,
                fromWave1: props.wave1.week2.day3
              }
            }}>Day 3
            </Link></TableCell>
            <TableCell className={classes.cell} align="center"><Link to={{
              pathname: `/days/${props.number}-8`,
              state: {
                fromWave: props.wave.week2.day4,
                fromWave1: props.wave1.week2.day4
              }
            }}>Day 4
            </Link></TableCell>
          </TableRow>
          <TableRow key='3'>
            <TableCell className={classes.cell} align="left" component="th" scope="row">
              Week 3
            </TableCell>
            <TableCell className={classes.cell} align="center"><Link to={{
              pathname: `/days/${props.number}-9`,
              state: {
                fromWave: props.wave.week3.day1,
                fromWave1: props.wave1.week3.day1
              }
            }}>Day 1
            </Link></TableCell>
            <TableCell className={classes.cell} align="center"><Link to={{
              pathname: `/days/${props.number}-10`,
              state: {
                fromWave: props.wave.week3.day2,
                fromWave1: props.wave1.week3.day2
              }
            }}>Day 2
            </Link></TableCell>
            <TableCell className={classes.cell} align="center"><Link to={{
              pathname: `/days/${props.number}-11`,
              state: {
                fromWave: props.wave.week3.day3,
                fromWave1: props.wave1.week3.day3
              }
            }}>Day 3
            </Link></TableCell>
            <TableCell className={classes.cell} align="center"><Link to={{
              pathname: `/days/${props.number}-12`,
              state: {
                fromWave: props.wave.week3.day4,
                fromWave1: props.wave1.week3.day4
              }
            }}>Day 4
            </Link></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  )
}

export default withRouter(SimpleTable)
