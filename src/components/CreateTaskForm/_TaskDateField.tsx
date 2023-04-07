import { FC, ReactElement } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// eslint-disable-next-line import/no-extraneous-dependencies

// eslint-disable-next-line import/no-extraneous-dependencies
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import IDateField from './interfaces/IDateField';

// eslint-disable-next-line func-names
const TaskDateField: FC<IDateField> = function (props): ReactElement {
  // Destructuring props
  const {
    value = new Date(),
    onChange = (date) => console.log(date),
    disabled = false,
  } = props;
  // state

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        format="dd/MM/yyyy"
        label="Task Date"
        renderInput={(params) => <TextField {...params} />}
        onChange={onChange}
        disabled={disabled}
        value={value}
      />
    </LocalizationProvider>
  );
};

TaskDateField.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.instanceOf(Date),
};

TaskDateField.defaultProps = {
  disabled: false,
  onChange: (date) => console.log(date),
  value: new Date(),
};

export default TaskDateField;
