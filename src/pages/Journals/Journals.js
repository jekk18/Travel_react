import React from 'react'
import { Container, Row } from 'react-bootstrap';
import "./Journals.css";
import journal1 from '../../assets/img/trav1.png';
import avatar1 from '../../assets/img/avatar1.png';
import journal2 from '../../assets/img/trav2.png';
import avatar2 from '../../assets/img/avatar2.png';
import journal3 from '../../assets/img/trav3.png';
import avatar3 from '../../assets/img/avatar3.png';
import journal4 from '../../assets/img/trav4.png';
import avatar4 from '../../assets/img/avatar4.png';
import journal5 from '../../assets/img/trav5.png';
import avatar5 from '../../assets/img/avatar5.png';
import journal6 from '../../assets/img/trav6.png';
import avatar6 from '../../assets/img/avatar6.png';
import JournalsItem from './JournalsItem';
import { Link } from 'react-router-dom';



const Journals = () => {
  return (
    <section>
        <div className="travel-journals">
            <Container>
                <div className="important-title">
                    <h1>The Travel Journals</h1>
                    <div className="text">
                        A journal is a place to record new things you have discovered while exploring various places you visit.
                    </div>
                </div>
                <Row>
                    <div className="journal-box">
                         <JournalsItem 
                                journImg={journal1}
                                journAvatar={avatar1}
                                name={'By Austin Martin'}
                                text={'How to use less plastic when you travel.'}
                                time={'18 Apr 2022'}
                                journalLInk={'/journalspage'}
                         />
                         <JournalsItem 
                                journImg={journal2}
                                journAvatar={avatar2}
                                name={'By Mary Ann'}
                                text={'The best weekend road trips from Denver.'}
                                time={'18 Apr 2022'}
                                journalLInk={'/journalspage'}
                         />
                         <JournalsItem 
                                journImg={journal3}
                                journAvatar={avatar3}
                                name={'By Anina Joseph'}
                                text={'Tips and tricks to plan your next adventure.'}
                                time={'18 Apr 2022'}
                                journalLInk={'/journalspage'}
                         />
                          <JournalsItem 
                                journImg={journal4}
                                journAvatar={avatar4}
                                name={'By Jacob Fernandez'}
                                text={'Tips and tricks to plan your next adventure.'}
                                time={'18 Apr 2022'}
                                journalLInk={'/journalspage'}
                         />
                          <JournalsItem 
                                journImg={journal5}
                                journAvatar={avatar5}
                                name={'By John Smith'}
                                text={'17 unconventional travel hacks you need.'}
                                time={'18 Apr 2022'}
                                journalLInk={'/journalspage'}
                         />
                          <JournalsItem 
                                journImg={journal6}
                                journAvatar={avatar6}
                                name={'By Aaron Kennedy'}
                                text={'Tips and tricks to plan your next adventure.'}
                                time={'18 Apr 2022'}
                                journalLInk={'/journalspage'}
                         />
                    </div>
                </Row>
                <div className="journal-link-div">
                    <Link to='/journalspage' className='journal-link'>
                            View all journal
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
            </Container>
        </div>
    </section>
  )
}

export default Journals