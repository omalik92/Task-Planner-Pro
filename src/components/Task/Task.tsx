import { FC, ReactElement } from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import TaskHeader from './_TaskHeader';
import TaskDescription from './_TaskDescription';
import TaskFooter from './_TaskFooter';
import ITask from './interfaces/ITask';
import Status from '../CreateTaskForm/enums/Status';
import Priority from '../CreateTaskForm/enums/Priority';
import RenderPriorityBorder from './helper/RenderPriorityBorder';

// eslint-disable-next-line func-names
const Task: FC<ITask> = function (props): ReactElement {
  // Destructure props
  const {
    title = 'test title',
    description = 'Loren ipsum dolor sit amet',
    date = new Date(),
    status = Status.completed,
    priority = Priority.normal,
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props;
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="flex-start"
      flexDirection="column"
      mb={2}
      p={2}
      sx={{
        width: '100%',
        backgroundColor: 'background.paper',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: RenderPriorityBorder(priority),
      }}
    >
      <TaskHeader title={title} date={date} />
      <TaskDescription description={description} />
      <TaskFooter onClick={onClick} onStatusChange={onStatusChange} />
    </Box>
  );
};
Task.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  description: PropTypes.string,
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
  priority: PropTypes.string,
  status: PropTypes.string,
};

Task.defaultProps = {
  title: 'test title',
  date: new Date(),
  description: 'Loren ipsum dolor sit amet',
  onStatusChange: (e) => console.log(e),
  onClick: (e) => console.log(e),
  priority: Priority.normal,
  status: Status.completed,
};

export default Task;
