import React from 'react';
import { List, ListItem, ListItemText, Divider } from '@mui/material';

const SideBar = ({ onTabClick }) => {
    return (
        <div style={{ width: '151px', background: '#7fa6c1', height: '100vh' }}>
            <List component="nav">
                <ListItem button onClick={() => onTabClick('employee')}>
                    <ListItemText primary="Employee" />
                </ListItem>
                <Divider />
                <ListItem button onClick={() => onTabClick('vendor')}>
                    <ListItemText primary="Vendor" />
                </ListItem>
            </List>
        </div>
    );
};

export default SideBar;
