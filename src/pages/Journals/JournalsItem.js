import React from 'react';
import '../Journals/Journals.css';
import { Link } from 'react-router-dom';

const JournalsItem = (props) => {
  return (
    
    <div className="journal-item">
        <Link to={props.journalLInk} className="img-journal">
            <img src={props.journImg} alt="travel" />
        </Link>
        <div className="journal-share-box">
            <Link to={props.journalLInk} className="avatar">
                <span>
                    <img src={props.journAvatar} alt="avatar" />
                </span>
                <h5>{props.name}</h5>
            </Link>
            <Link to={props.journalLInk} className="text">
                {props.text}
            </Link>
            <Link to={props.journalLInk} className="time">
                {props.time}
            </Link>
            <a href='https://www.youtube.com/' className="pos-abs-share">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19.92" viewBox="0 0 18 19.92">
                        <path id="Path_5" data-name="Path 5" d="M18,16.08a2.912,2.912,0,0,0-1.96.77L8.91,12.7A3.274,3.274,0,0,0,9,12a3.274,3.274,0,0,0-.09-.7l7.05-4.11A2.993,2.993,0,1,0,15,5a3.274,3.274,0,0,0,.09.7L8.04,9.81a3,3,0,1,0,0,4.38l7.12,4.16a2.821,2.821,0,0,0-.08.65A2.92,2.92,0,1,0,18,16.08Z" transform="translate(-3 -2)" fill="#fff"/>
                    </svg>
                </span>
            </a>
        </div>
    </div>
  );
};

export default JournalsItem