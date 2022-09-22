import React from 'react';
import { Container } from 'react-bootstrap';
import './Discover.css';
import DiscoverItem from './DiscoverItem/DiscoverItem';
import Norway from '../../assets/img/Norway.png';
import London from '../../assets/img/London.png';
import Japan from '../../assets/img/Japan.png';

const Discover = () => {
  return (
    <section>
        <div className="discover">
            <Container>
                <div className="important-title">
                    <h1>Discover the most engaging places</h1>
                    <div className="text">
                        Lets's see the world with us with you and your family.
                    </div>
                </div>
                <div className="discover-box">
                    <DiscoverItem 
                        img={Norway} 
                        cityName={'Norway'} 
                        cityAbout={"Norway is a Scandinavian country encompassing mountains, glaciers and deep coastal fjords. "}
                        linkText={"Discover"}
                        discoverLink={'/discoverpage'} 
                    />
                    <DiscoverItem 
                        img={London} 
                        cityName={'London'} 
                        cityAbout={"London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times."} 
                        linkText={"Discover"}
                        discoverLink={'/discoverpage'} 
                    />
                     <DiscoverItem 
                        img={Japan} 
                        cityName={'Japan'} 
                        cityAbout={"Japan is famous for creating the world’s leading electronics and car brands, while remaining deeply connected to traditions."} 
                        linkText={"Discover"}
                        discoverLink={'/discoverpage'} 
                    />
                    
                </div>
            </Container>
        </div>
    </section>
  )
}

export default Discover