import React, { Fragment } from 'react'
// import { Col, Container, Row } from 'react-bootstrap';
import Header from '../PageComponents/Header/Header';
import HomeBanner from '../PageComponents/HomeBanner/HomeBanner';
import Banner from '../../assets/img/banner.png';
import About from '../About/About';
import Discover from '../Discover/Discover';
import Blogs from '../Blogs/Blogs.js';
import Journals from '../Journals/Journals';
import Radio from '../Radio/Radio';
import Gallery from '../Gallery/Gallery';

const Home = () => {
  return (
     <Fragment>
        <Header/>
         <main>
          <HomeBanner 
            title={'The new way to plan your next adventure'}
            text={'Explore the colourful world'}
            img={Banner}
            btnTitle={'Explore more'}
          />
          <About/>
          <Discover/>
          <Blogs/>
          <Journals/>
          <Radio />
          <Gallery />
         </main>
     </Fragment>
      
  )
}

export default Home