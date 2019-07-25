
import React from 'react'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import TemporaryDrawer from './TemporaryDrawer'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: 'white'
  },
  title: {
    flexGrow: 1
  }
}))

// const authenticatedOptions = (
//   <React.Fragment>
//     <Button className={classes.menuButton} component={Link} to="/change-password">Change Password</Button>
//     <Button className={classes.menuButton} component={Link} to="/sign-out">Sign Out</Button>
//   </React.Fragment>
// )
//
// const unauthenticatedOptions = (
//   <React.Fragment>
//     <Button className={classes.menuButton} component={Link} to="/sign-up">Sign Up</Button>
//     <Button className={classes.menuButton} component={Link} to="/sign-in">Sign In</Button>
//   </React.Fragment>
// )

// const alwaysOptions = (
//   <React.Fragment>
//     <Button className={classes.menuButton} component={Link} to="/">Home</Button>
//   </React.Fragment>
// )

const Header = ({ user }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <TemporaryDrawer />
          <Typography variant="h6" className={classes.title}>
            Lunkedin
          </Typography>
          { user && <span className={classes.menuButton}>Welcome, {user.email}</span>}
          { user ? (
            <React.Fragment>
              <Button className={classes.menuButton} component={Link} to="/create-input">Create Routine</Button>
              <Button className={classes.menuButton} component={Link} to="/routines">My Routines</Button>
              <Button className={classes.menuButton} component={Link} to="/change-password">Change Password</Button>
              <Button className={classes.menuButton} component={Link} to="/sign-out">Sign Out</Button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Button className={classes.menuButton} component={Link} to="/sign-up">Sign Up</Button>
              <Button className={classes.menuButton} component={Link} to="/sign-in">Sign In</Button>
            </React.Fragment>
          ) }
          { <React.Fragment>
            <Button color="inherit" component={Link} to="/">
              <Icon>home</Icon>
            </Button>
          </React.Fragment> }
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
