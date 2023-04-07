import { FC, ReactElement } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import TaskTitleField from './_TaskTitleField';
import TaskDescriptionField from './_TaskDescriptionField';
import TaskDateField from './_TaskDateField';
import TaskSelectField from './_TaskSelectField';
import Status from './enums/Status';
import Priority from './enums/Priority';

// eslint-disable-next-line func-names
const CreateTaskForm: FC = function (): ReactElement {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      <Typography mb={2} component="h2" variant="h6">
        Create Task
      </Typography>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <TaskTitleField />
        <TaskDescriptionField />
        <TaskDateField />
        <Stack sx={{ width: '100%' }} direction="row" spacing={2}>
          <TaskSelectField
            label="Status"
            name="status"
            items={[
              { value: Status.todo, label: Status.todo.toUpperCase() },
              {
                value: Status.inProgress,
                label: Status.inProgress.toUpperCase(),
              },
              {
                value: Status.completed,
                label: Status.completed.toUpperCase(),
              },
            ]}
          />
          <TaskSelectField
            label="Priority"
            name="priority"
            items={[
              { value: Priority.low, label: Priority.low },
              { value: Priority.normal, label: Priority.normal },
              { value: Priority.high, label: Priority.high },
            ]}
          />
        </Stack>
      </Stack>

      {/* Task Status */}
      {/* Task Priority */}
    </Box>
  );
};

export default CreateTaskForm;
