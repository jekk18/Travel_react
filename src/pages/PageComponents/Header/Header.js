import React  from 'react';
import { Link } from 'react-router-dom';
import {  Container } from 'react-bootstrap';
import './Header.css'; 
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
     <header>
        <div className="header">
            <Container>
                <div className="header-nav">
                    <div className="logo">
                        <Link to='/' className='logo-link' >Raido.</Link>
                    </div>
                    <div className="right-side-header">
                        <div className="nav-links">
                            <li className='nav-li'>
                                <Link to="/" className='nav-link-01'>
                                    Home
                                </Link>
                            </li>
                            <li className='nav-li'>
                                <Link to="/aboutpage" className='nav-link-01'>
                                    About Us
                                </Link>
                            </li>
                            <li className='nav-li'>
                                <Link to="/discoverpage" className='nav-link-01'>
                                    Discover
                                </Link>
                            </li>
                            <li className='nav-li'>
                                <Link to="/blogpage" className='nav-link-01'>
                                    Blog
                                </Link>
                            </li>
                            <li className='nav-li'>
                                <Link to="/journalspage" className='nav-link-01'>
                                    Journals
                                </Link>
                            </li>
                            <li className='nav-li'>
                                <Link to="/gallerypage" className='nav-link-01'>
                                    Gallery
                                </Link>
                            </li>
                            <li className='nav-li'>
                                <Link to="/contactpage" className='nav-link-01'>
                                    Contact
                                </Link>
                            </li>
                        </div>
                        <div className="search-header">
                            <form action="">
                                <input type="text" className="hide-input" />
                                <button className='Search-icon'>
                                   <span>
                                   <svg xmlns="http://www.w3.org/2000/svg"  width="18.006" height="18.006" viewBox="0 0 18.006 18.006">  
                                        <g id="Repeat_Grid_1" data-name="Repeat Grid 1" clipPath="url(#clip-path)">
                                            <g transform="translate(-3 -3)">
                                            <path id="Path_1" data-name="Path 1" d="M20.71,19.29l-3.4-3.39A7.92,7.92,0,0,0,19,11a8,8,0,1,0-8,8,7.92,7.92,0,0,0,4.9-1.69l3.39,3.4a1,1,0,1,0,1.42-1.42ZM5,11a6,6,0,1,1,6,6,6,6,0,0,1-6-6Z" fill="#fff"/>
                                            </g>
                                        </g>
                                        </svg>
                                   </span>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="burger-icon">
                         <MenuIcon  style={{color: '#F49F0A', fontSize: '38px'}}/>
                    </div>
                </div>
            </Container>
        </div>
     </header>
  )
}

export default Header;