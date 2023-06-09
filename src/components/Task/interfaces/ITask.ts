import ITaskHeader from './ITaskHeader';
import ITaskFooter from './ITaskFooter';
import ITaskDescription from './ITaskDescription';

interface ITask extends ITaskHeader, ITaskDescription, ITaskFooter {
  id?: string;
  priority?: string;
  status?: string;
}
