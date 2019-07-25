import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
})

export default function TemporaryDrawer () {
  const classes = useStyles()
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  })

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setState({ ...state, [side]: open })
  }

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem button key="Create Routine">
          <ListItemText primary="Create Routine" component={Link} to="/create-input"/>
        </ListItem>
        <ListItem button key="My Routines">
          <ListItemText primary="My Routines" component={Link} to="/routines"/>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key="Change Password">
          <ListItemText primary="Change Password" component={Link} to="/change-password"/>
        </ListItem>
        <ListItem button key="Sign Out">
          <ListItemText primary="Sign Out" component={Link} to="/sign-out"/>
        </ListItem>
      </List>
    </div>
  )

  const fullList = side => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem button key="Create Routine">
          <ListItemText primary="Create Routine" component={Link} to="/create-input"/>
        </ListItem>
        <ListItem button key="My Routines">
          <ListItemText primary="My Routines" component={Link} to="/routines"/>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key="Change Password">
          <ListItemText primary="Change Password" component={Link} to="/change-password"/>
        </ListItem>
        <ListItem button key="Sign Out">
          <ListItemText primary="Sign Out" component={Link} to="/sign-out"/>
        </ListItem>
      </List>
    </div>
  )

  return (
    <div>
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
        <MenuIcon onClick={toggleDrawer('left', true)}/>
      </IconButton>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
      <Drawer anchor="top" open={state.top} onClose={toggleDrawer('top', false)}>
        {fullList('top')}
      </Drawer>
      <Drawer anchor="bottom" open={state.bottom} onClose={toggleDrawer('bottom', false)}>
        {fullList('bottom')}
      </Drawer>
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        {sideList('right')}
      </Drawer>
    </div>
  )
}
