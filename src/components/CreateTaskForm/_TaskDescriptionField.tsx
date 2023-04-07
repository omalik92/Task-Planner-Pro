import { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import ITextField from './interfaces/ITextField';

// eslint-disable-next-line func-names
const TaskDescriptionField: FC<ITextField> = function (props): ReactElement {
  // Destructuring props
  const { onChange = (event) => console.log(event), disabled = false } = props;

  return (
    <TextField
      id="description"
      name="description"
      label="Description"
      placeholder="Description"
      variant="outlined"
      size="small"
      multiline
      rows={4}
      fullWidth
      onChange={onChange}
      disabled={disabled}
    />
  );
};

TaskDescriptionField.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

TaskDescriptionField.defaultProps = {
  onChange: (event) => console.log(event),
  disabled: false,
};

export default TaskDescriptionField;
