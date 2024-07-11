import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const TopBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    Employee Management
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default TopBar;
