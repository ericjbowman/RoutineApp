
import React from 'react'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import TemporaryDrawer from './TemporaryDrawer'
import SimpleMenu from './SimpleMenu'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    color: 'white'
  },
  menuButton2: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    color: 'white'
  },
  title: {
    flexGrow: 1
  }
  // purple: {
  //   backgroundColor: '#6540B2'
  // }
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
          <div className="mobile-only">
            { user && <TemporaryDrawer user={user}/>}
          </div>
          <Typography variant="h6" className={classes.title}>
            Lunkedin
          </Typography>
          <div className="no-mobile">
            { user && <Button component={Link} to="/create-input" className={'no-mobile ' + classes.menuButton2}>Create Routine</Button> }
            { user && <Button className={'no-mobile ' + classes.menuButton2} component={Link} to="/routines">My Routines</Button> }
            { user && <Button className={'no-mobile ' + classes.menuButton2} component={Link} to="/progress">Progress</Button> }
          </div>
          { user ? (
            <React.Fragment>
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
            { user && <SimpleMenu/> }
          </React.Fragment> }
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
