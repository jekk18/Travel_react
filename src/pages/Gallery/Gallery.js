import Slider from "react-slick";
import React,{ useRef } from 'react';
import { Container } from 'react-bootstrap';
import './Gallery.css';
import { Link } from "react-router-dom";
import gal1 from '../../assets/img/gal1.png';
import gal2 from '../../assets/img/gal2.png';
import gal3 from '../../assets/img/gal3.png';
import gal4 from '../../assets/img/gal4.png';
import gal5 from '../../assets/img/gal5.png';

 

const Gallery = () => {
    const slider = useRef(null);

    const setSettings = {
        dots: false, 
        infinite: true,
        autoplaySpeed: 3000,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: true,
        centerMode: true,
        centerPadding: '10px',
         
    };
       
  return (
    <section style={{background: '#0A0D13', padding: "100px 0"}}>
        <Container>
            <div className="important-title">
                <h1>Gallery Photos</h1>
                <div className="text">
                    Explore the most beautiful places in the world. 
                </div>
            </div>
        </Container>
        <div className="gallery-slider">
            <Slider ref={slider} {...setSettings}>
                
            <div className="gallery-slider-item">
                    <Link to="/about">
                        <div className="gallery-img">
                            <img src={gal1} alt="gallery" />
                        </div>
                        <div className="gallery-rgb"></div>
                        <div className="gallery-text">
                            <h1>Bali</h1>
                            <span>Indonesia</span>
                        </div>
                    </Link>
            </div>
            <div className="gallery-slider-item">
                    <Link to="/gallerypage">
                        <div className="gallery-img">
                            <img src={gal2} alt="gallery" />
                        </div>
                        <div className="gallery-rgb"></div>
                        <div className="gallery-text">
                            <h1>Bali</h1>
                            <span>Indonesia</span>
                        </div>
                    </Link>
            </div>
            <div className="gallery-slider-item">
                    <Link to="/gallerypage">
                        <div className="gallery-img">
                            <img src={gal3} alt="gallery" />
                        </div>
                        <div className="gallery-rgb"></div>
                        <div className="gallery-text">
                            <h1>Bali</h1>
                            <span>Indonesia</span>
                        </div>
                    </Link>
            </div>
            <div className="gallery-slider-item">
                    <Link to="/gallerypage">
                        <div className="gallery-img">
                            <img src={gal4} alt="gallery" />
                        </div>
                        <div className="gallery-rgb"></div>
                        <div className="gallery-text">
                            <h1>Bali</h1>
                            <span>Indonesia</span>
                        </div>
                    </Link>
            </div>
            <div className="gallery-slider-item">
                    <Link to="/gallerypage">
                        <div className="gallery-img">
                            <img src={gal5} alt="gallery" />
                        </div>
                        <div className="gallery-rgb"></div>
                        <div className="gallery-text">
                            <h1>Bali</h1>
                            <span>Indonesia</span>
                        </div>
                    </Link>
            </div>
            <div className="gallery-slider-item">
                    <Link to="/gallerypage">
                        <div className="gallery-img">
                            <img src={gal3} alt="gallery" />
                        </div>
                        <div className="gallery-rgb"></div>
                        <div className="gallery-text">
                            <h1>Bali</h1>
                            <span>Indonesia</span>
                        </div>
                    </Link>
            </div>
            <div className="gallery-slider-item">
                    <Link to="/gallerypage">
                        <div className="gallery-img">
                            <img src={gal4} alt="gallery" />
                        </div>
                        <div className="gallery-rgb"></div>
                        <div className="gallery-text">
                            <h1>Bali</h1>
                            <span>Indonesia</span>
                        </div>
                    </Link>
            </div>
            </Slider>
            <div >
                <button className="button-001 " id="next" onClick={() => slider?.current?.slickPrev()}>
                     <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8.414" height="14.828" viewBox="0 0 8.414 14.828">
                            <path id="Path_12" data-name="Path 12" d="M20.5,11.5l-6,6-6-6" transform="translate(18.5 -7.086) rotate(90)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                        </svg>
                     </span>
                </button>
                <button className="button-002" id="prev" onClick={() => slider?.current?.slickNext()}>
                     <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8.414" height="14.828" viewBox="0 0 8.414 14.828">
                            <path id="Path_12" data-name="Path 12" d="M20.5,11.5l-6,6-6-6" transform="translate(18.5 -7.086) rotate(90)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                        </svg>
                     </span>
                </button>
            </div>
        </div>
         
    </section>
  )
}

export default Gallery