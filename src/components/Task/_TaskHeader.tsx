import { FC, ReactElement } from 'react';
import { Box, Chip, Typography } from '@mui/material';
import { format } from 'date-fns';
import Prop_Types from 'prop-types';
import ITaskHeader from './interfaces/ITaskHeader';

// eslint-disable-next-line func-names
const TaskHeader: FC<ITaskHeader> = function (props): ReactElement {
  const { title = 'Default title', date = new Date() } = props;
  return (
    <Box display="flex" width="100%" justifyContent="space-between" mb={3}>
      <Box>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box>
        <Chip variant="outlines" label={format(date, 'PPP')} />
      </Box>
    </Box>
  );
};

TaskHeader.propTypes = {
  title: Prop_Types.string,
  date: Prop_Types.instanceOf(Date),
};

TaskHeader.defaultProps = {
  title: 'Default title',
  date: new Date(),
};

export default TaskHeader;
