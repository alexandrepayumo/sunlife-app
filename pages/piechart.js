import { useRouter } from 'next/router';
import React from 'react';
import PieChart from '../components/PieChart';
import classes from '../styles/piechart.module.css';

function piechart() {
  const router = useRouter();
  const { q } = router.query;

  const data1 = JSON.parse(q);

  const userData = {
    labels: Object.keys(data1),
    datasets: [
      {
        label: 'Expense',
        data: Object.values(data1),
        // backgroundColor: ['green'],
      },
    ],
  };

  data1.Housing *= 0.2;
  data1.Health *= 0.1;
  data1.Entertainment *= 0.05;
  data1.Savings *= 0.05;
  data1.Miscellaneous *= 0.15;

  const standardData = {
    labels: Object.keys(data1),
    datasets: [
      {
        label: 'Expense',
        data: Object.values(data1),
        // backgroundColor: ['green'],
      },
    ],
  };

  return (
    <div>
      <div className={classes.row}>
        <PieChart chartData={userData} info='Your Expense' />
        <PieChart chartData={standardData} info='Standard' />
      </div>
    </div>
  );
}

export default piechart;
