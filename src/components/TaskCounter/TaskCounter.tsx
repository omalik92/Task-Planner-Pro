import { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import ITaskCounter from './Interfaces/ITaskCounter';
import Status from '../CreateTaskForm/enums/Status';
import EmitCorrectBorderColor from './helpers/EmitCorrectBorderColor';
import EmitCorrectLabel from './helpers/EmitCorrectLabel';

// eslint-disable-next-line func-names
const TaskCounter: FC<ITaskCounter> = function (props): ReactElement {
  const { status = Status.completed, count = 0 } = props;
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar
        sx={{
          backgroundColor: 'transparent',
          border: '5px solid',
          width: '96px',
          height: '96px',
          marginBottom: '16px',
          borderColor: `${EmitCorrectBorderColor(status)}`,
        }}
      >
        <Typography color="#ffffff" variant="h4">
          {count}
        </Typography>
      </Avatar>
      <Typography
        color="#ffffff"
        fontWeight="bold"
        fontSize="20px"
        variant="h5"
      >
        {EmitCorrectLabel(status)}
      </Typography>
    </Box>
  );
};

TaskCounter.propTypes = {
  count: PropTypes.number,
  status: PropTypes.oneOf([Status.todo, Status.inProgress, Status.completed]),
};

TaskCounter.defaultProps = {
  count: 0,
  status: Status.completed,
};

export default TaskCounter;
