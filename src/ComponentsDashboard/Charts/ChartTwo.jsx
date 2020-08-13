import React from 'react';
import { BarChart, XAxis, Bar, Tooltip, Cell } from 'recharts';
import style from './Chart.module.css';

const COLORS = ['#A45A52', '#00C49F', '#FFBB28', '#FF8042'];

const data = [
  {
    name: 'mobile',
    usage: 70,
  },
  {
    name: 'desktop',
    usage: 20,
  },
  {
    name: 'tablets',
    usage: 10,
  },
];

const ChartTwo = () => {
  return (
    <>
      <div className={style.wrapper}>
        <h5 className={style.chartDescription}>devices usage of our App</h5>
        <BarChart
          className={style.chartOne}
          width={250}
          height={200}
          data={data}
          label={{ fill: 'red', fontSize: 20, color: 'pink' }}
        >
          <XAxis dataKey="name" style={{ fontFamily: 'Baloo2' }} />
          <Tooltip className={style.chartOne} />
          <Bar dataKey="usage" label={{ fill: 'black', fontSize: 18 }}>
            {data.map((entry, index) => (
              <Cell fill={COLORS[index % COLORS.length]} key={index} />
            ))}
          </Bar>
        </BarChart>
      </div>
    </>
  );
};

export default ChartTwo;
