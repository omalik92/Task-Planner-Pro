import { ReactElement } from 'react';
import { Grid } from '@mui/material';
import TaskArea from '../../components/taskArea/taskArea';
import Sidebar from '../../components/Sidebar/Sidebar';

function Dashboard(): ReactElement {
  return (
    <Grid container minHeight="100vh" p={0} m={0}>
      <TaskArea />
      <Sidebar />
    </Grid>
  );
}

export default Dashboard;
