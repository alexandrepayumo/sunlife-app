import { Fragment } from 'react';
import Head from 'next/head';
import Router from 'next/router';

const DUMMY_DATA = {
  Housing: 8000,
  Health: 700,
  Entertainment: 7800,
  Savings: 9000,
  Miscellaneous: 9000,
};

function Home() {
  function sendProps() {
    Router.push({
      pathname: '/piechart',
      query: {
        q: JSON.stringify(DUMMY_DATA),
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
