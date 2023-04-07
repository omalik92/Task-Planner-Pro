import TaskCounterStatusType from '../Interfaces/ITaskCounter';
import Status from '../../CreateTaskForm/enums/Status';

const EmitCorrectBorderColor = (status: TaskCounterStatusType): string => {
  // eslint-disable-next-line default-case
  switch (status) {
    case Status.todo:
      return 'error.light';
    case Status.inProgress:
      return 'warning.light';
    case Status.completed:
      return 'success.light';
  }
};

export default EmitCorrectBorderColor;
