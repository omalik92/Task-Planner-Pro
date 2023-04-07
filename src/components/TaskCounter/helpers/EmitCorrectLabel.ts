import TaskCounterStatusType from '../Interfaces/ITaskCounter';
import Status from '../../CreateTaskForm/enums/Status';

// eslint-disable-next-line func-names
const EmitCorrectLabel = function (status: TaskCounterStatusType): string {
  // eslint-disable-next-line default-case
  switch (status) {
    case Status.todo:
      return `Todo's`;
    case Status.inProgress:
      return `In Progress`;
    case Status.completed:
      return `Completed`;
    default:
      throw new Error(`Unexpected status: ${status}`);
  }
};

export default EmitCorrectLabel;
