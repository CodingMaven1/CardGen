import React from 'react';

import './Card.css';

const Card = (props) => (
    <div className='card'>
        <h1 className='card--heading'>Name: {props.name}</h1>
        <h1 className='card--heading'>City: {props.city}</h1>
        <h1 className='card--heading'>Zipcode: {props.zipcode}</h1>
        <h1 className='card--heading'>Email: {props.email}</h1>
        <h1 className='card--heading'>Message: {props.message}</h1>
    </div>
)

export default Card;