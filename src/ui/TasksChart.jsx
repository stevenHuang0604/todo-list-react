import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import { useTasks } from '../context/TasksContext';
import { useDarkMode } from '../context/DarkModeContext';

import styles from '../styles/TasksChart.module.css';

function formatDate(date) {
  date = new Date(date);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  if (month < 10) month = `0${month}`;
  if (day < 10) day = `0${day}`;

  return `${year}/${month}/${day}`;
}

function TasksChart() {
  const { tasks } = useTasks();
  const { isDarkMode } = useDarkMode();

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
        totalTasks: data[index].totalTasks + 1,
        completedTasks: t.isCompleted ? data[index].completedTasks + 1 : data[index].completedTasks,
      };
    }
  });

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
        Tasks from {data.at(0).label} &mdash; {data.at(-1).label}
      </h2>

      <ResponsiveContainer height={300} width='100%'>
        <LineChart
          layout='horizontal'
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
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
    </div>
  );
}

export default TasksChart;
