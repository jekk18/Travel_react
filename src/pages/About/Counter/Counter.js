import React from 'react';
import "../../About/About.css";
import CountUp from 'react-countup';

const Counter = (props) => {
  return (
    <div className="count-item">
        <CountUp end={props.countNum} />
        <h3>{props.text}</h3>
    </div>
  )
}

export default Counter;