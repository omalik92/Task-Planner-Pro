import { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import ITextField from './interfaces/ITextField';

// eslint-disable-next-line func-names
const TaskTitleField: FC<ITextField> = function (props): ReactElement {
  // Destructuring props
  const { onChange = (event) => console.log(event), disabled = false } = props;
  return (
    <TextField
      id="title"
      label="Task Title"
      placeholder="Task Title"
      variant="outlined"
      size="small"
      name="title"
      fullWidth
      disabled={disabled}
      onChange={onChange}
    />
  );
};

TaskTitleField.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

TaskTitleField.defaultProps = {
  onChange: (event) => console.log(event),
  disabled: false,
};
export default TaskTitleField;
