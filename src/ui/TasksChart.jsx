import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import { useTasks } from '../hooks/useTasks';
import { useDarkMode } from '../hooks/useDarkMode';

import styles from '../styles/TasksChart.module.css';
import { formatDate } from '../helpers/formatDate';

function TasksChart() {
  const { tasks } = useTasks();
  const { isDarkMode } = useDarkMode();

  // tasks structure
  // [
  //   {
  //     text: 'cleaning kitchen',
  //     category: 'personal',
  //     isCompleted: false,
  //     createdAt: '2024-09-20T08:36:38.937Z',
  //     id: '3dbd1c20-2309-4744-aa91-1a843b7a6c6e',
  //   },
  // ];

  // data retrieved from tasks should look like this
  // [
  //   {
  //     label: '2024/09/15',
  //     totalTasks: 2,
  //     completedTasks: 1,
  //   },
  //   {
  //     label: '2024/09/16',
  //     totalTasks: 4,
  //     completedTasks: 1,
  //   },
  // ];

  let data = [];
  tasks.forEach((t) => {
    const index = data.findIndex((d) => d.label === formatDate(t.createdAt));
    if (index === -1) {
      data.push({
        label: formatDate(t.createdAt),
        totalTasks: 1,
        completedTasks: t.isCompleted ? 1 : 0,
      });
    } else {
      data[index] = {
        ...data[index],
        totalTasks: ++data[index].totalTasks,
        completedTasks: t.isCompleted ? ++data[index].completedTasks : data[index].completedTasks,
      };
    }
  });

  data = data.sort((a, b) => new Date(a.label) - new Date(b.label));

  const colors = isDarkMode
    ? {
        totalTasks: { stroke: '#4f46e5', fill: '#4f46e5' },
        completedTasks: { stroke: '#22c55e', fill: '#22c55e' },
        text: '#e5e7eb',
        background: '#18212f',
      }
    : {
        totalTasks: { stroke: '#4f46e5', fill: '#c7d2fe' },
        completedTasks: { stroke: '#16a34a', fill: '#dcfce7' },
        text: '#374151',
        background: '#fff',
      };

  return (
    <div className={styles.chart}>
      <h2 className={styles.header}>
        {tasks.length ? `Tasks from ${data.at(0)?.label} \u2013 ${data.at(-1)?.label}` : 'No data available'}
      </h2>

      {tasks.length ? (
        <ResponsiveContainer height={300} width='100%'>
          <LineChart layout='horizontal' data={data}>
            <CartesianGrid strokeDasharray='1 1' />
            <Tooltip contentStyle={{ background: colors.background }} />
            <XAxis dataKey='label' tick={{ fill: colors.text }} tickLine={{ stroke: colors.text }} />
            <YAxis tick={{ fill: colors.text }} tickLine={{ stroke: colors.text }} />
            <Line
              dataKey='totalTasks'
              type='monotone'
              stroke={colors.totalTasks.stroke}
              name='Total tasks'
              strokeWidth={2}
            />
            <Line
              dataKey='completedTasks'
              type='monotone'
              stroke={colors.completedTasks.stroke}
              name='Completed tasks'
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        ''
      )}
    </div>
  );
}

export default TasksChart;
