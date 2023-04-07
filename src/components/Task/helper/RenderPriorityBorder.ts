import Priority from '../../CreateTaskForm/enums/Priority';

// eslint-disable-next-line func-names
const RenderPriorityBorder = function (priority: string): string {
  // eslint-disable-next-line default-case
  switch (priority) {
    case Priority.normal:
      return 'grey.900';
    case Priority.low:
      return 'info.light';
    case Priority.high:
      return 'error.light';
    default:
      return 'grey.900';
  }
};

export default RenderPriorityBorder;
