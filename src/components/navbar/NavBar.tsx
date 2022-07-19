import React from 'react'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import QuizIcon from "@mui/icons-material/Quiz";
import DarkModeIcon from '@mui/icons-material/DarkMode'

function NavBar() {
  return (
   <AppBar position='static' color='default'>
    <Toolbar>
        <QuizIcon fontSize='large' />
        <Typography variant='h4' component="div" sx={{ flexGrow:1,fontWeight:900 }}> Jedi Quiz </Typography>
        <IconButton  size='large'  color='inherit' aria-label='darkModeIcon' sx={{mr:2}}>
            <DarkModeIcon/>
        </IconButton>
    </Toolbar>
   </AppBar>
  )
}

export default NavBar;
