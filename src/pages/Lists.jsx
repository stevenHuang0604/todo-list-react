import { useTasks } from '../hooks/useTasks';
import Input from '../ui/Input';
import List from '../ui/List';
import Status from '../ui/Status';

function Lists() {
  const { tasks } = useTasks();
  const taskLength = tasks?.length;

  return (
    <>
      <Input />
      {taskLength ? <Status /> : ''}
      <List />
    </>
  );
}

export default Lists;
