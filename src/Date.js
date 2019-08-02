import 'date-fns'
import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers'

const useStyles = makeStyles({
  grid: {
    width: '50%'
  }
})

export default function MaterialUIPickers (props) {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date())

  const classes = useStyles()

  function handleDateChange (date) {
    setSelectedDate(date)
    props.handleDate(date.toJSON().slice(0, 10))
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container className={classes.grid}>
        <KeyboardDatePicker
          margin="normal"
          id="mui-pickers-date"
          label="Date picker"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date'
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  )
}
