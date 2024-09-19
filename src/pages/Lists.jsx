import { useTasks } from '../context/TasksContext';
import Input from '../ui/Input';
import List from '../ui/List';
import Status from '../ui/Status';

function Lists() {
  const { tasks } = useTasks();
  const taskLength = tasks?.length;

  return (
    <>
      <Input />
      <List />
      {taskLength ? <Status /> : ''}
    </>
  );
}

export default Lists;
