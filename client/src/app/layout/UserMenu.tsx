import { Avatar, Box, Divider, ListItemIcon, ListItemText } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import useAccount from '../../lib/hooks/useAccount';
import { Link } from 'react-router';
import { Add, Logout, Person } from '@mui/icons-material';

export default function UserMenu() {
    const { currentUser, logoutUser } = useAccount();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button
                onClick={handleClick}
                color='inherit'
                size='large'
                sx={{ fontSize: '1.1rem' }}
            >
                <Box display='flex' alignItems='center' gap={2}>
                    <Avatar />
                    {currentUser?.displayName}
                </Box>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem component={Link} to='/createActivity' onClick={handleClose}>
                    <ListItemIcon>
                        <Add />
                        <ListItemText>Create Activity</ListItemText>
                    </ListItemIcon>
                </MenuItem>
                <MenuItem component={Link} to='/profile' onClick={handleClose}>
                    <ListItemIcon>
                        <Person />
                        <ListItemText>My profile</ListItemText>
                    </ListItemIcon>
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => {
                    logoutUser.mutate();
                    handleClose();
                }}>
                    <ListItemIcon>
                        <Logout />
                        <ListItemText>Logout</ListItemText>
                    </ListItemIcon>
                </MenuItem>
            </Menu>
        </ >
    );
}
