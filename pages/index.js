import { Fragment } from 'react';
import Head from 'next/head';
import Router from 'next/router';

const DUMMY_DATA = [
  { id: 1, type: 'Housing', expense: 8000 },
  { id: 2, type: 'Health', expense: 700 },
  { id: 3, type: 'Entertainment', expense: 7800 },
  { id: 4, type: 'Savings', expense: 9000 },
  { id: 5, type: 'Miscellaneous', expense: 9000 },
];

const DUMMY_DATA2 = [
  { id: 1, type: 'Housing', expense: 8000 * 0.2 },
  { id: 2, type: 'Health', expense: 700 * 0.1 },
  { id: 3, type: 'Entertainment', expense: 7800 * 0.05 },
  { id: 4, type: 'Savings', expense: 9000 * 0.5 },
  { id: 5, type: 'Miscellaneous', expense: 9000 * 0.15 },
];

function Home() {
  function sendProps() {
    Router.push({
      pathname: '/piechart',
      query: {
        data: JSON.stringify(DUMMY_DATA),
      },
    });
  }
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name='description'
          content='Browse a huge list of highly active React meetups!'
        />
      </Head>
      <div className='container'>
        <a onClick={() => sendProps()}>Send Props</a>
      </div>
    </Fragment>
  );
}

export default Home;
