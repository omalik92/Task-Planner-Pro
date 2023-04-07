import { FC, ReactElement } from 'react';
import { Box, Button, Switch, FormControlLabel } from '@mui/material';
import PropTypes from 'prop-types';
import ITaskFooter from './interfaces/ITaskFooter';

// eslint-disable-next-line func-names
const TaskFooter: FC<ITaskFooter> = function (props): ReactElement {
  const {
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props;
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={4}
    >
      <FormControlLabel
        label="In Progress"
        control={<Switch onChange={(e) => onStatusChange(e)} color="warning" />}
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: 'white' }}
        onClick={(e) => onClick(e)}
      >
        Mark complete
      </Button>
    </Box>
  );
};

TaskFooter.propTypes = {
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
};

TaskFooter.defaultProps = {
  onStatusChange: (e) => console.log(e),
  onClick: (e) => console.log(e),
};

export default TaskFooter;
