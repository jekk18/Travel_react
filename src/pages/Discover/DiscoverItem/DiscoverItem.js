import React from 'react';
import Fancybox from '../../About/Fancybox';
import { Link } from 'react-router-dom';
import '../Discover.css'; 

const DiscoverItem = (props) => {
  return (
     <div className="discover-item">
        <div className="under-img"> 
            <Fancybox>         
                <img src={props.img} data-src={props.img} alt="Norway"/>
            </Fancybox>
        </div>
        <div className="background-rgba" data-src={props.img} data-fancybox="gallery2" ></div>
        <div className="img-text-0">
            <h1>{props.cityName}</h1>
            <div className="text">{props.cityAbout}</div>
            <Link to={props.discoverLink} className='disocver-link'>
                {props.linkText}
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21.5" height="17.108" viewBox="0 0 21.5 17.108">
                        <g id="Page-1" transform="translate(-0.25 0.054)">
                            <g id="Artboard" transform="translate(1 1)">
                            <g id="arrow-right">
                                <path id="Shape" d="M0,6H20" transform="translate(0 1.5)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" fillRule="evenodd"/>
                                <path id="Shape-2" data-name="Shape" d="M10,0l6,7.5L10,15" transform="translate(4)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" fillRule="evenodd"/>
                            </g>
                            </g>
                        </g>
                    </svg>
                </span>
            </Link>
        </div>
     </div>
  )
}

export default DiscoverItem