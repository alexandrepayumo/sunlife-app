import { useRouter } from 'next/router';
import React from 'react';
import PieChart from '../components/PieChart';
import classes from '../styles/piechart.module.css';

function piechart() {
  const router = useRouter();
  const { data } = router.query;

  const data1 = JSON.parse(data);
  console.log(data1);
  // const props = { userData };
  const userData = {
    labels: data1.map((data) => data.type),
    datasets: [
      {
        label: 'Expense',
        data: data1.map((data) => data.expense),
        // backgroundColor: ['green'],
      },
    ],
  };

  const data2 = data1.map((item) => {
    if (item.type === 'Housing') {
      item.expense *= 0.2;
    } else if (item.type === 'Health') {
      item.expense *= 0.1;
    } else if (item.type === 'Health') {
      item.expense *= 0.05;
    } else if (item.type === 'Entertainment') {
      item.expense *= 0.05;
    } else if (item.type === 'Savings') {
      item.expense *= 0.5;
    } else {
      item.expense *= 0.15;
    }
    return item;
  });

  const standardData = {
    labels: data2.map((data) => data.type),
    datasets: [
      {
        label: 'Expense',
        data: data2.map((data) => data.expense),
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
