import React from 'react'
// import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import IconButton from '@material-ui/core/IconButton'
import PersonIcon from '@material-ui/icons/Person'
import { Link, withRouter } from 'react-router-dom'

function SimpleMenu () {
  const [anchorEl, setAnchorEl] = React.useState(null)

  function handleClick (event) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose () {
    setAnchorEl(null)
  }

  return (
    <div>
      <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <PersonIcon style={{ color: 'white' }}/>
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} component={Link} to="/change-password">Change Password</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/sign-out">Sign Out</MenuItem>
      </Menu>
    </div>
  )
}

export default withRouter(SimpleMenu)
