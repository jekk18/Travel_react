import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './HomeBanner.css';

const HomeBanner = (props) => {
  return (
    <section>
        <div className="banner">
            <div className="img-01">
                <img src={props.img} alt="banner" />
            </div>
            <div className="banner-rgb"></div>
            <div className="banner-text">
                <Container>
                    <div className="banner-text-01">
                        <h1>{props.title}</h1>
                        <h4><span className='line-01'></span> {props.text} </h4>
                        <Link to='/about' className='link-about'>
                            {props.btnTitle}
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18.709" height="18.709" viewBox="0 0 18.709 18.709">
                                    <path id="Path_2" data-name="Path 2" d="M13.354,12.325a1.029,1.029,0,1,0,1.029,1.029,1.032,1.032,0,0,0-1.029-1.029Zm0-8.325a9.354,9.354,0,0,0,0,18.709,9.489,9.489,0,0,0,7.164-3.339,9.121,9.121,0,0,0,2.191-6.016A9.352,9.352,0,0,0,13.354,4ZM15.4,15.4,7.742,18.967l3.564-7.661,7.661-3.564Z" transform="translate(-4 -4)" fill="#0a0d13"/>
                                </svg>
                            </span>
                        </Link>
                    </div>
                </Container>
            </div>
        </div>
    </section>
  )
}

export default HomeBanner