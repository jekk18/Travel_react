import React, { Fragment } from 'react';
import About from '../pages/About/About';
import Blogs from '../pages/Blogs/Blogs';
import Header from '../pages/PageComponents/Header/Header';

const AboutPage = () => {
  return (
    <Fragment>
        <Header   />
        <main>
            <About />
            <Blogs/>
        </main> 
    </Fragment>
     
  )
}

export default AboutPage