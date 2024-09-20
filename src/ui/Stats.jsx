import { HiOutlineChartPie, HiOutlineCheck, HiOutlineRocketLaunch, HiOutlineSquares2X2 } from 'react-icons/hi2';

import { useTasks } from '../context/TasksContext';

import Stat from './Stat';

function Stats() {
  const { tasks } = useTasks();

  const totalTasksNum = tasks.length;
  const activeTasksNum = tasks.filter((t) => !t.isCompleted).length;
  const completedTasksNum = tasks.filter((t) => t.isCompleted).length;
  const completedRate = completedTasksNum / totalTasksNum;

  return (
    <>
      <Stat title='Total' color='blue' icon={<HiOutlineSquares2X2 />} value={totalTasksNum} />
      <Stat title='Active' color='indigo' icon={<HiOutlineRocketLaunch />} value={activeTasksNum} />
      <Stat title='Completed' color='green' icon={<HiOutlineCheck />} value={completedTasksNum} />
      <Stat
        title='Completed Rate'
        color='yellow'
        icon={<HiOutlineChartPie />}
        value={(completedRate * 100).toFixed(2) + '%'}
      />
    </>
  );
}

export default Stats;
