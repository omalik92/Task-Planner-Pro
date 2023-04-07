import { ReactElement } from 'react';
import { Grid } from '@mui/material';
import Profile from '../Profile/Profile';
import CreateTaskForm from '../CreateTaskForm/CreateTaskForm';

function Sidebar(): ReactElement {
  return (
    <Grid
      item
      md={4}
      sx={{
        height: '100vh',
        positon: 'fixed',
        right: 0,
        top: 0,
        width: '100%',
        backgroundColor: 'background.paper',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Profile />
      <CreateTaskForm />
    </Grid>
  );
}

export default Sidebar;
