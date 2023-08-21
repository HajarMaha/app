import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from '../views/Login';

export default function Header() {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
  return (
    <BrowserRouter>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" open={open}>
                <Toolbar>
                <IconButton 
                    // size="large"
                    // edge="start"
                    // color="inherit"
                    // aria-label="menu"
                    // sx={{ mr: 2 }}

                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{
                    marginRight: 5,
                    ...(open && { display: 'none' }),
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    Home
                </Typography>
                {/* <Button color="inherit"><Link to="/login">Login</Link></Button> */}
                </Toolbar>
            </AppBar>
        </Box>
        <Routes>
                <Route exact path='/login' element={< Login />}></Route>
        </Routes>
    </BrowserRouter>
  );
}