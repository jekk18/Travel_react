import React, { Fragment } from 'react';
import Discover from '../pages/Discover/Discover';
import Journals from '../pages/Journals/Journals';
import Header from '../pages/PageComponents/Header/Header';


const DiscoverPage = () => {
  return (
    <Fragment>
        <Header/>
        <main>
            <Discover/>
            <Journals/>
        </main>
    </Fragment>
  )
}

export default DiscoverPage;