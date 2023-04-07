import { FC, ReactElement } from 'react';
import { Typography, Box } from '@mui/material';
import Prop_Types from 'prop-types';
import ITaskDescription from './interfaces/ITaskDescription';

// eslint-disable-next-line func-names
const TaskDescription: FC<ITaskDescription> = function (props): ReactElement {
  const { description = 'Loren ipsum dolor sit amet' } = props;
  return (
    <Box>
      <Typography>{description}</Typography>
    </Box>
  );
};

TaskDescription.propTypes = {
  description: Prop_Types.string,
};

TaskDescription.defaultProps = {
  description: 'Lorem ipsum dolor sit amet',
};

export default TaskDescription;
