import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Counter from './Counter/Counter';
import aboutImg from '../../assets/img/aboutImg.png';
import Fancybox from './Fancybox';
// import $ from 'jquery'; 
 
 
const About = () => {
    // $('.about-left-box h1').click(() => {
    //     console.log('clicked');
    // });
    
  return (
   <section>
    <div className="about-section">
        <Container>
            <Row>
                <Col className='col-xxl-8 col-lg-8 col-md-12 col-12'>
                    <div className="about-left-box">
                        <h1 style={{cursor: 'pointer'}}>About Us</h1>
                        <div className="text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Et molestias libero praesentium optio illo, molestiae repudiandae ducimus iste quas officia totam excepturi 
                            sint unde inventore non cumque culpa officiis dolore quis quae architecto nisi similique! Doloribus fugiat 
                            natus nobis eius praesentium aperiam inventore! Blanditiis a inventore quia, doloribus porro voluptatum.
                        </div>
                        <div className="counter-box">
                            <Counter text={'Completed Trips'} countNum={268} className="count-numb"/>
                            <Counter text={'Tour Guides'} countNum={176} className="count-numb"/>
                            <Counter text={'Destinations'} countNum={153} className="count-numb"/>
                        </div>
                        <Link to='/aboutpage' className='link-about'>
                            Read More
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="17.811" viewBox="0 0 22 17.811">
                                    <g id="Page-1" transform="translate(0 0.406)">
                                        <g id="Artboard" transform="translate(1 1)">
                                        <g id="arrow-right">
                                            <path id="Shape" d="M0,6H20" transform="translate(0 1.5)" fill="none" stroke="#0a0d13" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fillRule="evenodd"/>
                                            <path id="Shape-2" data-name="Shape" d="M10,0l6,7.5L10,15" transform="translate(4)" fill="none" stroke="#0a0d13" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fillRule="evenodd"/>
                                        </g>
                                        </g>
                                    </g>
                                </svg>
                            </span>
                        </Link>
                    </div>
                </Col>
                <Col className='col-xxl-6 col-lg-6 col-md-12 col-12 posit-abs'>
                    <div className="about-img">
                         <Fancybox>
                             <img src={aboutImg} alt="aboutImg" data-fancybox="gallery"
                                data-src={aboutImg}/>
                         </Fancybox>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
   </section>
  )
}

export default About